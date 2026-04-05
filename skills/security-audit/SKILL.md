---
name: security-audit-skill
description: Comprehensive security auditing, vulnerability scanning, and system hardening.
---

# Security Audit Skill - Defensive Orchestration

A multi-layered approach to identifying and mitigating security risks across the stack.

## Workflow Phases

### 1. Attack Surface Recon
- Map all entry points (APIs, UI, Webhooks).
- Identify dependencies and their versions.
- Scan for open ports and services.

### 2. Static Analysis (SAST)
- Scan codebase for secrets, API keys, and common vulnerabilities (SQLi, XSS, CSRF).
- Audit configuration files for insecure defaults.

### 3. Dynamic Analysis (DAST)
- Run reproduction scripts for suspected vulnerabilities.
- Audit network traffic and data-in-transit (TLS).

### 4. Mitigation & Hardening
- Propose surgical fixes for identified risks.
- Implement security headers and hardening configurations.
- Verify the fix with a regression test.

## Tools of Choice
- `grep_search`: For locating secrets and insecure patterns.
- `run_shell_command`: For running external scanners (nmap, trivy, etc.).
- `ethical-hacker`: For expert penetration testing.
- `server-auditor`: For infrastructure-level auditing.
