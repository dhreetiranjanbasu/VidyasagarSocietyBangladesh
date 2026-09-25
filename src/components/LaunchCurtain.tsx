"use client";

import { useEffect, useState } from "react";

export default function LaunchCurtain() {
  const [opening, setOpening] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (hidden) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [hidden]);

  const openCurtain = () => {
    if (opening || hidden) return;
    setOpening(true);
    window.setTimeout(() => setHidden(true), 1900);
  };

  if (hidden) return null;

  return (
    <button
      type="button"
      className={`launch-curtain ${opening ? "is-opening" : ""}`}
      onClick={openCurtain}
      aria-label="Open the curtain and enter the BidyaShagor Society website"
    >
      <span className="curtain-panel curtain-panel-left" aria-hidden="true">
        <span className="curtain-valance" />
        <span className="curtain-inner-edge" />
        <span className="curtain-rope" />
      </span>

      <span className="curtain-panel curtain-panel-right" aria-hidden="true">
        <span className="curtain-valance" />
        <span className="curtain-inner-edge" />
        <span className="curtain-rope" />
      </span>

      <span className="launch-curtain-content">
        <span className="launch-ornament" aria-hidden="true">✦</span>
        <span className="launch-kicker">Official Website Opening</span>
        <span className="launch-title">Welcome to<br />BidyaShagor Society Website</span>
        <span className="launch-divider" aria-hidden="true"><i /><b>◆</b><i /></span>
        <span className="launch-instruction">Click or tap anywhere to enter</span>
      </span>

      <span className="launch-developer" aria-hidden="true">
        <span className="launch-developer-logo-wrap">
          <img
            className="launch-developer-logo"
            src="/assets/modern-dev-technologies-logo.png"
            alt=""
          />
        </span>
        <span className="launch-developer-copy">
          Developed By Modern Dev Technologies, Contact: 01316950214
        </span>
      </span>
    </button>
  );
}
