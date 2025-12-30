import React, { useState } from 'react'
import './VideoSection.css'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="video-section">
      <h2 className="video-title">Cómo se usa la aplicación</h2>

      <div className="video-container">
        <div className="video-wrapper">
          <img
            src="../../assets/video/videoThumbnail.png"
            alt="KIBO Demo Video"
            className="video-thumbnail"
          />
          {!isPlaying && (
            <div className="video-overlay">
              <button
                className="play-button"
                onClick={() => setIsPlaying(true)}
                aria-label="Play video"
              >
                <span className="play-icon">▶</span>
              </button>
            </div>
          )}
          {isPlaying && (
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/uYJjiFOWFV4"
              title="KIBO Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  )
}
