import "../css/newsletter.css";
import Button from "./Button/Button";

export default function NewsLetter() {
  return (
    <div className="newsletter">
      <h6 className="newsletter__header">Subscribe to our newsletter</h6>
      <label htmlFor="newsletter-email">Your email address: </label>
      <input type="email" name="newsletter-email" />
      <p className="newsletter__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam unde
        odio sit et, corporis vitae quasi porro, eaque modi tempora est maiores
        quos veritatis voluptates sed doloribus libero quisquam fugiat
        reprehenderit nemo ullam sint eum error. Quod enim quas et.
      </p>
      <Button>Subscribe</Button>
    </div>
  );
}
