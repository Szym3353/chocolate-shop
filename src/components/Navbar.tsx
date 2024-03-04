import "../css/navbar.css";
import IconButton from "./IconButton/IconButton";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="navbar__row">
        <div className="navbar__logo">
          <p>Choco</p>
          <img src="/ch1ocolate.png" alt="logo img" />
          <p>Fiesta</p>
        </div>
        <div className="navbar__icons">
          <IconButton icon="shopping_cart" />
          <IconButton icon="favorite" />
          <IconButton icon="person" />
        </div>
      </div>
      <div className="navbar__row">
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
      </div>
    </nav>
  );
}
