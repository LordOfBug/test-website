# Execution Plan: Burros.AI Initialization

This plan outlines the immediate steps to move from the current skeleton to a functional agentic orchestration engine.

## Immediate Objectives
1. **Standardize Communication**: Ensure the Blackboard is the single source of truth for Burro coordination.
2. **Implement LLM Logic**: Move from mock execution to real LLM-backed reasoning in `BaseBurro`.
3. **Draft First Playbook**: Create a simple "Hello World" playbook (e.g., "Research and Summarize").

## Step-by-Step Task List

### 1. Types & Interfaces
- Update `src/engine/types/index.ts` to include `ILlmClient` and `IPlaybook`.
- Refine `ITask` to include priority and dependencies.

### 2. Core Engine
- Implement a `DefaultLlmClient` using the `LLM_PROVIDER` environment variable.
- Update `Corral.ts` to support event filtering for Burros.

### 3. Agent Development
- Implement `ResearcherBurro` with a mock search tool.
- Implement `SummarizerBurro` that takes Blackboard artifacts and produces a report.

### 4. Integration Test
- Create `src/demo_playbook.ts` to run a 2-agent collaboration.

## Status Tracking
- **Phase**: Initialization
- **Next Successor**: Coordinator (to assign implementation tasks based on `docs/TODO.md`)
