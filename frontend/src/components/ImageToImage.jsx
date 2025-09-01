import React, { useState } from "react";
import "./CreateForm.css";

function ImageToImage() {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // ✅ error message state

  function downloadImage(e) {
    e.preventDefault();
    if (!output) return;
    const link = document.createElement("a");
    link.href = output;
    link.download = "ghibli_art.png";
    link.click();
  }

  // ✅ Validate dimensions before accepting
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const img = new Image();
    img.src = URL.createObjectURL(selectedFile);

    img.onload = () => {
      if (img.width !== 1024 || img.height !== 1024) {
        setError("⚠️ Please upload an image of 1024 x 1024 pixels.");
        setFile(null);
        e.target.value = ""; // reset file input
      } else {
        setError("");
        setFile(selectedFile);
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim() || !file) return;

    setIsLoading(true);
    setOutput(null);

    try {
      const formData = new FormData();
      formData.append("init_image", file);
      formData.append("prompt", prompt);

      const res = await fetch("http://localhost:8081/api/v1/image-to-image", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const data = await res.json();
      const base64Img = data.artifacts[0].base64;
      setOutput(`data:image/png;base64,${base64Img}`);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while generating the image.");
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
            <button onClick={(e) => downloadImage(e)} className="download-btn">
              Download Image
            </button>
          </div>
        ) : (
          <div className="output-placeholder">
            <p>No art generated yet</p>
          </div>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="create-form">
        <h2 className="create-title">🖼️ Image to Image</h2>
        <p className="create-subtitle">
          Upload your image and reimagine it in Ghibli style.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
          className="create-file"
        />

        {/* ✅ Inline error below file input */}
        {error && <p className="error-message" style={{ color: "red", marginTop: "8px" }}>{error}</p>}

        <textarea
          placeholder="e.g., Make it look like a Ghibli forest scene..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="create-input"
          rows="3"
        />

        <button type="submit" className="create-btn" disabled={!!error}>
          Transform
        </button>
      </form>
    </div>
  );
}

export default ImageToImage;
