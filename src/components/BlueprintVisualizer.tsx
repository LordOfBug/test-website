'use client';

import { motion } from 'framer-motion';

export const BlueprintVisualizer = () => {
  return (
    <div className="relative w-full h-[400px] bg-electric-blue/5 border border-white/10 rounded-[4px] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
        {/* Animated Drawing Path */}
        <motion.path
          d="M 100 200 Q 250 100 400 200 T 700 200"
          stroke="#2E79FF"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Agent Nodes */}
        {[
          { x: 100, y: 200, label: 'INGRESS' },
          { x: 400, y: 200, label: 'CORRAL_ALPHA' },
          { x: 700, y: 200, label: 'OUTPUT' }
        ].map((node, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.8 }}
          >
            <rect x={node.x - 40} y={node.y - 15} width="80" height="30" rx="2" className="fill-obsidian stroke-white/20" />
            <text x={node.x} y={node.y + 4} className="fill-white font-mono text-[8px] uppercase tracking-widest" textAnchor="middle">
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Data Packet */}
        <motion.circle
          r="4"
          className="fill-cyan-spark"
          animate={{
            x: [100, 400, 700],
            y: [200, 200, 200],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="absolute top-4 left-4 font-mono text-[10px] text-electric-blue/50 uppercase tracking-widest">
        Runtime: ACTIVE // Mode: ORCHESTRATION
      </div>
    </div>
  );
};
