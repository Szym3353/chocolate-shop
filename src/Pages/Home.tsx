import Carousel from "../components/Carousel";
import HomeAddonCard, { AddonType } from "../components/Home/HomeAddonCard";
import { HomeCard, carouselCards } from "../components/Home/HomeCard";
import HomeMoreInfo from "../components/Home/HomeMoreInfo";
import "../css/home.css";

export default function Home() {
  const addons: AddonType[] = [
    {
      title: "Kwiaty",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aliquid, laboriosam quasi, natus assumenda autem ullam libero doloremque dolor, modi at cumque nemo voluptatibus cupiditate?",
      imgSrc: "bukiet.jpg",
    },
    {
      title: "Wina",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aliquid, laboriosam quasi, natus assumenda autem ullam libero doloremque dolor, modi at cumque nemo voluptatibus cupiditate?",
      imgSrc: "winka.jpg",
    },
    {
      title: "Upominki",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aliquid, laboriosam quasi, natus assumenda autem ullam libero doloremque dolor, modi at cumque nemo voluptatibus cupiditate?",
      imgSrc: "bear.jpg",
    },
  ];

  return (
    <main>
      <div className="padding-container">
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
      </div>
      <section className="addons-section">
        <h2 className="addons-section__header">
          Doskonałe dodatki do prezentów
        </h2>
        <div className="addons-section__grid">
          {addons.map((addon) => (
            <HomeAddonCard {...addon} />
          ))}
        </div>
        <img
          src="crafty-pink-spiral-confetti.png"
          className="addons-section__confetti"
        />
        <img
          src="crafty-pink-spiral-confetti.png"
          className="addons-section__confetti"
        />
      </section>
      <section className="more-info-section">
        <img src="ly-le-minh-jF3zJ1EFuNM-unsplash.jpg" />
        <HomeMoreInfo
          title="Tytuł"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolorem illum deserunt soluta sapiente, cumque earum voluptate est officia, odit corrupti voluptates praesentium voluptatibus debitis."
        />
        <img src="luiz-paulo-r-santos-mhi10r2L0fA-unsplash.jpg" />
        <HomeMoreInfo
          title="Tytuł"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolorem illum deserunt soluta sapiente, cumque earum voluptate est officia, odit corrupti voluptates praesentium voluptatibus debitis."
        />
      </section>
    </main>
  );
}
