import React from "react";
import "../css/navbar.css";
import IconButton from "./IconButton/IconButton";
import Logo from "./Logo";

export default function Navbar() {
  let navRef = React.useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    if (!navRef.current) return;
    let computedStyle = window.getComputedStyle(navRef.current);
    let currentLeft = computedStyle.getPropertyValue("left");
    if (currentLeft[0] === "-") {
      navRef.current.style.left = "0px";
    } else {
      navRef.current.style.left = "-300px";
    }
  };

  return (
    <nav className="nav">
      <div className="navbar__row">
        <Logo />
        <div className="navbar__icons">
          <IconButton icon="shopping_cart" />
          <IconButton icon="favorite" />
          <IconButton icon="person" />
        </div>
        <div className="visibleMobile">
          <IconButton icon="menu" onClick={handleToggle} />
        </div>
      </div>
      <div className="navbar__row navbar__menu" ref={navRef}>
        <div className="visibleMobile">
          <Logo />
        </div>
        <div className="navbar__col">
          <a href="#" className="navbar__link">
            Produkty
          </a>
          <a href="#" className="navbar__link">
            Sklepy
          </a>
          <a href="#" className="navbar__link">
            Dodatki
          </a>
        </div>
        <div className="navbar__col">
          <a href="#" className="navbar__link">
            Oferty pracy
          </a>
          <a href="#" className="navbar__link">
            O nas
          </a>
        </div>
        <div className="visibleMobile">
          <div className="navbar__icons--mobile">
            <IconButton icon="shopping_cart" style={{ fontSize: 30 }} />
            <IconButton icon="favorite" style={{ fontSize: 30 }} />
            <IconButton icon="person" style={{ fontSize: 30 }} />
          </div>
        </div>
        <div className="visibleMobile">
          <IconButton
            icon="cancel"
            style={{ fontSize: 30 }}
            onClick={handleToggle}
          />
        </div>
      </div>
    </nav>
  );
}
