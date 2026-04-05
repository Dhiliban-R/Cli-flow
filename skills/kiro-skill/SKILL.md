---
name: kiro-skill
description: Interactive feature development workflow (Requirements → Design → Tasks → Execute).
---

# Kiro Skill - Spec-Driven Development

An interactive workflow for transforming ideas into verified implementations using Gemini CLI.

## Workflow Phases

### 1. Requirements (What)
Use the **EARS (Easy Approach to Requirements Syntax)** format:
- **Ubiquitous**: The <system> shall <behavior>.
- **Event-driven**: When <event>, the <system> shall <behavior>.
- **Unwanted behavior**: If <condition>, the <system> shall <behavior>.
- **State-driven**: While <state>, the <system> shall <behavior>.
- **Optional**: Where <feature>, the <system> shall <behavior>.

### 2. Design (How)
- **Architecture**: Define data models and component boundaries.
- **Verification**: Specify test strategies and success criteria.

### 3. Tasks (Steps)
Decompose design into atomic, dependency-ordered tasks in `PLAN.md`.

### 4. Execute (Build)
Implement tasks sequentially, ensuring each is verified before moving to the next.

## Core Directives

1. **Validation**: Every requirement must have a corresponding test case.
2. **Ambiguity**: If a requirement is unclear, pause and ask exactly 3 clarifying questions.
3. **Traceability**: Link implementation commits to requirements in `PLAN.md`.
