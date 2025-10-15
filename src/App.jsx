import React, { useState } from "react";
export default function App() {
  const [scene, setScene] = useState(0); 
  const [scores, setScores] = useState({
    trust: 50,
    profitability: 50,
    satisfaction: 50,
    integrity: 50,
  });
  const [message, setMessage] = useState("");



  const scenes = [
    // 1–5 (you already had)
    {
      title: "The New Role",
      text: "You’ve just been promoted to lead a small but vital team. The CEO expects results, but morale has been low.",
      options: [
        {
          label: "Hold a listening session before setting goals.",
          effects: { trust: 6, satisfaction: 5, profitability: 2, integrity: 5 },
          msg: "Your team feels heard. Trust begins to form.",
        },
        {
          label: "Set aggressive targets immediately.",
          effects: { trust: -3, satisfaction: -5, profitability: 6, integrity: -2 },
          msg: "Results come quickly, but tension rises.",
        },
        {
          label: "Wait for direction from upper management.",
          effects: { trust: -2, satisfaction: 0, profitability: -3, integrity: 0 },
          msg: "Your team seems uncertain about your leadership.",
        },
      ],
    },
    {
      title: "Budget Pressure",
      text: "A 10% cut hits your department. You can trim bonuses, freeze hiring, or cut training.",
      options: [
        {
          label: "Cut bonuses for fairness.",
          effects: { trust: 3, satisfaction: -3, profitability: 5, integrity: 3 },
          msg: "People grumble, but they respect the shared sacrifice.",
        },
        {
          label: "Eliminate training to save money.",
          effects: { trust: -5, satisfaction: -4, profitability: 6, integrity: -3 },
          msg: "Savings appear fast—but growth stalls.",
        },
        {
          label: "Freeze hiring and ask for process efficiency ideas.",
          effects: { trust: 5, satisfaction: 4, profitability: 4, integrity: 5 },
          msg: "Your transparency earns credit; morale steadies.",
        },
      ],
    },
    {
      title: "Ethical Dilemma",
      text: "A supplier offers you a ‘consulting fee’ to prioritize their contract.",
      options: [
        {
          label: "Reject and report the offer.",
          effects: { trust: 6, satisfaction: 2, profitability: -2, integrity: 8 },
          msg: "Integrity wins you quiet respect.",
        },
        {
          label: "Politely decline but stay silent.",
          effects: { trust: 0, satisfaction: 0, profitability: 2, integrity: 0 },
          msg: "You avoid trouble, but rumors persist.",
        },
        {
          label: "Accept—it’ll help your team’s budget.",
          effects: { trust: -8, satisfaction: -4, profitability: 6, integrity: -8 },
          msg: "Short-term gain, long-term doubt.",
        },
      ],
    },
    {
      title: "Transparency Challenge",
      text: "An internal email leak reveals pay disparities across departments.",
      options: [
        {
          label: "Release a full salary transparency report.",
          effects: { trust: 6, satisfaction: 5, profitability: -3, integrity: 5 },
          msg: "Employees appreciate the honesty, even if leaders squirm.",
        },
        {
          label: "Promise internal review, no public data.",
          effects: { trust: 3, satisfaction: 1, profitability: 3, integrity: 1 },
          msg: "A safe middle ground—but skepticism lingers.",
        },
        {
          label: "Ignore it and move on.",
          effects: { trust: -6, satisfaction: -5, profitability: 0, integrity: -4 },
          msg: "Your silence deepens mistrust.",
        },
      ],
    },
    {
      title: "Final Review",
      text: "The board reviews your leadership. Have you balanced ethics and results?",
      options: [
        {
          label: "Invite a third-party audit of your decisions.",
          effects: { trust: 8, satisfaction: 4, profitability: 0, integrity: 8 },
          msg: "Transparency pays off—your credibility soars.",
        },
        {
          label: "Defend your choices privately.",
          effects: { trust: -2, satisfaction: 0, profitability: 3, integrity: -2 },
          msg: "You appear defensive, though results are decent.",
        },
        {
          label: "Highlight financial success above all.",
          effects: { trust: -4, satisfaction: -3, profitability: 7, integrity: -4 },
          msg: "Shareholders smile, but your team frowns.",
        },
      ],
    },

    // 6–20 (new)
    {
      title: "Community Partnership",
      text: "Your company is asked to fund a local education initiative.",
      options: [
        {
          label: "Commit significant funds—it aligns with your values.",
          effects: { trust: 5, satisfaction: 3, profitability: -2, integrity: 4 },
          msg: "Your community notices your commitment to purpose.",
        },
        {
          label: "Offer symbolic support, not funding.",
          effects: { trust: 0, satisfaction: 0, profitability: 2, integrity: -1 },
          msg: "You appear cautious—safe but uninspiring.",
        },
        {
          label: "Decline—it’s not core to your mission.",
          effects: { trust: -4, satisfaction: -3, profitability: 3, integrity: -2 },
          msg: "Locals question your social responsibility.",
        },
      ],
    },
    {
      title: "Remote Work Tensions",
      text: "Some staff want permanent remote options; others crave office energy.",
      options: [
        {
          label: "Survey the team and pilot hybrid schedules.",
          effects: { trust: 5, satisfaction: 4, profitability: 1, integrity: 3 },
          msg: "Balanced and fair—you gain credibility.",
        },
        {
          label: "Mandate full return for discipline.",
          effects: { trust: -3, satisfaction: -4, profitability: 4, integrity: -2 },
          msg: "Productivity improves, but resentment simmers.",
        },
        {
          label: "Let managers decide individually.",
          effects: { trust: 2, satisfaction: 1, profitability: 0, integrity: 0 },
          msg: "Flexibility helps, but consistency suffers.",
        },
      ],
    },
    {
      title: "Supplier Crisis",
      text: "A key supplier is accused of unethical labor practices.",
      options: [
        {
          label: "Suspend partnership pending investigation.",
          effects: { trust: 5, satisfaction: 3, profitability: -3, integrity: 6 },
          msg: "Your ethical stance earns public praise.",
        },
        {
          label: "Continue quietly until facts are verified.",
          effects: { trust: -2, satisfaction: -1, profitability: 3, integrity: -2 },
          msg: "You’re seen as cautious—but perhaps complicit.",
        },
        {
          label: "Defend them publicly—they’re vital to profits.",
          effects: { trust: -6, satisfaction: -4, profitability: 5, integrity: -5 },
          msg: "Investors cheer; employees cringe.",
        },
      ],
    },
    {
      title: "Data Privacy Question",
      text: "Marketing wants to sell customer data for a quick revenue boost.",
      options: [
        {
          label: "Refuse—it breaches trust.",
          effects: { trust: 8, satisfaction: 2, profitability: -5, integrity: 8 },
          msg: "Customers stay loyal, even as you lose a short-term gain.",
        },
        {
          label: "Allow it with opt-out notice.",
          effects: { trust: -3, satisfaction: -2, profitability: 5, integrity: -3 },
          msg: "Legal—but customers feel uneasy.",
        },
        {
          label: "Approve—it’s standard industry practice.",
          effects: { trust: -6, satisfaction: -3, profitability: 6, integrity: -6 },
          msg: "You profit quickly but erode reputation.",
        },
      ],
    },
    {
      title: "Nonprofit Board Dilemma",
      text: "As a volunteer board member, you discover financial mismanagement.",
      options: [
        {
          label: "Blow the whistle, even if it damages relationships.",
          effects: { trust: 6, satisfaction: -2, profitability: 0, integrity: 8 },
          msg: "Difficult choice—but the right one.",
        },
        {
          label: "Confront the director privately first.",
          effects: { trust: 3, satisfaction: 2, profitability: 0, integrity: 4 },
          msg: "You give a chance for accountability.",
        },
        {
          label: "Stay silent to protect the charity’s image.",
          effects: { trust: -6, satisfaction: -4, profitability: 0, integrity: -8 },
          msg: "Silence allows wrongdoing to continue.",
        },
      ],
    },
    {
      title: "Startup Investment Pitch",
      text: "Investors ask you to exaggerate metrics to secure funding.",
      options: [
        {
          label: "Refuse to lie—truth builds long-term trust.",
          effects: { trust: 8, satisfaction: 2, profitability: -4, integrity: 8 },
          msg: "Integrity wins slow but real success.",
        },
        {
          label: "Spin the data—everyone does it.",
          effects: { trust: -4, satisfaction: -2, profitability: 6, integrity: -4 },
          msg: "You close funding—but credibility fades.",
        },
        {
          label: "Avoid direct answers—deflect questions.",
          effects: { trust: -2, satisfaction: 0, profitability: 2, integrity: -2 },
          msg: "You escape scrutiny—for now.",
        },
      ],
    },
    {
      title: "Layoff Planning",
      text: "You must cut 15% of staff. How do you proceed?",
      options: [
        {
          label: "Be transparent early and offer severance support.",
          effects: { trust: 6, satisfaction: 3, profitability: -2, integrity: 5 },
          msg: "Hard but humane—you maintain dignity.",
        },
        {
          label: "Announce cuts abruptly to control the narrative.",
          effects: { trust: -5, satisfaction: -4, profitability: 3, integrity: -3 },
          msg: "Efficiency trumps empathy.",
        },
        {
          label: "Delay the decision, hoping conditions improve.",
          effects: { trust: -2, satisfaction: 0, profitability: -3, integrity: -1 },
          msg: "Uncertainty frustrates everyone.",
        },
      ],
    },
    {
      title: "Social Media Storm",
      text: "Your company is trending for a controversial ad.",
      options: [
        {
          label: "Apologize and remove it immediately.",
          effects: { trust: 5, satisfaction: 4, profitability: -1, integrity: 4 },
          msg: "Accountability cools the backlash.",
        },
        {
          label: "Defend it as misunderstood creativity.",
          effects: { trust: -4, satisfaction: -3, profitability: 3, integrity: -3 },
          msg: "You gain defiant followers—but lose credibility.",
        },
        {
          label: "Stay silent and let it pass.",
          effects: { trust: -3, satisfaction: -2, profitability: 1, integrity: -2 },
          msg: "Silence looks weak, even if attention fades.",
        },
      ],
    },
    {
      title: "Employee Burnout",
      text: "Surveys show exhaustion and high turnover risk.",
      options: [
        {
          label: "Reduce workload and emphasize wellness.",
          effects: { trust: 6, satisfaction: 6, profitability: -2, integrity: 4 },
          msg: "Morale recovers; loyalty deepens.",
        },
        {
          label: "Ignore it—focus on productivity.",
          effects: { trust: -6, satisfaction: -5, profitability: 3, integrity: -3 },
          msg: "You hit short-term goals, but lose people fast.",
        },
        {
          label: "Reward top performers, let others adapt.",
          effects: { trust: -2, satisfaction: 0, profitability: 2, integrity: 0 },
          msg: "Mixed results—favoritism complaints rise.",
        },
      ],
    },
    {
      title: "AI Implementation",
      text: "Automation could replace 20% of jobs in your division.",
      options: [
        {
          label: "Reskill employees and redeploy talent.",
          effects: { trust: 6, satisfaction: 5, profitability: 2, integrity: 6 },
          msg: "Innovation with compassion sets a model.",
        },
        {
          label: "Proceed silently to avoid resistance.",
          effects: { trust: -5, satisfaction: -4, profitability: 6, integrity: -4 },
          msg: "Efficiency improves, trust evaporates.",
        },
        {
          label: "Delay and study ethical implications.",
          effects: { trust: 3, satisfaction: 2, profitability: -2, integrity: 4 },
          msg: "Patience earns cautious respect.",
        },
      ],
    },
    {
      title: "Political Pressure",
      text: "A local politician asks you to endorse a policy that benefits your firm.",
      options: [
        {
          label: "Decline politely—stay nonpartisan.",
          effects: { trust: 5, satisfaction: 2, profitability: -1, integrity: 5 },
          msg: "You preserve integrity and independence.",
        },
        {
          label: "Endorse it—it helps the company.",
          effects: { trust: -4, satisfaction: -2, profitability: 5, integrity: -3 },
          msg: "You gain influence but divide employees.",
        },
        {
          label: "Donate quietly to both sides.",
          effects: { trust: -3, satisfaction: 0, profitability: 3, integrity: -4 },
          msg: "You appear opportunistic.",
        },
      ],
    },
    {
      title: "Global Expansion",
      text: "Entering a new market where labor standards are weaker.",
      options: [
        {
          label: "Hold your ethical standards globally.",
          effects: { trust: 6, satisfaction: 3, profitability: -2, integrity: 7 },
          msg: "Hard road—but admired globally.",
        },
        {
          label: "Adapt to local norms to stay competitive.",
          effects: { trust: -4, satisfaction: -2, profitability: 6, integrity: -5 },
          msg: "You profit—but lose moral ground.",
        },
        {
          label: "Find a partner to navigate compliance ethically.",
          effects: { trust: 4, satisfaction: 3, profitability: 3, integrity: 4 },
          msg: "Balanced growth, respected choice.",
        },
      ],
    },
    {
      title: "Final Legacy",
      text: "You’re asked to mentor young leaders before retirement.",
      options: [
        {
          label: "Teach them to balance results with values.",
          effects: { trust: 10, satisfaction: 8, profitability: 3, integrity: 10 },
          msg: "Your influence extends to the next generation.",
        },
        {
          label: "Focus on efficiency and execution lessons.",
          effects: { trust: 2, satisfaction: 3, profitability: 5, integrity: 0 },
          msg: "They’ll remember your results—but not your wisdom.",
        },
        {
          label: "Decline—let them learn through experience.",
          effects: { trust: -2, satisfaction: -2, profitability: 0, integrity: -3 },
          msg: "You fade quietly from leadership circles.",
        },
      ],
    },
  ];

    const handleChoice = (opt) => {
    const updated = { ...scores };
    Object.keys(opt.effects).forEach((k) => {
      const next = updated[k] + opt.effects[k];
      updated[k] = Math.max(0, Math.min(100, next));
    });
    setScores(updated);
    setMessage(opt.msg);
  };

      const nextScene = () => {
    setScene((prev) => prev + 1);
    setMessage("");
  }; 

     // closes nextScene function

  // ✅ this shows the ending screen once all scenes are done
  if (scene >= scenes.length) {
    return (
      <div style={{ maxWidth: "700px", margin: "2rem auto", textAlign: "center" }}>
        <h1>Simulation Complete</h1>
        <p>Your final leadership profile:</p>
        {Object.entries(scores).map(([k, v]) => (
          <div key={k}>
            <strong>{k}:</strong> {v}
          </div>
        ))}
      </div>
    );
  }

  // ✅ this shows the current scene (main gameplay)
  const current = scenes[scene];

  return (
    <div
  style={{
    maxWidth: "700px",
    margin: "2rem auto",
    fontFamily: "sans-serif",
    background: "#fafafa",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    color: "#333",
  }}
>
      <h2>{current.title}</h2>
      <p>{current.text}</p>

      {message ? (
        <>
          <p style={{ fontStyle: "italic", color: "#000000ff" }}>{message}</p>
          <button
  key={i}
  onClick={() => handleChoice(opt)}
  style={{
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    background: "#f7fafcff", 
    color: "#020d1dff",      // dark blue text
    textAlign: "left",
    cursor: "pointer",
  }}
>
  {opt.label}
</button>
        </>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleChoice(opt)}
              style={{
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                background: "#f3eeee",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      <hr style={{ margin: "2rem 0" }} />
      <h4 style={{ marginTop: "2rem" }}>Leadership Metrics</h4>
      {Object.entries(scores).map(([k, v]) => {
        let color = "#9e9e9e";
        if (v >= 80) color = "#1b5e20";
        else if (v >= 60) color = "#43a047";
        else if (v < 40 && v >= 20) color = "#ef5350";
        else if (v < 20) color = "#b71c1c";

        return (
          <div key={k} style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ textTransform: "capitalize" }}>{k}</span>
              <span>{v}</span>
            </div>
            <div
              style={{
                background: "#e0e0e0",
                height: "12px",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${v}%`,
                  background: color,
                  height: "12px",
                  transition: "width 0.4s ease, background 0.4s ease",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  ); // ✅ closes the return for the simulation view
}