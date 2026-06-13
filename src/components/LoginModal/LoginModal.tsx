import { useState, useEffect } from "react";
import "./LoginModal.css";
import logoImg from "../../assets/logo.png";
import { CloseIcon } from "../../icons/Icons";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [method, setMethod] = useState<"mobile" | "email">("mobile");
  const [inputValue, setInputValue] = useState("");

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="vgk-modal-overlay" onClick={onClose}>
      <div className="vgk-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="vgk-modal-close" onClick={onClose}>
          <CloseIcon size={20} color="#888" />
        </button>

        {/* Header */}
        <div className="vgk-modal-header">
          <div className="vgk-modal-logo-wrap">
            <img src={logoImg} alt="VGK HUB" />
          </div>
          <p className="vgk-modal-welcome">Welcome to VGK HUB</p>
          <h2 className="vgk-modal-title">Login</h2>
        </div>

        {/* Body */}
        <div className="vgk-modal-body">
          {method === "mobile" ? (
            <>
              <div className="vgk-input-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter your Mobile Number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>

              <p className="vgk-modal-terms">
                Yes, I accept the <span>terms and conditions</span> and want to receive important information & updates on my WhatsApp/SMS
              </p>

              <button className="vgk-modal-btn-primary" disabled={!inputValue}>
                Get OTP
              </button>

              <div className="vgk-modal-divider">
                <span>OR</span>
              </div>

              <button
                className="vgk-modal-btn-outline"
                onClick={() => {
                  setMethod("email");
                  setInputValue("");
                }}
              >
                <MailIcon /> Login with Email ID
              </button>
            </>
          ) : (
            <>
              <div className="vgk-input-group">
                <label>Email ID</label>
                <div className="vgk-input-with-icon">
                  <input
                    type="email"
                    placeholder="Enter your Email ID"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <div className="vgk-input-icon">
                    <MailIcon />
                  </div>
                </div>
              </div>

              <button className="vgk-modal-btn-primary" disabled={!inputValue}>
                Get OTP
              </button>

              <div className="vgk-modal-divider">
                <span>OR</span>
              </div>

              <button
                className="vgk-modal-btn-outline"
                onClick={() => {
                  setMethod("mobile");
                  setInputValue("");
                }}
              >
                <PhoneIcon /> Login with Mobile Number
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
