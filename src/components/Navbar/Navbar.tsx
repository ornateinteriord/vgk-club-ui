import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../data/homeData";
import type { NavLink } from "../../types";
import {
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
} from "../../icons/Icons";

// ─── Chevron SVG matching real site exactly ───────────────────────────────────
const NavChevron = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13.5431 4.85479C13.6068 4.79465 13.6817 4.74763 13.7635 4.71642C13.8453 4.68521 13.9325 4.67042 14.02 4.67289C14.1075 4.67537 14.1937 4.69506 14.2736 4.73085C14.3536 4.76663 14.4257 4.81781 14.4858 4.88146C14.5459 4.94511 14.593 5.01998 14.6242 5.1018C14.6554 5.18362 14.6702 5.27078 14.6677 5.35831C14.6652 5.44585 14.6455 5.53204 14.6097 5.61196C14.574 5.69189 14.5228 5.76398 14.4591 5.82413L8.45914 11.4908C8.33536 11.6078 8.17148 11.673 8.00114 11.673C7.83079 11.673 7.66691 11.6078 7.54314 11.4908L1.54247 5.82413C1.47743 5.76438 1.42491 5.6923 1.38796 5.61208C1.35101 5.53186 1.33036 5.4451 1.32723 5.35684C1.32409 5.26858 1.33853 5.18057 1.36969 5.09793C1.40085 5.0153 1.44813 4.93967 1.50876 4.87546C1.5694 4.81125 1.64219 4.75972 1.72291 4.72388C1.80363 4.68803 1.89066 4.66858 1.97896 4.66666C2.06726 4.66474 2.15506 4.68038 2.23726 4.71268C2.31946 4.74497 2.39443 4.79328 2.4578 4.85479L8.00114 10.0895L13.5431 4.85479Z"
      fill="#ffffff"
    />
  </svg>
);

// ─── Search Icon matching real site ──────────────────────────────────────────
const RealSearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.0023 13.0012C21.0023 14.5837 20.533 16.1307 19.6538 17.4465C18.7746 18.7623 17.5249 19.7878 16.0628 20.3934C14.6007 20.9989 12.9919 21.1573 11.4398 20.8485C9.88771 20.5397 8.46204 19.7775 7.3431 18.6584C6.22416 17.5394 5.46221 16.1136 5.15361 14.5614C4.84501 13.0093 5.00361 11.4005 5.60937 9.93849C6.21512 8.47649 7.24082 7.22696 8.55675 6.34791C9.87268 5.46886 11.4197 4.99978 13.0023 5C15.1243 5 17.1594 5.84298 18.6599 7.34349C20.1604 8.84399 21.0034 10.8791 21.0034 13.0012H21.0023Z" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23.0042 23L18.6538 18.6497" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── User Icon matching real site ─────────────────────────────────────────────
const RealUserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3332 24.5V22.1667C23.3332 20.929 22.8415 19.742 21.9663 18.8668C21.0912 17.9917 19.9042 17.5 18.6665 17.5H9.33317C8.09549 17.5 6.90851 17.9917 6.03334 18.8668C5.15817 19.742 4.6665 20.929 4.6665 22.1667V24.5M18.6665 8.16667C18.6665 10.744 16.5772 12.8333 13.9998 12.8333C11.4225 12.8333 9.33317 10.744 9.33317 8.16667C9.33317 5.58934 11.4225 3.5 13.9998 3.5C16.5772 3.5 18.6665 5.58934 18.6665 8.16667Z" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── WhatsApp Icon matching real site ─────────────────────────────────────────
const RealWhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
    <path d="M24.4991 13.9666C24.4628 11.206 23.341 8.59728 21.3405 6.62107C19.3031 4.60844 16.6138 3.5 13.7678 3.5C11.0205 3.5 8.45041 4.54427 6.5309 6.44038C4.82756 8.12301 3.78253 10.3672 3.58814 12.7595C3.40378 15.0293 3.98871 17.3263 5.23775 19.2576L3.53214 23.8119C3.46056 24.003 3.51083 24.218 3.66013 24.3587C3.75823 24.4512 3.88674 24.5 4.01726 24.5C4.08532 24.5 4.15399 24.4805 4.2191 24.4532L8.66124 22.5859C10.357 23.6285 12.2961 24.1659 14.2872 24.1659C17.034 24.1659 19.6042 23.134 21.5234 21.2381C23.4786 19.3067 24.5354 16.7323 24.4991 13.9666ZM20.792 20.5281C19.068 22.2312 16.7578 23.169 14.2871 23.169C12.4061 23.1689 10.5761 22.6251 8.9948 21.5961C8.90905 21.5404 8.80997 21.512 8.71032 21.512C8.6419 21.512 8.57323 21.5253 8.50843 21.5525L4.91765 23.057L6.2984 19.3701C6.35616 19.2158 6.33517 19.0434 6.24203 18.9071C3.70414 15.193 4.1332 10.2538 7.26224 7.16287C8.98637 5.45971 11.2967 4.52169 13.7678 4.52169C16.3375 4.52169 18.7671 5.52382 20.6091 7.34351C22.4179 9.13025 23.4321 11.4871 23.4649 13.9799C23.4976 16.4676 22.5484 18.7932 20.792 20.5281Z" fill="#ffffff"/>
    <path d="M16.5124 15.8314C16.3512 15.8562 16.2481 16.0114 16.0869 16.2535C15.9193 16.5143 15.7259 16.8123 15.3519 16.9116C15.1521 16.9675 14.7781 16.9675 13.8949 16.3591C13.3727 15.999 12.7538 15.4775 12.1993 14.9311C11.3096 14.0557 11.2967 13.8385 11.2967 13.7577C11.2774 13.3977 11.574 13.0997 11.8383 12.8389C11.9995 12.6837 12.1606 12.5223 12.2122 12.3857C12.2316 12.2864 12.0962 11.8393 11.7287 11.2061C11.3612 10.5728 11.0324 10.2252 10.9293 10.1879C10.9164 10.1817 10.8906 10.1817 10.8648 10.1817C10.6778 10.1817 10.2201 10.2872 9.82036 10.6411C9.40775 11.0136 8.99514 11.7338 9.37551 13.0376C10.0782 15.4651 12.2896 17.4269 15.6034 18.5506C16.4802 18.8486 17.2022 18.8486 17.7373 18.5382C18.4852 18.1036 18.7109 17.191 18.7689 16.8185C18.7753 16.7874 18.7624 16.7564 18.7431 16.7316C18.2982 16.2846 16.9186 15.7631 16.5124 15.8314Z" fill="#ffffff"/>
  </svg>
);

