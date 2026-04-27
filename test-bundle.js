"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app/dashboard/page.tsx
var page_exports = {};
__export(page_exports, {
  default: () => DashboardPage
});
module.exports = __toCommonJS(page_exports);

// src/components/dashboard/AgentCard.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var PulseDot = ({ state }) => {
  const colors = {
    idle: "bg-circuit-green",
    thinking: "bg-agentic-violet",
    executing: "bg-logic-blue"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `relative flex h-3 w-3`, children: [
    state !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `animate-ping absolute inline-flex h-full w-full rounded-full ${colors[state]} opacity-75` }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `relative inline-flex rounded-full h-3 w-3 ${colors[state]}` })
  ] });
};
var ProgressBar = ({ progress }) => {
  const segments = 10;
  const activeSegments = Math.floor(progress / 100 * segments);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex gap-1 h-1.5 w-full", children: Array.from({ length: segments }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: `h-full flex-1 transition-colors duration-300 ${i < activeSegments ? "bg-logic-blue" : "bg-[#3A3F45]"}`
    },
    i
  )) });
};
var AgentCard = ({ id, name, status, progress, cpu, tokens }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "agent-card group hover:border-logic-blue cursor-pointer", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-between items-start mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[10px] text-steel-grey font-mono mb-1", children: id }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-lg font-bold tracking-tight text-ghost-white", children: name })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulseDot, { state: status })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-between text-[11px] font-mono text-steel-grey mb-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TASK PROGRESS" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
            progress,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, { progress })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-steel-grey/20", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[10px] text-steel-grey font-mono uppercase", children: "CPU Usage" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs font-mono text-ghost-white", children: cpu })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[10px] text-steel-grey font-mono uppercase", children: "Tokens/Sec" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs font-mono text-ghost-white", children: tokens })
        ] })
      ] })
    ] })
  ] });
};
var AgentCard_default = AgentCard;

// src/components/dashboard/HoofbeatsLog.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var HoofbeatsLog = () => {
  const logs = [
    { id: "1", timestamp: "14:20:01", level: "INFO", message: "Initializing Corral Protocol..." },
    { id: "2", timestamp: "14:20:05", level: "ACTION", message: "Burro-Alpha spawning in workspace." }
  ];
  const getLevelColor = (level) => {
    switch (level) {
      case "INFO":
        return "text-steel-grey";
      case "ACTION":
        return "text-logic-blue";
      case "SUCCESS":
        return "text-circuit-green";
      case "HITL":
        return "text-caution-amber animate-pulse";
      default:
        return "text-ghost-white";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col h-full bg-industrial-black border-l border-steel-grey/30", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "p-4 border-b border-steel-grey/30 bg-[#25282c]", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { className: "text-sm font-bold tracking-widest uppercase text-ghost-white", children: "Hoofbeats Feed" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex-1 overflow-y-auto p-4 space-y-2 font-mono text-[12px]", children: [
      logs.map((log) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex gap-3 leading-relaxed", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "text-[#3A3F45] shrink-0", children: [
          "[",
          log.timestamp,
          "]"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: `${getLevelColor(log.level)} font-bold shrink-0 w-16`, children: log.level }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-ghost-white", children: log.message })
      ] }, log.id)),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "inline-block w-2 h-4 bg-logic-blue animate-pulse align-middle ml-1" }) })
    ] })
  ] });
};
var HoofbeatsLog_default = HoofbeatsLog;

// src/components/dashboard/Blackboard.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Blackboard = () => {
  const data = [
    { key: "task/id", value: "42-X-9", modifiedBy: "SYSTEM" },
    { key: "task/metadata/status", value: "in_progress", modifiedBy: "Burro-Alpha" },
    { key: "agent/discovery/count", value: 12, modifiedBy: "Burro-Beta" }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-industrial-black border border-steel-grey/30 rounded-[var(--radius-brand)] overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "px-4 py-3 bg-[#25282c] border-b border-[#3A3F45] flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "text-xs font-bold tracking-widest uppercase text-ghost-white", children: "Shared Blackboard (KV Store)" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-[10px] font-mono text-logic-blue", children: "LIVE_SYNC: ACTIVE" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("table", { className: "w-full text-left border-collapse font-mono text-[13px]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { className: "border-b border-[#3A3F45] text-steel-grey", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-4 py-2 font-medium", children: "KEY" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-4 py-2 font-medium", children: "VALUE" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-4 py-2 font-medium text-right", children: "MODIFIED BY" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tbody", { children: data.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "tr",
        {
          className: `border-b border-[#25282c] hover:bg-[#25282c] transition-colors duration-500 ${entry.isFlashing ? "bg-logic-blue/20" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "px-4 py-3 text-logic-blue", children: entry.key }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "px-4 py-3 text-ghost-white", children: typeof entry.value === "string" ? `"${entry.value}"` : String(entry.value) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "px-4 py-3 text-steel-grey text-right", children: entry.modifiedBy })
          ]
        },
        entry.key
      )) })
    ] })
  ] });
};
var Blackboard_default = Blackboard;

// src/app/dashboard/page.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function DashboardPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "grid grid-cols-[260px_1fr_320px] h-screen bg-industrial-black text-ghost-white overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "border-r border-steel-grey/20 flex flex-col bg-[#25282c]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "p-6 border-b border-steel-grey/20", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: "text-xl font-bold tracking-tighter mb-1 text-ghost-white", children: "CORRAL_01" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-[10px] font-mono text-steel-grey", children: "ORCHESTRATION LAYER V1.0" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex-1 p-6 space-y-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-xs font-bold text-steel-grey mb-4 tracking-widest uppercase", children: "Playbook Stages" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-4", children: [
            { name: "Environment Discovery", status: "completed" },
            { name: "Constraint Extraction", status: "active" },
            { name: "Agent Specialization", status: "pending" },
            { name: "Parallel Execution", status: "pending" }
          ].map((stage, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `w-2 h-2 rounded-full ${stage.status === "completed" ? "bg-circuit-green" : stage.status === "active" ? "bg-logic-blue animate-pulse" : "bg-steel-grey/30"}` }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `text-sm ${stage.status === "pending" ? "text-steel-grey" : "text-ghost-white"}`, children: stage.name })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "pt-8 border-t border-steel-grey/20", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-industrial-black p-4 rounded-[var(--radius-brand)] border border-steel-grey/20", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-[10px] font-mono text-logic-blue mb-2 uppercase", children: "System Message" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-xs leading-relaxed text-steel-grey", children: "All burros initialized. Monitoring for HITL interrupts on port 4432." })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex flex-col overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("main", { className: "p-8 space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-end mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-2xl font-bold tracking-tight text-ghost-white uppercase", children: "Active Burros" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xs font-mono text-steel-grey", children: "3 AGENTS CONNECTED" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            AgentCard_default,
            {
              id: "B-001",
              name: "Burro-Alpha",
              status: "thinking",
              progress: 65,
              cpu: "12.4%",
              tokens: "42/s"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            AgentCard_default,
            {
              id: "B-002",
              name: "Burro-Beta",
              status: "executing",
              progress: 30,
              cpu: "45.1%",
              tokens: "88/s"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            AgentCard_default,
            {
              id: "B-003",
              name: "Burro-Gamma",
              status: "idle",
              progress: 100,
              cpu: "0.8%",
              tokens: "0/s"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Blackboard_default, {}) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "h-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HoofbeatsLog_default, {}) })
  ] });
}
