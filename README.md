# Cli-flow: Gemini CLI Advanced Workflow & Intelligence

A high-performance "brain" for Gemini CLI, featuring specialized skills, agents, and automated workflows.

## Features

- **Autonomous Multi-Session Execution**: Long-running tasks with `autonomous-skill`.
- **Spec-Driven Development**: `kiro-skill` for Requirement → Design → Tasks → Execute.
- **Expert Sub-Agents**: Dedicated personas for PR Review, UI Engineering, and GitHub Issue fixing.
- **Deep Research**: Multi-agent orchestration for comprehensive web and document analysis.
- **Automated Hooks**: Post-session reflection and automatic linting.

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url> /home/dhili/Cli-flow
   ```

2. **Register Skills**:
   ```bash
   gemini skills link /home/dhili/Cli-flow/skills
   ```

3. **Configure Agents**:
   Ensure `~/.gemini/settings.json` includes:
   ```json
   "experimental": { "enableAgents": true },
   "subagentPaths": ["/home/dhili/Cli-flow/agents"]
   ```

4. **Setup Hooks**:
   Copy the contents of `/home/dhili/Cli-flow/hooks/hooks.json` to your `~/.gemini/settings.json`.

## Usage

- **Activate a skill**: `/activate_skill autonomous-skill`
- **Call a sub-agent**: `@pr-reviewer review this PR #123`
- **Run deep research**: `Deep research the latest trends in AI agents`
- **Start a feature spec**: `I want to build a new feature using kiro`

## Philosophy

Cli-flow is designed to minimize context usage while maximizing engineering quality. It prioritizes empirical validation (tests) and structured planning (`PLAN.md`).
