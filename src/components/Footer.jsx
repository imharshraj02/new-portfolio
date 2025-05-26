import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg text-white py-6 mt-12">
      <div className="max-w-8xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Harsh Raj. All rights reserved.</p>


        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/imharshraj02" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaGithub />
          </a>
          <a href="www.linkedin.com/in/harsh-raj-818909199" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};
