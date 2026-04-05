/**
 * Core types and interfaces for the Cli-flow system.
 * This mirrors the foundational architecture for multi-agent orchestration.
 */

export type AgentRole = 
  | 'coordinator' 
  | 'researcher' 
  | 'architect' 
  | 'coder' 
  | 'tester' 
  | 'reviewer' 
  | 'security-auditor'
  | 'performance-engineer';

export type SwarmTopology = 'hierarchical' | 'mesh' | 'hierarchical-mesh' | 'adaptive';

export interface Agent {
  id: string;
  name: string;
  role: AgentRole;
  status: 'idle' | 'busy' | 'finished' | 'error';
  capabilities: string[];
  memoryNamespace?: string;
}

export interface Task {
  id: string;
  subject: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  assignedTo?: string; // Agent ID
  dependencies: string[]; // Task IDs
  priority: number;
  createdAt: string;
  completedAt?: string;
}

export interface SwarmConfig {
  id: string;
  name: string;
  topology: SwarmTopology;
  maxAgents: number;
  strategy: 'specialized' | 'balanced' | 'aggressive';
  agents: Agent[];
}

export interface Session {
  id: string;
  startTime: string;
  endTime?: string;
  tasks: Task[];
  swarm?: SwarmConfig;
  metadata: Record<string, any>;
}

/**
 * Event-sourced communication protocol
 */
export type CliFlowEventType = 
  | 'session_started'
  | 'task_created'
  | 'task_assigned'
  | 'task_completed'
  | 'agent_spawned'
  | 'agent_status_changed'
  | 'swarm_initialized';

export interface CliFlowEvent {
  id: string;
  type: CliFlowEventType;
  timestamp: string;
  sessionId: string;
  payload: any;
}

export interface IEventBus {
  publish(event: CliFlowEvent): Promise<void>;
  subscribe(type: CliFlowEventType, callback: (event: CliFlowEvent) => void): void;
}

/**
 * EventBus: Centralized messaging system for Cli-flow.
 * Enables event-sourced state tracking and inter-package communication.
 */
export class EventBus implements IEventBus {
  private subscribers: Map<CliFlowEventType, ((event: CliFlowEvent) => void)[]> = new Map();
  private history: CliFlowEvent[] = [];

  public async publish(event: CliFlowEvent): Promise<void> {
    this.history.push(event);
    const handlers = this.subscribers.get(event.type) || [];
    for (const handler of handlers) {
      handler(event);
    }
  }

  public subscribe(type: CliFlowEventType, callback: (event: CliFlowEvent) => void): void {
    if (!this.subscribers.has(type)) {
      this.subscribers.set(type, []);
    }
    this.subscribers.get(type)!.push(callback);
  }

  public getHistory(): CliFlowEvent[] {
    return this.history;
  }
}
