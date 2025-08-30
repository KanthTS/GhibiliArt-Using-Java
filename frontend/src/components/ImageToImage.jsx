import React, { useState } from "react";
import "./CreateForm.css";

function ImageToImage() {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  function downloadImage(e) {
  e.preventDefault();
  if (!output) return;
  const link = document.createElement("a");
  link.href = output;
  link.download = "ghibli_art.png";
  link.click();
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim() || !file) return;

    setIsLoading(true);
    setOutput(null);

    try {
      const formData = new FormData();
      formData.append("init_image", file); // matches backend
      formData.append("prompt", prompt);   // must match backend

      const res = await fetch("http://localhost:8081/api/v1/image-to-image", {
        method: "POST",
        body: formData, // do NOT set Content-Type manually
      });

      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const data = await res.json();
      // Assuming backend returns base64 image in data.artifacts[0].base64
      const base64Img = data.artifacts[0].base64;
      setOutput(`data:image/png;base64,${base64Img}`);
    } catch (err) {
      console.error(err);
      alert("Failed to generate image. Make sure backend is running and API key is valid.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create-container">
      {/* Output */}
      <div className="create-output">
        {isLoading ? (
          <p className="output-placeholder">Generating image...</p>
        ) : output ? (
          <div className="output-wrapper">
            <img src={output} alt="Generated Art" className="output-image" />
            <button  onClick={(e)=>downloadImage(e)}
              className="download-btn">
               Download Image
            </button>
            
          
          
            
          </div>
        ) : (
          <div className="output-placeholder">
            <p>No art generated yet</p>
          </div>
        )}
      </div>

      {/* Description */}
      <h2 className="create-title">🖼️ Image to Image</h2>
      <p className="create-subtitle">
        Upload your image and reimagine it in Ghibli style.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="create-form">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="create-file"
        />
        <textarea
          placeholder="e.g., Make it look like a Ghibli forest scene..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="create-input"
          rows="3"
        />
        <button type="submit" className="create-btn">
          Transform
        </button>
      </form>
    </div>
  );
}

export default ImageToImage;
