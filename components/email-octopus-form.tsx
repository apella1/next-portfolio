"use client";

import { useEffect, useRef } from "react";

interface EmailOctopusFormProps {
  className?: string;
}

const EmailOctopusForm: React.FC<EmailOctopusFormProps> = ({ className }) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentFormRef = formRef.current;

    const script = document.createElement("script");
    script.src =
      "https://eomail5.com/form/4ceb80ec-9eb0-11f0-b4e2-6d503f5b7123.js";
    script.async = true;
    script.setAttribute("data-form", "4ceb80ec-9eb0-11f0-b4e2-6d503f5b7123");

    // append script to the form container
    if (currentFormRef) {
      currentFormRef.appendChild(script);
    }

    // cleanup function to remove script when component unmounts
    return () => {
      if (currentFormRef && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={formRef} className={className}>
      {/* EmailOctopus form will be injected here */}
    </div>
  );
};

export default EmailOctopusForm;
