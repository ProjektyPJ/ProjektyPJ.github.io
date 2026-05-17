
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    min-height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(120, 180, 255, 0.25) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(100, 160, 240, 0.2) 0%, transparent 50%),
      radial-gradient(ellipse at 60% 80%, rgba(80, 140, 220, 0.15) 0%, transparent 55%),
      linear-gradient(160deg, #1a3a6b 0%, #0d2244 40%, #071830 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    gap: 60px;
  }

  /* ── AERO NAV ── */
  nav.aero {
    width: 820px;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    position: relative;

    /* Aero glass body */
    background:
      linear-gradient(180deg,
        rgba(255,255,255,0.42) 0%,
        rgba(200,225,255,0.22) 48%,
        rgba(140,190,255,0.10) 49%,
        rgba(100,160,240,0.18) 100%
      );
    border-radius: 8px;
    border-top: 1px solid rgba(255,255,255,0.75);
    border-left: 1px solid rgba(255,255,255,0.55);
    border-right: 1px solid rgba(255,255,255,0.30);
    border-bottom: 1px solid rgba(80,130,200,0.35);
    box-shadow:
      0 2px 4px rgba(0,0,0,0.35),
      0 8px 20px rgba(0,0,0,0.25),
      inset 0 1px 0 rgba(255,255,255,0.80),
      inset 0 -1px 0 rgba(100,160,255,0.20);
    backdrop-filter: blur(12px) saturate(1.4);
    -webkit-backdrop-filter: blur(12px) saturate(1.4);
  }

  /* Top gloss sheen */
  nav.aero::before {
    content: '';
    position: absolute;
    inset: 1px 2px auto 2px;
    height: 22px;
    border-radius: 6px 6px 50% 50%;
    background: linear-gradient(180deg,
      rgba(255,255,255,0.65) 0%,
      rgba(255,255,255,0.10) 100%
    );
    pointer-events: none;
  }

  /* Logo */
  .aero-logo {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 12px 0 8px;
    margin-right: 6px;
    border-right: 1px solid rgba(255,255,255,0.22);
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-shadow: 0 1px 3px rgba(0,50,120,0.7), 0 0 8px rgba(100,180,255,0.4);
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .aero-logo svg {
    width: 20px; height: 20px;
    filter: drop-shadow(0 0 4px rgba(120,200,255,0.8));
  }

  /* Nav items */
  .aero-items {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    list-style: none;
  }

  .aero-items li a {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 14px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 400;
    color: rgba(255,255,255,0.90);
    text-decoration: none;
    text-shadow: 0 1px 3px rgba(0,30,80,0.8);
    letter-spacing: 0.01em;
    position: relative;
    transition: all 0.15s ease;
    white-space: nowrap;
  }

  .aero-items li a:hover {
    background:
      linear-gradient(180deg,
        rgba(255,255,255,0.35) 0%,
        rgba(180,215,255,0.15) 50%,
        rgba(100,170,255,0.08) 51%,
        rgba(120,180,255,0.20) 100%
      );
    border: 1px solid rgba(255,255,255,0.45);
    border-bottom-color: rgba(100,160,255,0.35);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.60),
      0 1px 3px rgba(0,0,0,0.20);
    color: #fff;
    margin: 0 -1px;
    padding: 4px 15px;
    text-shadow: 0 0 8px rgba(150,210,255,0.6), 0 1px 2px rgba(0,20,60,0.8);
  }

  .aero-items li a.active {
    background:
      linear-gradient(180deg,
        rgba(255,255,255,0.28) 0%,
        rgba(160,205,255,0.12) 50%,
        rgba(80,150,240,0.06) 51%,
        rgba(100,165,255,0.18) 100%
      );
    border: 1px solid rgba(255,255,255,0.38);
    border-bottom-color: rgba(80,140,230,0.40);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.50),
      inset 0 2px 6px rgba(0,60,150,0.12),
      0 1px 3px rgba(0,0,0,0.18);
    color: #fff;
    margin: 0 -1px;
    padding: 4px 15px;
    text-shadow: 0 0 10px rgba(160,220,255,0.7), 0 1px 2px rgba(0,20,70,0.9);
  }

  .aero-items li a svg {
    width: 14px; height: 14px;
    opacity: 0.85;
    flex-shrink: 0;
  }

  /* Spacer */
  .aero-spacer { flex: 1; }

  /* Search box */
  .aero-search {
    position: relative;
    flex-shrink: 0;
  }

  .aero-search input {
    width: 150px;
    height: 28px;
    padding: 0 28px 0 10px;
    font-family: 'Segoe UI', Tahoma, sans-serif;
    font-size: 12px;
    color: rgba(255,255,255,0.90);
    background:
      linear-gradient(180deg,
        rgba(20,60,140,0.45) 0%,
        rgba(30,80,180,0.25) 100%
      );
    border: 1px solid rgba(255,255,255,0.30);
    border-top-color: rgba(80,130,220,0.50);
    border-radius: 4px;
    box-shadow:
      inset 0 1px 4px rgba(0,0,0,0.30),
      inset 0 0 0 1px rgba(0,0,0,0.10);
    outline: none;
    transition: all 0.15s;
    backdrop-filter: blur(4px);
  }

  .aero-search input::placeholder { color: rgba(200,220,255,0.50); }

  .aero-search input:focus {
    border-color: rgba(120,190,255,0.60);
    box-shadow:
      inset 0 1px 4px rgba(0,0,0,0.25),
      0 0 0 2px rgba(100,170,255,0.25),
      0 0 8px rgba(80,160,255,0.20);
  }

  .aero-search svg {
    position: absolute;
    right: 8px;
    top: 50%; transform: translateY(-50%);
    width: 14px; height: 14px;
    color: rgba(180,210,255,0.60);
    pointer-events: none;
  }

  /* ── DEMO CONTENT ── */
  .demo-label {
    color: rgba(180,210,255,0.55);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: center;
  }

  /* Second example: slim dark variant */
  nav.aero-dark {
    width: 820px;
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    position: relative;

    background:
      linear-gradient(180deg,
        rgba(255,255,255,0.12) 0%,
        rgba(200,220,255,0.06) 49%,
        rgba(20,60,140,0.40) 50%,
        rgba(10,40,110,0.55) 100%
      );
    border-radius: 7px;
    border-top: 1px solid rgba(255,255,255,0.30);
    border-left: 1px solid rgba(255,255,255,0.20);
    border-right: 1px solid rgba(255,255,255,0.12);
    border-bottom: 1px solid rgba(40,80,180,0.60);
    box-shadow:
      0 2px 6px rgba(0,0,0,0.50),
      0 12px 28px rgba(0,0,0,0.35),
      inset 0 1px 0 rgba(255,255,255,0.35),
      inset 0 -1px 0 rgba(40,100,220,0.30);
    backdrop-filter: blur(16px) saturate(1.6);
    -webkit-backdrop-filter: blur(16px) saturate(1.6);
    gap: 4px;
  }

  nav.aero-dark::before {
    content: '';
    position: absolute;
    inset: 1px 3px auto 3px;
    height: 18px;
    border-radius: 5px 5px 50% 50%;
    background: linear-gradient(180deg,
      rgba(255,255,255,0.28) 0%,
      rgba(255,255,255,0.04) 100%
    );
    pointer-events: none;
  }

  .aero-dark .tab {
    height: 32px;
    padding: 0 18px;
    display: flex;
    align-items: center;
    gap: 6px;
    border-radius: 5px;
    font-size: 12.5px;
    font-weight: 400;
    color: rgba(200,220,255,0.75);
    text-shadow: 0 1px 2px rgba(0,0,0,0.60);
    cursor: pointer;
    transition: all 0.12s ease;
    white-space: nowrap;
    user-select: none;
    letter-spacing: 0.01em;
  }

  .aero-dark .tab:hover {
    background: rgba(255,255,255,0.10);
    color: rgba(255,255,255,0.95);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.25);
  }

  .aero-dark .tab.active {
    background:
      linear-gradient(180deg,
        rgba(255,255,255,0.22) 0%,
        rgba(160,200,255,0.08) 50%,
        rgba(60,120,230,0.12) 51%,
        rgba(80,140,255,0.18) 100%
      );
    border: 1px solid rgba(255,255,255,0.30);
    border-bottom-color: rgba(80,130,255,0.45);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.45),
      0 1px 4px rgba(0,0,0,0.25);
    color: #fff;
    text-shadow: 0 0 12px rgba(160,210,255,0.7), 0 1px 2px rgba(0,0,0,0.70);
  }

  .aero-dark .tab svg {
    width: 13px; height: 13px; opacity: 0.80;
  }

  /* ornament line */
  .aero-dark .sep {
    width: 1px;
    height: 20px;
    background: linear-gradient(180deg, transparent, rgba(255,255,255,0.20), transparent);
    margin: 0 2px;
    flex-shrink: 0;
  }

  /* window chrome ornament at right */
  .aero-dark .win-buttons {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .win-btn {
    width: 20px; height: 20px;
    border-radius: 3px;
    border: 1px solid rgba(255,255,255,0.25);
    background: linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.06) 100%);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    font-size: 9px;
    color: rgba(255,255,255,0.70);
    transition: background 0.1s;
  }
  .win-btn:hover { background: linear-gradient(180deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.12) 100%); color: #fff; }
  .win-btn.close { border-color: rgba(220,100,80,0.50); background: linear-gradient(180deg, rgba(220,80,60,0.45) 0%, rgba(180,40,20,0.35) 100%); }
  .win-btn.close:hover { background: linear-gradient(180deg, rgba(240,100,80,0.70) 0%, rgba(200,50,30,0.55) 100%); }