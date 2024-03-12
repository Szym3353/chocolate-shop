import Button from "../Button/Button";
import "../../css/home-more-info.css";

export default function HomeMoreInfo({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="more-info__container">
      <img alt="Icon" src="chocolate.png" className="more-info__icon" />
      <div className="more-info__text-container">
        <h6 className="more-info__title">{title}</h6>
        <p className="more-info__text">{text}</p>
        <Button>Kliknij sobie</Button>
      </div>
    </div>
  );
}
