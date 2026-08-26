import React from "react";

const CURVES = {
  1: "M0,60 C240,110 480,10 720,40 C960,70 1200,120 1440,70 L1440,120 L0,120 Z",
  2: "M0,30 C180,90 360,90 540,50 C760,0 900,80 1080,90 C1240,98 1340,60 1440,30 L1440,120 L0,120 Z",
  3: "M0,90 C160,30 320,20 480,55 C660,95 800,105 960,70 C1120,35 1280,25 1440,60 L1440,120 L0,120 Z",
  4: "M0,50 C120,50 180,100 300,100 C420,100 480,50 600,50 C720,50 780,100 900,100 C1020,100 1080,50 1200,50 C1320,50 1380,100 1440,100 L1440,120 L0,120 Z",
};

export function WaveDivider({ variant = 1, above = "var(--peach-400)", below = "var(--white)", height = 120, flip = false, style, ...rest }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        height,
        background: above,
        lineHeight: 0,
        transform: flip ? "scaleX(-1)" : undefined,
        ...style,
      }}
      {...rest}
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%" }}>
        <path d={CURVES[variant] || CURVES[1]} fill={below} />
      </svg>
    </div>
  );
}
