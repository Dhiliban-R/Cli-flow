---
name: swarm-orchestration-skill
description: Orchestrates multiple specialized agents to achieve complex, multi-domain objectives.
---

# Swarm Orchestration Skill - Parallel Execution

A strategic workflow for managing a team of specialized sub-agents.

## Execution Lifecycle

### 1. Goal Decomposition
- Analyze the user's high-level request.
- Break it down into specialized sub-tasks (e.g., UI, Backend, Security).

### 2. Agent Dispatch
- Identify the best agent for each sub-task.
- Dispatch tasks using the `@agent-name` syntax.
- Manage dependencies between parallel tasks.

### 3. Aggregation & Synthesis
- Collect outputs from all dispatched agents.
- Resolve any conflicts or inconsistencies between their work.

### 4. Verification
- Use the `qa-automation-lead` to verify the combined output.
- Perform a final review before delivery.

## Swarm Roles
- **Orchestrator**: The main Gemini CLI session.
- **Specialists**: Sub-agents like `full-stack-engineer`, `ethical-hacker`, etc.
- **Validator**: `qa-automation-lead`.

## Core Directives
1. **Parallelism**: Execute independent tasks in parallel when possible.
2. **Context**: Ensure each agent has exactly the context it needs—no more, no less.
3. **Synthesis**: Always provide a unified final result to the user.
