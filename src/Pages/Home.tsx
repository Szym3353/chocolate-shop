import Carousel from "../components/Carousel";
import { HomeCard, carouselCards } from "../components/Home/HomeCard";
import "../css/home.css";

export default function Home() {
  return (
    <main>
      <section className="head-section">
        <h1 className="head-section__text">Pozwól sobie na slodka rozkosz</h1>
        <div className="divider">
          <div className="divider__line" />
          <img src="/chocolate2.png" />
          <div className="divider__line" />
        </div>
        <div className="head-section__buttons">
          <button>Przycisk</button>
          <button>Przycisk</button>
        </div>
      </section>
      <section className="carousel-section">
        <div className="head-section__blob" />
        <h2 className="carousel-section__header">Nasze najnowsze produkty</h2>
        <Carousel data={carouselCards} Component={HomeCard} />
      </section>
    </main>
  );
}
