"use client";

import { useEffect, useRef } from "react";

interface EmailOctopusFormProps {
  className?: string;
}

const EmailOctopusNewsletterFormForm: React.FC<EmailOctopusFormProps> = ({
  className,
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentFormRef = formRef.current;

    const script = document.createElement("script");
    script.src =
      "https://eomail1.com/form/3b241838-acc5-11f0-a2ba-e5fa9b388af2.js";
    script.async = true;
    script.setAttribute("data-form", "3b241838-acc5-11f0-a2ba-e5fa9b388af2");

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

export default EmailOctopusNewsletterFormForm;
