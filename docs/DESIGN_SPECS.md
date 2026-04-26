# DESIGN SPECIFICATIONS - Burros.AI

## 1. Visual Identity & Brand Philosophy
**Burros.AI** is the "Workhorse of Agentic Orchestration." The design language is built on the philosophy of **Industrial Precision**: rugged, reliable, and high-performance.

### 1.1 Logo Guidelines
- **Asset**: `uploads/burros.png`
- **Visual Motif**: Geometric, sharp-edged donkey profile.
- **Rules**: Use sharp vertices. Avoid rounded containers for the logo. Contrast must be maintained using "Electric Blue" on "Industrial Black."

### 1.2 Color Palette
The UI utilizes a high-contrast dark theme to reduce eye strain during long orchestration sessions.

| Name | CSS Variable | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Industrial Black** | `--background` | `#1A1A1A` | Page and workspace background |
| **Deep Slate** | `--card` | `#262626` | Burro containers and Sidebar |
| **Electric Blue** | `--primary` | `#2563EB` | Active states, primary CTAs, links |
| **Steel Gray** | `--border` | `#333333` | Component borders and dividers |
| **Pure White** | `--foreground` | `#FAFAFA` | Primary text and headings |
| **Muted Silver** | `--muted` | `#A3A3A3` | Metadata and secondary labels |

### 1.3 Typography
- **Primary (Sans-Serif)**: `Inter, sans-serif`. Used for headers, UI controls, and body text.
- **Secondary (Monospace)**: `JetBrains Mono, monospace`. Used for Blackboard logs, task IDs, and code snippets.

---

## 2. Component Specifications

### 2.1 The Corral Card (`.corral-card`)
The fundamental unit of the orchestration dashboard, representing an active workspace.
- **Border**: `1px solid var(--border)`
- **Hover**: `scale(1.01)`, border color shifts to `var(--primary)`.
- **Inner Padding**: `1.5rem`
- **Layout**: Header (Title + Status), Body (Active Task), Footer (Involved Burros).

### 2.2 Burro Status Badges
Used to indicate the real-time state of an agent.
- **Idle**: Background: `#333`, Text: `#A3A3A3`
- **Working**: Background: `var(--primary)`, Text: `#FFF` (Pulsing animation)
- **Waiting**: Background: `#F59E0B`, Text: `#000` (Human-in-the-loop signal)
- **Error**: Background: `#EF4444`, Text: `#FFF`

---

## 3. Dashboard Layout
The dashboard is a 3-pane command center.

1.  **Orchestration Sidebar (Left)**: 280px. Contains the list of active Corrals and Blueprint templates.
2.  **Corral Workspace (Center)**: Fluid. A grid of Burro cards executing the current Playbook.
3.  **Blackboard Inspector (Right)**: 350px (Collapsible). Real-time JSON stream of the shared state and agent logs.

---

## 4. Technical Implementation (CSS)
Implementation of the core variables to be used in `src/index.css`.

```css
:root {
  --background: #1a1a1a;
  --foreground: #fafafa;
  --card: #262626;
  --primary: #2563eb;
  --border: #333333;
  --muted: #a3a3a3;
  --radius: 0.5rem;
  
  /* Semantic Status Colors */
  --status-idle: #737373;
  --status-working: #2563eb;
  --status-waiting: #f59e0b;
  --status-success: #10b981;
  --status-error: #ef4444;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: 'Inter', sans-serif;
}

.mono {
  font-family: 'JetBrains Mono', monospace;
}
```
