import React from "react";
import "../css/carousel.css";

export default function Carousel<T>({
  data,
  Component,
}: {
  data: T[];
  Component: React.FC<any>;
}) {
  let containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollLeft = containerRef.current.scrollWidth / 2;

    containerRef.current.addEventListener("scroll", () => {
      if (!containerRef.current) return;
      if (containerRef.current.scrollLeft <= 0) {
        containerRef.current.scrollLeft = containerRef.current.scrollWidth / 2;
      } else if (
        containerRef.current.scrollLeft >=
        containerRef.current.scrollWidth - containerRef.current.offsetWidth - 10
      ) {
        containerRef.current.scrollLeft = 272.5;
      }
    });
  }, []);

  function scrollLeft() {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: -272.5, behavior: "smooth" });
  }

  function scrollRight() {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: 272.5, behavior: "smooth" });
  }

  return (
    <div className="carousel">
      <button onClick={scrollLeft}>Prev</button>
      <div ref={containerRef} className="carousel-inner">
        {data.map((item, index) => (
          <div key={index} className="carousel-item">
            <Component {...item} />
          </div>
        ))}
      </div>
      <button onClick={scrollRight}>Next</button>
    </div>
  );
}
