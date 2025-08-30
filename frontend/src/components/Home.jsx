import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
   const nav= useNavigate();
   function moving(){
    nav('/create')
   }
  return (
    <main className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Ghibli Art</h1>
          <p>Transform your imagination into Ghibli-style art with AI magic.</p>
          <a href="#create" className="btn-primary" onClick={moving}>Create Art</a>
        </div>
      </section>

      <section id="features" className="features">
        <div className="feature">
          <h3>AI-Powered</h3>
          <p>Generate stunning visuals in seconds.</p>
        </div>
        <div className="feature">
          <h3>Magical Style</h3>
          <p>Soft colors and dreamy landscapes.</p>
        </div>
        <div className="feature">
          <h3>Easy to Use</h3>
          <p>From prompt to art—smooth and intuitive.</p>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {/* Sample images */}
          <div className="gallery-card"><img src=" https://homafy.com/wp-content/uploads/2025/03/cartoon-art.jpeg"/></div>
          <div className="gallery-card"><img src=" https://c.ndtvimg.com/2025-03/cku9d8vg_ai-image-_625x300_30_March_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"/></div>
          <div className="gallery-card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVF9Gks0czbd_4c-sodYzIpUqOIvLTnd6nw&s"/></div>
        </div>
      </section>

      <section id="faq" className="faq">
        <h2>FAQ</h2>
        <details>
          <summary>How does it work?</summary>
          <p>Just enter a prompt, choose style, and let the AI do the rest.</p>
        </details>
        <details>
          <summary>Any usage cost?</summary>
          <p>Costs depend on API usage. Optimized for minimal fees.</p>
        </details>
      </section>
    </main>
  );
}

export default Home;
