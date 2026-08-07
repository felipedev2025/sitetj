// Abstract circuit-board backdrop for dark/navy sections — inspired by the
// real circuit-board artwork on the company's own business card, redrawn as
// a clean vector pattern (not a stretched photo) so it stays crisp at any
// hero size. Nodes pulse subtly; respects prefers-reduced-motion globally.
//
// All traces/nodes are kept inside a horizontal safe band (y: 300–600 of a
// 900-tall viewBox). `preserveAspectRatio="slice"` crops top/bottom on wide
// viewports — content outside that band would get clipped mid-line, which
// reads as a broken/"cut" line. Keeping everything centered avoids that at
// any aspect ratio.

import type { CSSProperties } from "react";

const traces = [
  "M0,380 H200 V440 H420",
  "M0,520 H140 V460 H360 V560 H600",
  "M1600,400 H1420 V460 H1200",
  "M1600,540 H1440 V480 H1220 V420 H980",
  "M420,300 V440",
  "M980,600 V460",
  "M600,560 H760 V600",
  "M1200,460 H1060 V400",
];

const nodes: [number, number][] = [
  [200, 380], [420, 440], [420, 300],
  [140, 520], [360, 460], [600, 560], [760, 600],
  [1420, 400], [1200, 460],
  [1440, 540], [1220, 480], [980, 420], [980, 600],
  [1060, 400],
];

export function TechCircuitBackground() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <g fill="none" stroke="#3ea3dd" strokeWidth="1.5" opacity="0.25">
        {traces.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="#5fb8ec">
        {nodes.map(([x, y], i) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={i % 4 === 0 ? 4.5 : 3}
            opacity={i % 4 === 0 ? 0.85 : 0.4}
            className={i % 4 === 0 ? "tech-node-pulse" : undefined}
            style={i % 4 === 0 ? ({ "--pulse-i": i } as CSSProperties) : undefined}
          />
        ))}
      </g>
    </svg>
  );
}
