import Logo from "./Logo";
import NewsLetter from "./Newsletter";
import "../css/footer.css";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#f9dec9"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#f9dec9"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM36.237,20.524c0.01,0.236 0.016,0.476 0.016,0.717c0,7.318 -5.573,15.759 -15.762,15.759c-3.128,0 -6.041,-0.917 -8.491,-2.489c0.433,0.052 0.872,0.077 1.321,0.077c2.596,0 4.985,-0.884 6.879,-2.37c-2.424,-0.044 -4.468,-1.649 -5.175,-3.847c0.339,0.065 0.686,0.1 1.044,0.1c0.505,0 0.995,-0.067 1.458,-0.195c-2.532,-0.511 -4.441,-2.747 -4.441,-5.432c0,-0.024 0,-0.047 0,-0.07c0.747,0.415 1.6,0.665 2.509,0.694c-1.488,-0.995 -2.464,-2.689 -2.464,-4.611c0,-1.015 0.272,-1.966 0.749,-2.786c2.733,3.351 6.815,5.556 11.418,5.788c-0.095,-0.406 -0.145,-0.828 -0.145,-1.262c0,-3.059 2.48,-5.539 5.54,-5.539c1.593,0 3.032,0.672 4.042,1.749c1.261,-0.248 2.448,-0.709 3.518,-1.343c-0.413,1.292 -1.292,2.378 -2.437,3.064c1.122,-0.136 2.188,-0.432 3.183,-0.873c-0.742,1.111 -1.681,2.088 -2.762,2.869z"></path>
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#f9dec9"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-12.682,0 -23,10.318 -23,23c0,12.682 10.318,23 23,23c12.683,0 23,-10.318 23,-23c0,-12.682 -10.317,-23 -23,-23zM34.973,29.535c2.237,1.986 2.702,2.695 2.778,2.816c0.927,1.47 -1.028,1.649 -1.028,1.649h-4.12c0,0 -1.003,0.011 -1.86,-0.557c-1.397,-0.915 -2.86,-2.689 -3.888,-2.381c-0.863,0.258 -0.855,1.424 -0.855,2.421c0,0.357 -0.307,0.517 -1,0.517c-0.693,0 -0.981,0 -1.288,0c-2.257,0 -4.706,-0.76 -7.149,-3.313c-3.456,-3.609 -6.487,-10.879 -6.487,-10.879c0,0 -0.179,-0.366 0.016,-0.589c0.221,-0.25 0.822,-0.218 0.822,-0.218l3.995,-0.001c0,0 0.376,0.071 0.646,0.261c0.223,0.156 0.347,0.454 0.347,0.454c0,0 0.671,2.216 1.526,3.629c1.67,2.758 2.447,2.828 3.014,2.531c0.828,-0.43 0.558,-3.362 0.558,-3.362c0,0 0.037,-1.259 -0.395,-1.82c-0.333,-0.434 -0.97,-0.665 -1.248,-0.701c-0.225,-0.029 0.151,-0.423 0.63,-0.648c0.64,-0.285 1.511,-0.358 3.013,-0.344c1.169,0.011 1.506,0.081 1.962,0.186c1.379,0.318 1.038,1.157 1.038,4.103c0,0.944 -0.13,2.271 0.582,2.711c0.307,0.19 1.359,0.422 3.231,-2.618c0.889,-1.442 1.596,-3.834 1.596,-3.834c0,0 0.146,-0.263 0.373,-0.393c0.232,-0.133 0.225,-0.13 0.543,-0.13c0.318,0 3.507,-0.025 4.207,-0.025c0.699,0 1.355,-0.008 1.468,0.402c0.162,0.589 -0.516,2.607 -2.234,4.797c-2.823,3.594 -3.136,3.258 -0.793,5.336z"></path>
                </g>
              </g>
            </svg>
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
