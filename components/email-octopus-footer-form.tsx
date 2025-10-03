"use client";

import { useEffect, useRef } from "react";

interface EmailOctopusFormProps {
  className?: string;
}

const EmailOctopusFooterForm: React.FC<EmailOctopusFormProps> = ({
  className,
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentFormRef = formRef.current;

    const script = document.createElement("script");
    script.src =
      "https://eomail5.com/form/df7dc2ec-9f70-11f0-a8e3-0b8f2c891cab.js";
    script.async = true;
    script.setAttribute("data-form", "df7dc2ec-9f70-11f0-a8e3-0b8f2c891cab");

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

export default EmailOctopusFooterForm;
