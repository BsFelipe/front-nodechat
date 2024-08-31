import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3015');

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">Chat</h2>
        </div>
        <div className="p-4 h-96 overflow-y-auto bg-gray-50">
          <ul className="space-y-2">
            {messages.map((msg, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className="bg-gray-200 p-2 rounded">
                {msg}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={sendMessage} className="flex items-center p-4 border-t border-gray-200 bg-gray-100">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            type="submit"
            className="ml-3 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
