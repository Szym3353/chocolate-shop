import "../css/home.css";

interface CardI {
  name: string;
  imgSrc?: string;
  price: string;
  categories: string[];
}

export function SingleCard({
  name = "name",
  imgSrc = "https://th.bing.com/th/id/R.f6405585730b8215ac966afd2c81050c?rik=xri3E%2fLT57Vwag&pid=ImgRaw&r=0",
  price,
  categories,
}: CardI) {
  return (
    <div className="carousel-card">
      <img className="carousel-card__image" src={imgSrc} />
      <p className="carousel-card__name">{name}</p>
      <p className="carousel-card__categories">
        {categories.map((category) => category)}
      </p>
      <p className="carousel-card__price">{price}</p>
    </div>
  );
}

export default function Home() {
  let carouselCards: CardI[] = [
    {
      name: "Example name 1",
      categories: ["Prezent", "Walentynki"],
      price: "213,00 zł",
    },
    {
      name: "Example name 2",
      categories: ["Prezent", "Walentynki"],
      price: "213,00 zł",
    },
    {
      name: "Example name 3",
      categories: ["Prezent", "Walentynki"],
      price: "213,00 zł",
    },
    {
      name: "Example name 4",
      categories: ["Prezent", "Walentynki"],
      price: "213,00 zł",
    },
    {
      name: "Example name 5",
      categories: ["Prezent", "Walentynki"],
      price: "213,00 zł",
    },
    {
      name: "Example name 6",
      categories: ["Prezent", "Walentynki"],
      price: "213,00 zł",
    },
  ];
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
        <div className="carousel">
          {carouselCards.map((card) => (
            <SingleCard {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}
