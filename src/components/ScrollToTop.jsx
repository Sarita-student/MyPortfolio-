import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToHome}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#149ddd] text-white flex items-center justify-center shadow-lg hover:bg-[#0d8bc7] transition-colors"
      aria-label="Back to home"
    >
      <FaChevronUp size={18} />
    </button>
  );
}
