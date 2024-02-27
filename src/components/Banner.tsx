import React, { useEffect, useRef } from "react";

interface BannerProps {
  status: string;
  action: () => void;
  actionText: string;
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({
  status,
  children,
  action,
  actionText,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (buttonRef.current) buttonRef.current.focus();
  }, []);
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 mx-auto h-32 w-full max-w-xl animate-slideUp space-y-3 p-8 text-center will-change-transform ${status}`}
    >
      {children}
      {action && (
        <button
          className="p-2 focus:outline-double focus:outline-gray-300"
          ref={buttonRef}
          onClick={action}
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default Banner;
