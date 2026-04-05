# Cli-flow: The Proactive Swarm Brain for Gemini CLI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Gemini CLI](https://img.shields.io/badge/Powered%20By-Gemini%20CLI-blue)](https://github.com/google/gemini-cli)
[![Version](https://img.shields.io/badge/Version-1.0.0-green.svg)](https://github.com/Dhiliban-R/Cli-flow)

**Cli-flow** is a high-performance, multi-agent orchestration framework that transforms **Gemini CLI** into a proactive, full-lifecycle IT engineering partner. It moves beyond simple "chat" into a **Spec-Driven Swarm Engine** where specialized agents collaborate autonomously to deliver production-grade results.

---

## 🏗 Swarm Architecture

Cli-flow operates on a **Proactive Orchestration** model. Every request is analyzed by the `swarm-router` and dispatched to the relevant domain specialists.

```text
[ USER REQUEST ]
      |
      v
[ SWARM ROUTER ] (Orchestrator)
      |
      +---> [ 📝 PLANNING ]
      |      |-- @cloud-architect (IaC & Resilience)
      |      |-- @ux-designer (Accessibility & Flow)
      |      +-- @tech-adoption-specialist (Tech Strategy)
      |
      +---> [ 💻 DEVELOPING ]
      |      |-- @full-stack-engineer (APIs & Core Logic)
      |      |-- @ui-engineer (Aesthetics & Interface)
      |      |-- @ai-ml-engineer (Intelligence Integration)
      |      +-- @qa-automation-lead (Verification & TDD)
      |
      +---> [ ⚙️ WORKING ]
      |      |-- @data-engineer (Pipelines & ETL)
      |      |-- @devops-sre (CI/CD & Reliability)
      |      |-- @dba (Performance & Integrity)
      |      +-- @github-issue-fixer (Automated PRs)
      |
      +---> [ 🛡️ AUDITING ]
      |      |-- @ethical-hacker (Security & Hardening)
      |      |-- @server-auditor (Compliance & Health)
      |      +-- @instruction-reflector (Self-Optimization)
      |
      +---> [ 📚 DOCUMENTING ]
             +-- @documentation-specialist (Knowledge Management)
```

---

## 🛠 Skills

Skills are reusable capabilities activated via `/activate_skill`.

<details>
<summary><b>autonomous-skill</b> - Multi-session task execution</summary>

Execute complex, long-running tasks across multiple sessions with automatic continuation and progress tracking. Supports **Structured Mode** (phased planning) and **Lightweight Mode** (iterative TDD/refactoring).

**Key Features:**
- Task isolation in `.gemini/autonomous/`.
- Automatic `PLAN.md` updates.
- Verification loops with promise tags (`<promise>DONE</promise>`).

</details>

<details>
<summary><b>kiro-skill</b> - Interactive Feature Development</summary>

A spec-driven workflow (Requirements → Design → Tasks → Execute) that ensures every feature is built on a solid foundation. Uses EARS format for requirements and ensures test-driven implementation.

</details>

<details>
<summary><b>security-audit-skill</b> - Vulnerability Scanning & Hardening</summary>

A multi-layered approach to security: Attack Surface Mapping → SAST/DAST → Mitigation → Hardening. Automatically invokes the `@ethical-hacker` for expert analysis.

</details>

<details>
<summary><b>deep-research</b> - Knowledge Orchestration</summary>

Multi-agent orchestration for systematic web/document research. Decomposes high-level goals into parallel sub-objectives, spawns parallel searches, and delivered synthesized reports.

</details>

<details>
<summary><b>tech-adoption-skill</b> - Strategic Tech Onboarding</summary>

A structured approach to evaluating and integrating new technologies. Handles everything from research and PoC to boilerplate generation and documentation.

</details>

---

## 🤖 Agents (The Swarm)

<details>
<summary><b>Planning Specialists</b></summary>

- **@cloud-architect**: Designs high-availability cloud infrastructure and IaC.
- **@ux-designer**: Focuses on user flow, wireframing, and accessibility.
- **@tech-adoption-specialist**: Evaluates and plans technology migrations.

</details>

<details>
<summary><b>Development Specialists</b></summary>

- **@full-stack-engineer**: Architects and implements end-to-end APIs and core logic.
- **@ui-engineer**: Specialist in aesthetics, interactivity, and CSS architecture.
- **@ai-ml-engineer**: Integrates AI models, data pipelines, and RAG systems.
- **@qa-automation-lead**: Ensures quality through automated tests and CI/CD.

</details>

<details>
<summary><b>Operations & Data Specialists</b></summary>

- **@data-engineer**: Builds scalable ETL pipelines and data transformation workflows.
- **@devops-sre**: Manages CI/CD, Kubernetes, and site reliability.
- **@dba**: Optimizes database performance, replication, and integrity.
- **@github-issue-fixer**: Automatically reproduces, fixes, and submits PRs for issues.

</details>

<details>
<summary><b>Security & Audit Specialists</b></summary>

- **@ethical-hacker**: Penetration testing, vulnerability research, and hardening.
- **@server-auditor**: Linux system administration, health checks, and compliance.
- **@instruction-reflector**: Self-improving agent that optimizes system instructions.

</details>

---

## 🚀 Setup & Installation

### 1. Register Skills
Cli-flow skills are discovered automatically once linked.
```bash
gemini skills link /home/dhili/Cli-flow/skills
```

### 2. Configure Settings
Update your `~/.gemini/settings.json` to enable the full swarm capability:

```json
{
  "experimental": {
    "enableAgents": true,
    "alwaysThinkingEnabled": true
  },
  "subagentPaths": [
    "/home/dhili/Cli-flow/agents"
  ],
  "hooks": {
    "SessionEnd": [
      {
        "name": "session-reflection",
        "type": "command",
        "command": "bash /home/dhili/Cli-flow/scripts/reflect.sh"
      }
    ],
    "AfterTool": [
      {
        "matcher": "write_file",
        "hooks": [
          {
            "name": "auto-lint",
            "type": "command",
            "command": "bash /home/dhili/Cli-flow/scripts/lint.sh"
          }
        ]
      }
    ]
  }
}
```

---

## 🛡 Security Mandates
Cli-flow is built with a **Security-First** mindset:
- **Credential Protection**: Hard deny on reading `.env`, `.ssh`, and AWS keys.
- **Verification-First**: No code is merged without passing a security audit.
- **Surgical Changes**: Minimalist approach to patching to avoid regressions.

---
