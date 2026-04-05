import { describe, it, expect, vi } from 'vitest';
import { EventBus } from '../v1/@cli-flow/shared/src/index';
import { SwarmManager } from '../v1/@cli-flow/swarm/src/index';

describe('Cli-flow Swarm Orchestration', () => {
  it('should initialize a swarm and execute a coordinated task', async () => {
    // 1. Setup Event Bus
    const eventBus = new EventBus();
    const eventSpy = vi.spyOn(eventBus, 'publish');

    // 2. Initialize Swarm Manager
    const swarm = new SwarmManager('Test Hive', 'hierarchical', eventBus);

    // 3. Spawn specialized agents
    await swarm.initializeSwarm(['coordinator', 'researcher', 'coder']);

    // 4. Verify initialization events
    expect(eventSpy).toHaveBeenCalledWith(expect.objectContaining({
      type: 'swarm_initialized'
    }));

    // 5. Create a user task
    const userTask = {
      id: 'task-123',
      subject: 'Implement user auth',
      description: 'Create a JWT-based authentication system',
      status: 'pending' as const,
      priority: 8,
      dependencies: [],
      createdAt: new Date().toISOString()
    };

    // 6. Execute task (this triggers the coordinator planning)
    await swarm.executeTask(userTask);

    // 7. Verify status changes
    const status = swarm.getSwarmStatus();
    expect(status.agents.length).toBe(3);
    
    // Check for coordinator status change via mocked behavior
    const coordinator = status.agents.find(a => a.role === 'coordinator');
    expect(coordinator?.status).toBe('finished');

    // 8. Verify event-sourced state tracking
    const history = eventBus.getHistory();
    expect(history.some(e => e.type === 'task_assigned')).toBe(true);

    console.log('[TEST] Swarm orchestration verified successfully.');
  });
});
