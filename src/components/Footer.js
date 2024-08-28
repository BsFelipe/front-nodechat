import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 body-font">
      <div className="container mx-auto px-5 py-8 flex items-center justify-between">
        <p className="text-sm text-gray-400">© 2024 Felipe Belo</p>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}