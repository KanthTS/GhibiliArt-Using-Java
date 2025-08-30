import React, { useState } from "react";
import "./text.css";

function TextToImage() {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setGeneratedImage(null);

    try {
      const res = await fetch("http://localhost:8081/api/v1/generate-from-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      const base64Img = data.artifacts[0].base64;
      setGeneratedImage(`data:image/png;base64,${base64Img}`);
    } catch (err) {
      console.error(err);
      alert("Failed to generate image. Make sure backend is running and API key is valid.");
    } finally {
      setIsLoading(false);
    }
  };

  const disableButton = isLoading || !prompt.trim();

  return (
    <div className="create-container">
      <h2 className="create-title">🎨 Text to Ghibli Image</h2>
      <p className="create-subtitle">
        Describe your imagination and we’ll turn it into Ghibli-style art.
      </p>

      <div className="create-output">
        {isLoading ? (
          <p className="output-placeholder">Generating image...</p>
        ) : generatedImage ? (
          <img src={generatedImage} alt="Generated" className="output-image" />
        ) : (
          <p className="output-placeholder">
            ✨ Your generated image will appear here...
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="create-form">
        <textarea
          placeholder="e.g., A peaceful village with cherry blossoms, in Studio Ghibli style..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="create-input"
          rows="2"
        />
        <button disabled={disableButton} type="submit" className="create-btn">
          Generate
        </button>
      </form>
    </div>
  );
}

export default TextToImage;
