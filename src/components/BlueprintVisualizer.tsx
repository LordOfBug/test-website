'use client';

import { motion } from 'framer-motion';

export const BlueprintVisualizer = () => {
  return (
    <div className="relative w-full h-[400px] bg-[#1E3A8A]/20 border border-glow-blue/30 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
        {/* Animated Drawing Path */}
        <motion.path
          d="M 100 200 Q 250 100 400 200 T 700 200"
          className="blueprint-line"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Agent Nodes */}
        {[
          { x: 100, y: 200, label: 'Task Input' },
          { x: 400, y: 200, label: 'Orchestrator' },
          { x: 700, y: 200, label: 'Deliverable' }
        ].map((node, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.5 }}
          >
            <circle cx={node.x} cy={node.y} r="8" className="fill-glow-blue shadow-lg shadow-glow-blue/50" />
            <text x={node.x} y={node.y + 25} className="fill-sand/60 text-[10px] uppercase tracking-widest text-center" textAnchor="middle">
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Floating Burros (Simulated Agents) */}
        <motion.rect
          width="40"
          height="20"
          rx="4"
          className="fill-burnt-orange/20 stroke-burnt-orange stroke-1"
          animate={{
            x: [100, 400, 700],
            y: [200, 200, 200],
            offset: [0, 0.5, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="absolute top-4 left-4 font-mono text-[10px] text-glow-blue/50 uppercase tracking-widest">
        System.Execution_Mode: Agentic_Flow
      </div>
    </div>
  );
};
