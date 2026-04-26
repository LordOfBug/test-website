# TODO: Burros.AI Execution Roadmap

## Phase 1: Core Engine Stabilization (Current)
- [ ] **Define ITool Interface**: Standardize how tools report inputs/outputs and schemas.
- [ ] **Implement LLM Client**: Create a unified interface for LLM calls (Gemini/OpenAI).
- [ ] **Enhance Blackboard**: Add support for structured artifacts and versioned state snapshots.
- [ ] **BaseBurro Refinement**: Add robust error handling and retry logic for LLM calls.

## Phase 2: Specialist Burros & Tooling
- [ ] **ArchitectBurro Implementation**: Capable of generating system designs and project structures.
- [ ] **ResearcherBurro Implementation**: Tool-heavy agent for web searching and documentation analysis.
- [ ] **BashTool Security**: Implement a sandbox or restricted environment for `BashTool`.
- [ ] **FileTool Expansion**: Support globbing and multi-file operations.

## Phase 3: Playbooks & Workflow Orchestration
- [ ] **Task Blueprints**: Define a JSON/YAML schema for "Playbooks".
- [ ] **Wrangler Playbook Runner**: Implement the logic to step through a Playbook.
- [ ] **Dynamic Re-planning**: Allow Burros to suggest modifications to the active Playbook.

## Phase 4: UI & Observability
- [ ] **Corral Dashboard**: Visual representation of the Blackboard and participant status.
- [ ] **Execution Trace**: A timeline view of events and tool calls within a Corral.
- [ ] **Interactive Debugger**: Pause execution and manually inject Blackboard events.

## Phase 5: Persistence & Deployment
- [ ] **D1 Blackboard Storage**: Implement `IBlackboardStorage` using Cloudflare D1.
- [ ] **R2 Artifact Vault**: Integration for storing larger files and build artifacts.
- [ ] **Edge Deployment**: Optimize the engine for running in Cloudflare Workers/Pages.
