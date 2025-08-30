import React from "react";
import "./Gallery.css";

function Gallery() {
  const images = [
    "https://homafy.com/wp-content/uploads/2025/03/cartoon-art.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMITad6HGwBSYGjMpraK6ykzzcWndS0wMeUA&s",
    "https://media.licdn.com/dms/image/v2/D4D22AQEax6j9_Gg0zA/feedshare-shrink_800/B4DZXucmUzHIAs-/0/1743462233274?e=2147483647&v=beta&t=evBwaLpDujsWq8SohqX6belzxD6RBsYfCxQX4nXsgA4",
    "https://www.hindustantimes.com/ht-img/img/2025/04/02/1600x900/chat_gpt_studio_ghibli_1743581371595_1743581394345.png",
    "https://c.ndtvimg.com/2025-03/cku9d8vg_ai-image-_625x300_30_March_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVF9Gks0czbd_4c-sodYzIpUqOIvLTnd6nw&s",
  ];

  return (
    <section className="gallery">
      <h2 className="gallery-title">🖼️ Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div key={idx} className="gallery-item">
            <img src={src} alt={`Artwork ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