// ─── Cart / Bag Icon matching real site ───────────────────────────────────────
const RealCartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.55029 7.7L7.70029 3.5H20.3003L23.4503 7.7M4.55029 7.7V22.4C4.55029 22.957 4.77154 23.4911 5.16537 23.8849C5.5592 24.2787 6.09334 24.5 6.65029 24.5H21.3503C21.9072 24.5 22.4414 24.2787 22.8352 23.8849C23.229 23.4911 23.4503 22.957 23.4503 22.4V7.7M4.55029 7.7H23.4503M18.2003 11.9C18.2003 13.0139 17.7578 14.0822 16.9701 14.8698C16.1825 15.6575 15.1142 16.1 14.0003 16.1C12.8864 16.1 11.8181 15.6575 11.0304 14.8698C10.2428 14.0822 9.80029 13.0139 9.80029 11.9" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Single nav item (handles dropdown) ──────────────────────────────────────
interface NavItemProps { link: NavLink }

function NavItem({ link }: NavItemProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!link.children) {
    return (
      <div className="vgk-nav-item">
        <Link to={link.href} className="vgk-nav-link" style={{ textDecoration: "none" }}>
          <p style={{ margin: 0, color: "inherit", whiteSpace: "nowrap" }}>
            {link.label}
          </p>
        </Link>
      </div>
    );
  }

  return (
    <div className={`vgk-nav-item${open ? " open" : ""}`} ref={ref} onClick={() => setOpen((o) => !o)}>
      <span className="vgk-nav-link" style={{ cursor: "pointer" }}>
        <p style={{ margin: 0, color: "inherit", whiteSpace: "nowrap" }}>{link.label}</p>
        <span className="vgk-nav-chevron"><NavChevron /></span>
      </span>

      {open && (
        <div className="vgk-dropdown-menu">
          {link.children.map((child) => (
            <Link key={child.label} to={child.href}>
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <>
      <nav className="vgk-navbar">
        {/* ── Left Links (desktop) ── */}
        <div className="vgk-nav-left">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.label} link={link} />
          ))}
        </div>

        {/* ── Centre Logo ── */}
        <div className="vgk-nav-logo">
          <Link to="/">
            <img src={logoImg} alt="VGK HUB" />
          </Link>
        </div>

        {/* ── Right Icons (desktop) ── */}
        <div className="vgk-nav-right">
          <button className="vgk-nav-icon" title="Search">    <RealSearchIcon />   </button>
          <button className="vgk-nav-icon" title="My Account"><RealUserIcon />     </button>
          <button className="vgk-nav-icon" title="WhatsApp">  <RealWhatsAppIcon /></button>
          <button className="vgk-nav-icon" title="Cart" style={{ position: "relative" }}>
            <RealCartIcon />
          </button>
        </div>

        {/* ── Hamburger (mobile only) ── */}
        <button
          className="vgk-nav-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
        >
          <MenuIcon size={24} />
        </button>
      </nav>

      {/* ── Mobile Overlay + Panel ── */}
      <div
        className={`vgk-mobile-overlay${mobileOpen ? " open" : ""}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="vgk-mobile-panel" onClick={(e) => e.stopPropagation()}>
          {/* Panel header */}
          <div className="vgk-mobile-header">
            <div className="vgk-mobile-logo">
              <img src={logoImg} alt="VGK HUB" />
            </div>
            <button className="vgk-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close">
              <CloseIcon size={22} />
            </button>
          </div>

          {/* Links */}
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <div
                className="vgk-mobile-link"
                onClick={() =>
                  link.children
                    ? setMobileExpanded((p) => (p === link.label ? null : link.label))
                    : setMobileOpen(false)
                }
              >
                <span>{link.label}</span>
                {link.children && (
                  <ChevronDownIcon
                    size={14}
                    color="#fff"
                  />
                )}
              </div>

              {/* Sub-links */}
              {link.children && mobileExpanded === link.label &&
                link.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    className="vgk-mobile-sub-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))
              }
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
