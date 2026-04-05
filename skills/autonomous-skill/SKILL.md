---
name: autonomous-skill
description: Execute long-running, multi-session tasks autonomously using Gemini CLI. Supports structured task decomposition and iterative Ralph-style TDD/refactoring.
---

# Autonomous Skill - Sustained Engineering

Execute complex tasks across multiple Gemini CLI sessions with automatic progress tracking, state persistence, and verification loops.

## Two Execution Modes

### 1. Structured (Default)
Decomposes a project into a phased `PLAN.md`.
- **Phase 1**: Initializer sub-agent creates a comprehensive `PLAN.md`.
- **Phase 2**: Executor sub-agent picks up tasks sequentially.
- **Phase 3**: Validator sub-agent verifies completion of each task.

### 2. Lightweight (`--lightweight`)
Iterative Ralph-style loop (TDD, bug fixing, refactoring).
- Repeat the same objective until specific success criteria are met.
- No task decomposition; purely outcome-driven.

## State Management

- **Location**: `.gemini/autonomous/<task-name>/`
- **Files**:
  - `task_list.md`: Master checklist.
  - `progress.md`: Per-session execution log.
  - `run.lock`: Prevents concurrent runs.

## Workflow Directives

1. **Always Update PLAN.md**: Never start a session without verifying the plan's status.
2. **Atomic Commits**: If in a git repo, commit after every verified sub-task.
3. **Promise Tags**: Output `<promise>DONE</promise>` only when the high-level objective is fully achieved and verified.
4. **Budget Awareness**: Monitor token usage and session time to stay within project limits.

## Troubleshooting

- **Nested Sessions**: If spawning sub-processes, ensure environment variables are cleaned.
- **Completion Detection**: If the agent loops without progress, it must pause and ask for human clarification.
