---
name: deep-research
description: Multi-agent orchestration for systematic web/document research.
---

# Deep Research Skill - Knowledge Orchestration

A systematic workflow for deep research, decomposing high-level goals into parallel sub-tasks.

## Research Lifecycle

### 1. Reconnaissance
- Analyze the user's objective.
- Propose 3-5 sub-objectives (topics/chapters).
- **Wait for confirmation** before proceeding.

### 2. Parallel Investigation
- Dispatch sub-tasks to `google_web_search` and `web_fetch`.
- Use `grep_search` to extract specific evidence.
- Cache raw findings in `.research/<task>/raw/`.

### 3. Chapter Synthesis
- Draft individual chapters with proper source citations.
- Verify findings for accuracy and consistency.

### 4. Final Delivery
- Compile the `final_report.md` with an executive summary and detailed findings.
- Ensure all sources are linked.

## Tools of Choice

1. **`google_web_search`**: For broad discovery.
2. **`web_fetch`**: For deep analysis of specific URLs.
3. **`grep_search`**: For extracting insights from multiple files.

## Workflow Directives

- **Source Integrity**: Every claim must have a URL or file reference.
- **Decomposition**: Never research "everything" in one turn; split it.
- **Structured Output**: Produce reports, not just chat messages.
