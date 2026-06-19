import { FaChevronUp } from "react-icons/fa";

export default function BackToTop() {
  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToHome}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
      aria-label="Back to home"
    >
      <FaChevronUp size={18} />
    </button>
  );
}
