import React from 'react'

import { Chat as ChatWrapper } from '../styles/components/Chat'

const Chat: React.FC = () => {
  return (
    <ChatWrapper>
      <div className="header">
        <span className="title">Chat</span>

        <div className="chat">
          <div className="message from">
            <div className="message-profile">
              <img
                src="https://pbs.twimg.com/profile_images/1287431914450751489/fgKy6CCU_400x400.jpg"
                alt=""
                className="message-avatar"
                width={40}
              />
            </div>
            <div className="message-info">
              <span className="message-name">Dalas Review</span>
              <span className="message-main">Hey-hey! ✋🤓</span>
            </div>
          </div>

          <div className="message from">
            <div className="message-profile">
              <img
                src="https://pbs.twimg.com/profile_images/1287431914450751489/fgKy6CCU_400x400.jpg"
                alt=""
                className="message-avatar"
                width={40}
              />
            </div>
            <div className="message-info">
              <span className="message-name">Dalas Review</span>
              <span className="message-main">Hey-hey! ✋🤓</span>
            </div>
          </div>

          <div className="message to">
            <div className="message-profile">
              <img
                src="https://pbs.twimg.com/profile_images/1414269202979069961/mGaC-B2Q_400x400.jpg"
                alt=""
                className="message-avatar"
                width={40}
              />
            </div>
            <div className="message-info">
              <span className="message-name">Fernando Villalba</span>
              <span className="message-main">Hey-hey! ✋🤓</span>
            </div>
          </div>
        </div>
      </div>

      <div className="form">
        <div className="action">
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '1.4rem', height: '1.4rem', color: '#999999' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </button>

          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '1.4rem', height: '1.4rem', color: '#999999' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>

          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '1.4rem', height: '1.4rem', color: '#999999' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>
        </div>
        <div className="input">
          <textarea placeholder="Introduce tu mensaje"></textarea>
        </div>
      </div>
    </ChatWrapper>
  )
}

export default Chat
