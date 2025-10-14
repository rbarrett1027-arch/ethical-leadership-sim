import React, { useState } from "react";

export default function EthicalLeadershipSim() {
  const [scene, setScene] = useState("scene1");
  const [metrics, setMetrics] = useState({
    trust: 50,
    profit: 50,
    satisfaction: 50,
    fairness: 50,
  });
  const [path, setPath] = useState([]);

  const SCENES = {
    scene1: {
      title: "The Budget Cut",
      text: "You must decide how to reduce costs while maintaining morale.",
      options: [
        { label: "Cut bonuses but protect jobs.", effects: { trust: +2, satisfaction: +1, profit: -3, fairness: +2 }, next: "scene2" },
        { label: "Lay off a few employees to preserve rewards.", effects: { trust: -3, satisfaction: -2, profit: +3, fairness: -1 }, next: "scene2" },
        { label: "Invite staff input before making cuts.", effects: { trust: +4, satisfaction: +3, profit: -2, fairness: +3 }, next: "scene2" },
      ],
    },
    scene2: {
      title: "Confidential Report",
      text: "A colleague shares information revealing your supervisor’s mistake.",
      options: [
        { label: "Privately discuss it with your supervisor.", effects: { trust: +3, fairness: +2, satisfaction: +1, profit: 0 }, next: "scene3" },
        { label: "Report the issue directly to HR.", effects: { trust: -1, fairness: +3, satisfaction: 0, profit: -1 }, next: "scene3" },
        { label: "Do nothing and protect yourself.", effects: { trust: -3, fairness: -2, satisfaction: -2, profit: 0 }, next: "scene3" },
      ],
    },
    scene3: {
      title: "Workload Crisis",
      text: "Your team is burned out but deadlines are nonnegotiable.",
      options: [
        { label: "Ask for deadline flexibility and protect your team.", effects: { trust: +3, satisfaction: +3, profit: -2, fairness: +2 }, next: "scene4" },
        { label: "Push the team harder to meet goals.", effects: { trust: -2, satisfaction: -3, profit: +3, fairness: -1 }, next: "scene4" },
        { label: "Delegate more to share the load evenly.", effects: { trust: +1, satisfaction: +1, profit: +1, fairness: +1 }, next: "scene4" },
      ],
    },
    scene4: {
      title: "The Favor",
      text: "A close friend on the team asks for leniency on a missed deadline.",
      options: [
        { label: "Hold them accountable like anyone else.", effects: { fairness: +3, trust: +1, satisfaction: 0, profit: 0 }, next: "scene5" },
        { label: "Give them a quiet pass this once.", effects: { fairness: -3, trust: -2, satisfaction: +1, profit: 0 }, next: "scene5" },
        { label: "Create a transparent grace policy for everyone.", effects: { fairness: +2, trust: +3, satisfaction: +2, profit: -1 }, next: "scene5" },
      ],
    },
    scene5: {
      title: "The Tempting Contract",
      text: "A new vendor offers a lucrative deal but has a questionable record.",
      options: [
        { label: "Reject the deal until verified as ethical.", effects: { trust: +3, fairness: +3, satisfaction: +2, profit: -2 }, next: "scene6" },
        { label: "Accept quietly and monitor performance.", effects: { trust: -2, fairness: -2, satisfaction: 0, profit: +3 }, next: "scene6" },
        { label: "Delay and request an independent audit.", effects: { trust: +1, fairness: +2, satisfaction: +1, profit: 0 }, next: "scene6" },
      ],
    },
    scene6: {
      title: "Transparency Test",
      text: "Your team discovers a small accounting discrepancy that benefits the company.",
      options: [
        { label: "Disclose it immediately.", effects: { trust: +3, fairness: +2, satisfaction: +2, profit: -1 }, next: "scene7" },
        { label: "Fix it quietly without disclosure.", effects: { trust: -2, fairness: -3, satisfaction: -1, profit: +1 }, next: "scene7" },
        { label: "Ignore it; it’s minor.", effects: { trust: -3, fairness: -3, satisfaction: -2, profit: +2 }, next: "scene7" },
      ],
    },
    scene7: {
      title: "Innovation vs Stability",
      text: "An experimental product could double profits but carries ethical risks.",
      options: [
        { label: "Proceed with strong ethical oversight.", effects: { trust: +2, fairness: +1, satisfaction: +1, profit: +2 }, next: "scene8" },
        { label: "Launch aggressively to beat competitors.", effects: { trust: -2, fairness: -2, satisfaction: -1, profit: +4 }, next: "scene8" },
        { label: "Delay until risks are resolved.", effects: { trust: +1, fairness: +3, satisfaction: +1, profit: -2 }, next: "scene8" },
      ],
    },
    scene8: {
      title: "Remote Work Request",
      text: "Employees want more flexibility to work from home.",
      options: [
        { label: "Grant flexible hybrid schedules.", effects: { trust: +3, satisfaction: +4, fairness: +2, profit: -1 }, next: "scene9" },
        { label: "Allow case-by-case exceptions.", effects: { trust: +1, satisfaction: +1, fairness: 0, profit: +1 }, next: "scene9" },
        { label: "Deny; presence drives accountability.", effects: { trust: -2, satisfaction: -3, fairness: -1, profit: +2 }, next: "scene9" },
      ],
    },
    scene9: {
      title: "Executive Pressure",
      text: "A senior executive demands data manipulation to meet targets.",
      options: [
        { label: "Refuse and report the request.", effects: { trust: +4, fairness: +3, satisfaction: +1, profit: -2 }, next: "scene10" },
        { label: "Comply under quiet protest.", effects: { trust: -3, fairness: -3, satisfaction: -2, profit: +2 }, next: "scene10" },
        { label: "Seek clarification and delay action.", effects: { trust: +1, fairness: +1, satisfaction: 0, profit: 0 }, next: "scene10" },
      ],
    },
    scene10: {
      title: "Pay Transparency",
      text: "Employees learn of pay gaps among similar roles.",
      options: [
        { label: "Publish ranges and commit to equity review.", effects: { fairness: +3, trust: +2, satisfaction: +2, profit: -2 }, next: "scene11" },
        { label: "Address internally but stay private.", effects: { fairness: +1, trust: 0, satisfaction: 0, profit: 0 }, next: "scene11" },
        { label: "Downplay differences as performance-based.", effects: { fairness: -3, trust: -2, satisfaction: -2, profit: +1 }, next: "scene11" },
      ],
    },
    scene11: {
      title: "Diversity Dilemma",
      text: "A promotion shortlist lacks diversity. HR asks whether to reopen applications.",
      options: [
        { label: "Reopen to ensure fair representation.", effects: { fairness: +4, trust: +2, satisfaction: +2, profit: -1 }, next: "scene12" },
        { label: "Proceed but strengthen future pipelines.", effects: { fairness: +1, trust: +1, satisfaction: 0, profit: +1 }, next: "scene12" },
        { label: "Ignore the concern; choose the top performer.", effects: { fairness: -3, trust: -2, satisfaction: -1, profit: +2 }, next: "scene12" },
      ],
    },
    scene12: {
      title: "Ethical Supplier",
      text: "A supplier is accused of poor labor practices overseas.",
      options: [
        { label: "Suspend the contract pending audit.", effects: { fairness: +3, trust: +2, satisfaction: +1, profit: -3 }, next: "scene13" },
        { label: "Continue while demanding compliance proof.", effects: { fairness: +1, trust: +1, satisfaction: 0, profit: 0 }, next: "scene13" },
        { label: "Ignore; costs are too competitive to lose.", effects: { fairness: -3, trust: -3, satisfaction: -1, profit: +3 }, next: "scene13" },
      ],
    },
    scene13: {
      title: "Performance Plateau",
      text: "Results have flattened. The board wants new incentives.",
      options: [
        { label: "Link bonuses to ethical and team outcomes.", effects: { fairness: +3, trust: +3, satisfaction: +2, profit: 0 }, next: "scene14" },
        { label: "Base rewards only on profit metrics.", effects: { profit: +3, trust: -2, fairness: -2, satisfaction: -1 }, next: "scene14" },
        { label: "Offer symbolic recognition, no pay change.", effects: { trust: 0, fairness: 0, satisfaction: -1, profit: +1 }, next: "scene14" },
      ],
    },
    scene14: {
      title: "Data Privacy",
      text: "Your analytics team wants to track employee computer usage for productivity.",
      options: [
        { label: "Allow tracking only with consent.", effects: { fairness: +3, trust: +2, satisfaction: +1, profit: 0 }, next: "scene15" },
        { label: "Approve silent monitoring.", effects: { fairness: -3, trust: -3, satisfaction: -2, profit: +3 }, next: "scene15" },
        { label: "Decline; trust outweighs gains.", effects: { fairness: +2, trust: +2, satisfaction: +2, profit: -2 }, next: "scene15" },
      ],
    },
    scene15: {
      title: "Team Conflict",
      text: "Two senior managers clash publicly over priorities.",
      options: [
        { label: "Hold mediation and set joint goals.", effects: { fairness: +3, trust: +2, satisfaction: +3, profit: 0 }, next: "scene16" },
        { label: "Reassign one quietly.", effects: { fairness: 0, trust: 0, satisfaction: -1, profit: +1 }, next: "scene16" },
        { label: "Let them compete; best idea wins.", effects: { fairness: -2, trust: -1, satisfaction: -2, profit: +2 }, next: "scene16" },
      ],
    },
    scene16: {
      title: "Crisis Communication",
      text: "An equipment failure injures a contractor. Media outlets ask for comment.",
      options: [
        { label: "Be transparent and launch review.", effects: { trust: +4, fairness: +2, satisfaction: +2, profit: -2 }, next: "scene17" },
        { label: "Release minimal facts.", effects: { trust: -1, fairness: -1, satisfaction: 0, profit: 0 }, next: "scene17" },
        { label: "Downplay the incident.", effects: { trust: -4, fairness: -3, satisfaction: -2, profit: +2 }, next: "scene17" },
      ],
    },
    scene17: {
      title: "Cultural Audit",
      text: "Consultants report inconsistent ethics practices between departments.",
      options: [
        { label: "Standardize ethics training companywide.", effects: { fairness: +4, trust: +2, satisfaction: +2, profit: -1 }, next: "scene18" },
        { label: "Let each manager decide.", effects: { fairness: 0, trust: -1, satisfaction: 0, profit: +1 }, next: "scene18" },
        { label: "Ignore; variation builds resilience.", effects: { fairness: -3, trust: -2, satisfaction: -1, profit: +1 }, next: "scene18" },
      ],
    },
    scene18: {
      title: "Succession Planning",
      text: "You must select a successor for an upcoming leadership transition.",
      options: [
        { label: "Choose integrity and balance.", effects: { fairness: +3, trust: +3, satisfaction: +2, profit: 0 }, next: "scene19" },
        { label: "Pick top financial performer.", effects: { profit: +3, trust: -2, satisfaction: -1, fairness: -1 }, next: "scene19" },
        { label: "Delay the decision.", effects: { trust: 0, fairness: 0, satisfaction: -1, profit: -1 }, next: "scene19" },
      ],
    },
    scene19: {
      title: "Community Impact",
      text: "A proposal arises to fund local education programs at the expense of short-term profit.",
      options: [
        { label: "Approve full funding.", effects: { trust: +3, fairness: +3, satisfaction: +3, profit: -3 }, next: "scene20" },
        { label: "Split funding between goals.", effects: { trust: +2, fairness: +1, satisfaction: +1, profit: -1 }, next: "scene20" },
        { label: "Decline until earnings recover.", effects: { profit: +3, trust: -2, fairness: -2, satisfaction: -2 }, next: "scene20" },
      ],
    },
    scene20: {
      title: "Board Review",
      text: "The board reviews your tenure. Metrics show trade-offs between ethics and profit.",
      options: [
        { label: "Request full audit and open results.", effects: { fairness: +4, trust: +3, satisfaction: +2, profit: -1 }, next: "end" },
        { label: "Frame achievements as balanced.", effects: { fairness: +1, trust: +1, satisfaction: +1, profit: +1 }, next: "end" },
        { label: "Highlight financial performance only.", effects: { profit: +4, trust: -3, fairness: -3, satisfaction: -2 }, next: "end" },
      ],
    },
  };

  function applyEffects(effects) {
    const updated = { ...metrics };
    Object.entries(effects).forEach(([key, val]) => {
      updated[key] = Math.max(0, Math.min(100, updated[key] + val));
    });
    return updated;
  }

  function choose(option) {
    const newMetrics = applyEffects(option.effects);
    setMetrics(newMetrics);
    setPath([...path, option.label]);
    setScene(option.next);
  }

  if (scene === "end") {
    const maxKey = Object.keys(metrics).reduce((a, b) => (metrics[a] > metrics[b] ? a : b));
    const minKey = Object.keys(metrics).reduce((a, b) => (metrics[a] < metrics[b] ? a : b));
    const summary = `You led with strength in ${maxKey}, though ${minKey} remained a challenge.`;

    return (
      <div style={{ padding: "2rem", maxWidth: 700, margin: "0 auto", fontFamily: "Arial" }}>
        <h1>Final Leadership Review</h1>
        <MetricBars metrics={metrics} />
        <p>{summary}</p>
        <h2>Your Decisions</h2>
        <ol>{path.map((p, i) => <li key={i}>{p}</li>)}</ol>
        <button
          onClick={() => window.location.reload()}
          style={{
            marginTop: "2rem",
            padding: "0.8rem 1.5rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Restart
        </button>
      </div>
    );
  }

  const current = SCENES[scene];

  return (
    <div style={{ padding: "2rem", maxWidth: 700, margin: "0 auto", fontFamily: "Arial" }}>
      <h1>Ethical Leadership Simulation</h1>
      <MetricBars metrics={metrics} />
      <h2>{current.title}</h2>
      <p>{current.text}</p>
      {current.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => choose(opt)}
          style={{
            display: "block",
            margin: "0.5rem 0",
            padding: "0.8rem 1rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%",
            textAlign: "left",
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function MetricBars({ metrics }) {
  const colors = {
    trust: "#007bff",
    profit: "#28a745",
    satisfaction: "#ffc107",
    fairness: "#6f42c1",
  };

  return (
    <div>
      {Object.keys(metrics).map((key) => (
        <div key={key} style={{ marginBottom: "0.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ textTransform: "capitalize" }}>{key}</span>
            <span>{metrics[key]}%</span>
          </div>
          <div
            style={{
              width: "100%",
              height: "12px",
              background: "#ddd",
              borderRadius: "6px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${metrics[key]}%`,
                background: colors[key],
                transition: "width 0.3s ease",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}