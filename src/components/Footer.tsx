import Logo from "./Logo";
import NewsLetter from "./Newsletter";
import "../css/footer.css";
import SocialIcon from "./SocialIcon";

export function FooterInfo({
  icon,
  title,
  text,
}: {
  icon: "home_pin" | "call" | "mail";
  title: string;
  text: string;
}) {
  return (
    <div className="footer-info">
      <span className="material-symbols-sharp footer-info__icon">{icon}</span>
      <div className="footer-info__text">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__description">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            commodi odio molestiae cumque tempora, iste magni, eos voluptatem
            necessitatibus dignissimos aspernatur vitae atque accusamus eveniet.
          </p>
          <div className="footer__socials">
            <SocialIcon icon="facebook" />
            <SocialIcon icon="twitter" />
            <SocialIcon icon="vk" />
          </div>
        </div>
        <div className="footer__nav">
          <p>Category 1</p>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
        <div className="footer__nav">
          <p>Category 2</p>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
          </ul>
        </div>
        <NewsLetter />
      </div>
      <div className="footer__bottom">
        <div className="footer__terms">
          <p className="footer__policy-terms">
            Privacy Policy | Terms & Condition
          </p>
          <p className="footer__copy">
            Copyright 2024 Chocofiesta. All right reserved
          </p>
        </div>
        <div className="footer__info">
          <FooterInfo icon="call" title="Call us:" text="+10 987 654 321" />
          <FooterInfo icon="home_pin" title="Located at:" text="City, Poland" />
          <FooterInfo
            icon="mail"
            title="Email Address:"
            text="Company@example.com"
          />
        </div>
      </div>
    </footer>
  );
}
