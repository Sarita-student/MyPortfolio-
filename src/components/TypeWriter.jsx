import { useState, useEffect } from "react";
import { typingRoles } from "../data/portfolioData";

export default function TypeWriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = typingRoles[roleIndex];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % typingRoles.length);
        return;
      }

      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentRole, roleIndex]);

  return (
    <p className="text-lg md:text-2xl text-white/90 font-light">
      I&apos;m a{" "}
      <span className="text-blue-300 font-medium">
        {currentRole.slice(0, charIndex)}
        <span className="cursor-blink">|</span>
      </span>
    </p>
  );
}
