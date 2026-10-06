import React, { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 5) + 2;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);

        setTimeout(() => {
          setLeaving(true);

          setTimeout(() => {
            onComplete();
          }, 650);
        }, 350);
      } else {
        setProgress(current);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`juice-preloader ${leaving ? "juice-preloader-leave" : ""}`}>
      {/* Background glow */}
      <div className="preloader-glow preloader-glow-one" />
      <div className="preloader-glow preloader-glow-two" />
      <div className="preloader-glow preloader-glow-three" />

      {/* Floating fruit */}
      <div className="floating-fruit fruit-one">🍊</div>
      <div className="floating-fruit fruit-two">🍋</div>
      <div className="floating-fruit fruit-three">🍊</div>
      <div className="floating-fruit fruit-four">🍋</div>

      {/* Small juice drops */}
      <div className="juice-drop drop-one" />
      <div className="juice-drop drop-two" />
      <div className="juice-drop drop-three" />
      <div className="juice-drop drop-four" />

      <div className="preloader-content">
        {/* Logo */}
        <div className="preloader-logo">
          <div className="preloader-logo-icon">
            <span>🥤</span>
          </div>

          <div className="preloader-brand">
            <span className="brand-dark">Juice</span>
            <span className="brand-orange"> Mall</span>
          </div>
        </div>

        {/* Glass */}
        <div className="juice-glass-wrapper">
          {/* Glow behind glass */}
          <div className="glass-glow" />

          {/* Straw */}
          <div className="glass-straw">
            <span />
          </div>

          {/* Glass */}
          <div className="juice-glass">
            {/* Juice */}
            <div
              className="juice-liquid"
              style={{
                height: `${Math.max(progress, 8)}%`,
              }}
            >
              <div className="juice-surface" />

              {/* Bubbles */}
              <span className="juice-bubble bubble-one" />
              <span className="juice-bubble bubble-two" />
              <span className="juice-bubble bubble-three" />
              <span className="juice-bubble bubble-four" />
              <span className="juice-bubble bubble-five" />
            </div>

            {/* Glass shine */}
            <div className="glass-shine" />
            <div className="glass-shine-small" />
          </div>

          {/* Orange slice */}
          <div className="orange-slice">
            <div className="orange-inner">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* Splash drops */}
          <span className="splash splash-one" />
          <span className="splash splash-two" />
          <span className="splash splash-three" />
          <span className="splash splash-four" />
          <span className="splash splash-five" />
        </div>

        {/* Text */}
        <div className="preloader-text">
          <div className="preloader-title">
            Freshness is loading
            <span className="loading-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </div>

          <p>
            Fresh ingredients. Delicious moments.
          </p>
        </div>

        {/* Progress */}
        <div className="preloader-progress-area">
          <div className="preloader-progress-top">
            <span>Preparing your freshness</span>
            <strong>{progress}%</strong>
          </div>

          <div className="preloader-progress">
            <div
              className="preloader-progress-bar"
              style={{ width: `${progress}%` }}
            >
              <span className="progress-shine" />
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="preloader-bottom">
          <span className="fresh-dot" />
          100% Fresh
          <span className="bottom-divider">•</span>
          Made Daily
          <span className="bottom-divider">•</span>
          Served Cold
        </div>
      </div>
    </div>
  );
};

export default Preloader;