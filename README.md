# Cli-flow: The Proactive Swarm Brain for Gemini CLI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Gemini CLI](https://img.shields.io/badge/Powered%20By-Gemini%20CLI-blue)](https://github.com/google/gemini-cli)

Cli-flow is a high-performance, multi-agent orchestration framework designed to transform **Gemini CLI** into a proactive, full-lifecycle IT engineering partner. It moves beyond simple "chat" into a **Spec-Driven Swarm Engine** where specialized agents collaborate autonomously to deliver production-grade results.

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

## ✨ Core Capabilities

### 🤖 Proactive Swarm Orchestration
You don't need to call specialists manually. Cli-flow identifies the required expertise for any task and **adopts the correct personality automatically**.
- *User: "Build a secure payment API"*
- *Cli-flow: Automatically invokes `@full-stack`, `@ethical-hacker`, and `@qa-automation-lead`.*

### 🛠 Specialized Skill-sets
- **`autonomous-skill`**: Multi-session execution for long-running, complex tasks.
- **`kiro-skill`**: Structured feature development (Requirements → Design → Tasks → Execute).
- **`security-audit-skill`**: Deep vulnerability scanning and system hardening.
- **`deep-research`**: Orchestrated web investigation and knowledge synthesis.
- **`tech-adoption-skill`**: Systematic evaluation and onboarding of new technologies.

### 🔄 Intelligent Lifecycle Hooks
- **Auto-Reflection**: Automatically analyzes every session to improve its own instructions.
- **Auto-Lint**: Triggers linter checks immediately after any file modification.
- **Status HUD**: A custom CLI status line showing real-time git status, model usage, and costs.

---

## 🚀 Installation

### 1. Clone & Setup
```bash
git clone https://github.com/Dhiliban-R/Cli-flow.git ~/.gemini/Cli-flow
```

### 2. Link Skills
```bash
gemini skills link ~/.gemini/Cli-flow/skills
```

### 3. Configure Gemini CLI
Update your `~/.gemini/settings.json` to enable the swarm:

```json
{
  "experimental": {
    "enableAgents": true,
    "alwaysThinkingEnabled": true
  },
  "subagentPaths": [
    "~/.gemini/Cli-flow/agents"
  ],
  "hooks": {
    "SessionEnd": [
      {
        "name": "session-reflection",
        "type": "command",
        "command": "bash ~/.gemini/Cli-flow/scripts/reflect.sh"
      }
    ]
  }
}
```

---

## 📖 Usage Examples

| Goal | Command / Prompt |
| :--- | :--- |
| **New Feature** | `I want to build a real-time dashboard using @kiro-skill` |
| **Security Audit** | `/activate_skill security-audit-skill scan the src/ directory` |
| **Cloud Deploy** | `@cloud-architect design a high-availability GCP setup for this app` |
| **Complex Fix** | `@github-issue-fixer resolve issue #104 in autonomous mode` |
| **Deep Research** | `Deep research the current state of WebGPU performance` |

---

## 🛡 Security & Ethics
Cli-flow is built with a **Security-First** mindset.
- **Deny-by-default** rules for SSH keys, AWS credentials, and `.env` files.
- Automated security audits via the `@ethical-hacker` persona.
- Privacy-preserving data engineering mandates for the `@data-engineer`.

---

## ⚖️ License
MIT License. See [LICENSE](LICENSE) for details.
