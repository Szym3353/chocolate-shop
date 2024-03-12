import IconButton from "../IconButton/IconButton";

interface CardI {
  name: string;
  imgSrc?: string;
  price: string;
  categories: string[];
  isFavorite: boolean;
}

export const carouselCards: CardI[] = [
  {
    name: "Example name 4",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: false,
    imgSrc: "/R.png",
  },
  {
    name: "Example name 5",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: false,
    imgSrc: "/box-of-chocolates.png",
  },
  {
    name: "Example name 6",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: true,
    imgSrc: "/R.png",
  },
  {
    name: "Example name 1",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: false,
    imgSrc: "/box-of-chocolates.png",
  },
  {
    name: "Example name 2",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: true,
    imgSrc: "/R.png",
  },
  {
    name: "Example name 3",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: true,
    imgSrc: "/box-of-chocolates.png",
  },
  {
    name: "Example name 4",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: false,
    imgSrc: "/R.png",
  },
  {
    name: "Example name 5",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: false,
    imgSrc: "/box-of-chocolates.png",
  },
  {
    name: "Example name 6",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: true,
    imgSrc: "/R.png",
  },
  {
    name: "Example name 1",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: false,
    imgSrc: "/box-of-chocolates.png",
  },
  {
    name: "Example name 2",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: true,
    imgSrc: "/R.png",
  },
  {
    name: "Example name 3",
    categories: ["Prezent", "Walentynki"],
    price: "213,00 zł",
    isFavorite: true,
    imgSrc: "/box-of-chocolates.png",
  },
];

export function HomeCard({
  name = "name",
  imgSrc = "https://th.bing.com/th/id/R.f6405585730b8215ac966afd2c81050c?rik=xri3E%2fLT57Vwag&pid=ImgRaw&r=0",
  price,
  categories,
  isFavorite,
}: CardI) {
  return (
    <div className="home-carousel-card">
      <img
        alt={`newest card - ${name}`}
        className="home-carousel-card__image"
        src={imgSrc}
      />
      <p className="home-carousel-card__name">{name}</p>
      <p className="home-carousel-card__categories">
        {categories.map((category) => category)}
      </p>
      <div className="home-carousel-card__footer">
        <IconButton
          icon="favorite"
          variant={`${isFavorite ? "full" : "outlined"}`}
        />
        <p className="home-carousel-card__price">{price}</p>
      </div>
    </div>
  );
}
