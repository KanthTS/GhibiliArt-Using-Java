import React from "react";
import "./Features.css";

function Features() {
  const features = [
    {
      title: "AI-Powered Art",
      desc: "Generate beautiful Ghibli-style artwork instantly from your imagination.",
      icon: "🎨",
    },
    {
      title: "High Resolution",
      desc: "Export in HD quality, perfect for wallpapers or prints.",
      icon: "🖼️",
    },
    {
      title: "Fast & Reliable",
      desc: "Lightning-fast rendering with cloud-powered engines.",
      icon: "⚡",
    },
  ];

  return (
    <section className="features">
      <h2 className="features-title">✨ Features</h2>
      <div className="features-grid">
        {features.map((f, idx) => (
          <div key={idx} className="feature-card">
            <span className="feature-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
