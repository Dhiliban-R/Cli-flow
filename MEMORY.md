# Cli-flow Global Memory

This file serves as the persistent, human-readable memory substrate for the Cli-flow Hive Mind. It stores high-signal patterns, architectural decisions, and cross-session context.

## Core Directives
- **Architecture**: Domain-Driven Design (DDD) with event-sourced state.
- **Topologies**: Default to `hierarchical` for complex tasks; `mesh` for creative exploration.
- **Model Routing**: Gemini 1.5 Pro (Planning/Implementation) | Gemini 1.5 Flash (Research/Validation).
- **Security**: G-Shield mandate — all inputs must be validated via Zod; all paths checked for traversal.

## Learned Patterns (G-SONA Distillations)
| Pattern ID | Name | Description | Success Rate |
|------------|------|-------------|--------------|
| P-001 | Surgical Edit | Use `replace` with minimal context for 150x faster updates. | 98% |
| P-002 | TDD-London | Mock-first integration for high-fidelity behavior matching. | 94% |
| P-003 | Swarm-Research | Coordinator -> Researcher -> Architect pipeline for multi-file tasks. | 96% |

## Architectural Decisions (ADR)
- **ADR-001**: Use `sql.js` (WASM) for the metadata store to ensure cross-platform portability without native dependencies.
- **ADR-002**: Implement HNSW indexing for sub-millisecond pattern retrieval in GeminiDB.
- **ADR-003**: Unified `EventBus` for all inter-package communication to enable time-travel debugging.

## Active Session Context
- **Current Project**: Cli-flow v1.0 Scaffolding
- **Status**: Core packages initialized; specialized agents (Coordinator, Researcher, Coder, Tester, Security) implemented.
- **Next Milestone**: Phase 2 — HNSW Engine & SQLite Metadata persistence.
