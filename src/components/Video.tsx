import React from 'react'

import { Video as VideoWrapper } from '../styles/components/Video'

const Video: React.FC = () => {
  return (
    <VideoWrapper>
      <div className="image-container">
        <img src="/video.jpg" alt="" className="image" />
      </div>

      <div className="tag">
        <span className="dot"></span>
        <span className="live">Live</span>
        <span className="time">01:32:50</span>
      </div>

      <div className="footer">
        <div className="item">
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '1.4rem', height: '1.4rem', color: '#8C8C8C' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
          <span className="text">cam</span>
        </div>
        <div className="item">
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '1.4rem', height: '1.4rem', color: '#8C8C8C' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </button>
          <span className="text">micro</span>
        </div>
        <div className="item">
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '1.4rem', height: '1.4rem', color: '#8C8C8C' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
          <span className="text">screen</span>
        </div>
        <div className="item">
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '1.4rem', height: '1.4rem', color: '#FF5050' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <span className="text">record</span>
        </div>
        <div className="item">
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '1.4rem', height: '1.4rem', color: '#8C8C8C' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
          <span className="text">slide</span>
        </div>
        <div className="item">
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '1.4rem', height: '1.4rem', color: '#8C8C8C' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </button>
          <span className="text">poll</span>
        </div>
      </div>
    </VideoWrapper>
  )
}

export default Video
