import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      q: "What is Ghibli Art?",
      a: "It’s an AI-powered platform to generate Studio Ghibli-inspired artwork.",
    },
    {
      q: "Is it free to use?",
      a: "We offer a free tier with limited generations and premium plans for more.",
    },
    {
      q: "Can I use the art commercially?",
      a: "Yes! Generated artworks are yours to use personally or commercially.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <h2 className="faq-title">❓ Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, idx) => (
          <div key={idx} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {item.q}
              <span>{openIndex === idx ? "-" : "+"}</span>
            </button>
            {openIndex === idx && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
