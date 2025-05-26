import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / height) * 100;
      setScrollPercent(progress);

      setIsVisible(scrolled > 300);

      const footer = document.getElementById("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setNearFooter(footerTop < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 z-50 bg-transparent p-2 rounded-full transition duration-300 ${
        nearFooter ? "bottom-24" : "bottom-6"
      }`}
      aria-label="Scroll to top"
    >
      <svg className="w-14 h-14 rotate-[-90deg]" viewBox="0 0 60 60">
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#1d4ed8" // blue-600
          strokeWidth="4"
          fill="none"
          className="opacity-30"
        />
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#1d4ed8"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md">
        <FaArrowUp className="h-5 w-5" />
      </div>
    </button>
  );
};
