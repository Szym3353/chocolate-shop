import "../../css/home-addon-card.css";

export type AddonType = {
  title: string;
  text: string;
  imgSrc: string;
};

export default function HomeAddonCard({ title, text, imgSrc }: AddonType) {
  return (
    <div className="addon-card">
      <img src={imgSrc} className="addon-card__img" alt={`addons-${title}`} />
      <div className="addon-card__text-content">
        <h6 className="addon-card__title">{title}</h6>
        <p className="addon-card__text">{text}</p>
      </div>
    </div>
  );
}
