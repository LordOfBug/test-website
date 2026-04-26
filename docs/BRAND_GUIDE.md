# Burros.AI Brand Guide

## Vision
Burros.AI is a high-performance agentic orchestration platform. The brand reflects the characteristics of its namesake—the Burro: reliable, hardworking, persistent, and intelligent. It combines a rugged, industrial reliability with cutting-edge digital precision.

## Visual Identity

### Logo
The Burros.AI logo is a geometric, "low-poly" stylized head of a burro.
- **Aesthetic**: Minimalist, tech-focused, industrial.
- **Symbolism**: The sharp angles represent digital precision, while the profile view suggests forward-thinking and determination.

### Color Palette
The brand uses a high-contrast, professional palette suitable for developer tools and enterprise orchestration.

| Role | Color Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Industrial Black | `#1A1A1A` | Backgrounds, primary text |
| **Secondary** | Precision White | `#FAFAFA` | Surface backgrounds, inverted text |
| **Accent** | Burro Grey | `#333333` | Borders, secondary elements |
| **Action** | Electric Blueprint | `#2563EB` | Primary buttons, active states, links |
| **Success** | Stable Green | `#10B981` | Completed tasks, active status |
| **Warning** | Caution Orange | `#F59E0B` | Human-in-the-loop (HITL) required |
| **Danger** | Error Red | `#EF4444` | Failed tasks, critical errors |

### Typography
- **Headings**: Modern Sans-Serif (e.g., Inter, Montserrat). Bold weights (700+) to match the geometric logo.
- **Body**: Clean Sans-Serif (Inter, Roboto). Regular weight (400) for readability.
- **Monospace**: JetBrains Mono or Fira Code for code blocks and agent logs.

---

## Technical Design Specifications

### UI Components (CorralView)
The UI is designed to visualize the "Corral" (the group of agents) and the "Blackboard" (shared memory).

#### 1. The Blackboard (Data Visualization)
- **Style**: Terminal-inspired but with modern layout.
- **Components**:
    - **Key-Value Cards**: For persistent state.
    - **Stream Log**: Real-time output from various Burros.

#### 2. Burro Status Cards
Each agent in the corral is represented by a status card:
- **Idle**: Burro Grey border, low opacity.
- **Working**: Electric Blueprint pulsing border.
- **Waiting (HITL)**: Caution Orange glowing border.
- **Error**: Error Red border.

### CSS Variables (`src/index.css`)
We use CSS variables to maintain consistency across the React application.

```css
:root {
  /* Colors */
  --color-bg-primary: #1A1A1A;
  --color-bg-secondary: #262626;
  --color-surface: #FAFAFA;
  --color-text-primary: #FAFAFA;
  --color-text-secondary: #A3A3A3;
  
  --color-accent: #2563EB;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-danger: #EF4444;

  /* Borders & Shadows */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-industrial: 1px solid #333333;

  /* Typography */
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## Data Models for UI

### ICorralState
```typescript
interface ICorralState {
  id: string;
  status: 'idle' | 'running' | 'paused' | 'failed';
  burros: IBurroStatus[];
  blackboard: Record<string, any>;
  logs: ILogEntry[];
}

interface IBurroStatus {
  id: string;
  name: string;
  role: string;
  state: 'idle' | 'thinking' | 'acting' | 'waiting';
  lastAction: string;
}
```
