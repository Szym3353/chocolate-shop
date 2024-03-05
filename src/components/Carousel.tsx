import React from "react";
import "../css/carousel.css";

export default function Carousel<T>({
  data,
  Component,
  inView = 4,
}: {
  data: T[];
  Component: React.FC<any>;
  inView?: number;
}) {
  let [currentInView, setCurrentInView] = React.useState(inView);
  let [elementWidth, setElementWidth] = React.useState<number>(300);
  let containerRef = React.useRef<HTMLDivElement | null>(null);
  let padding = 20;
  let margin = 20;
  let totalGap = (currentInView - 1) * 20;

  React.useEffect(() => {
    if (!containerRef.current) return;

    setElementWidth(
      (containerRef.current.offsetWidth - padding - totalGap) / currentInView
    );

    containerRef.current.addEventListener("scroll", () => {
      if (!containerRef.current) return;

      if (containerRef.current.scrollLeft <= 0) {
        containerRef.current.scrollLeft = containerRef.current.scrollWidth / 2;
      } else if (
        containerRef.current.scrollLeft >=
        containerRef.current.scrollWidth - containerRef.current.offsetWidth - 10
      ) {
        containerRef.current.scrollLeft =
          containerRef.current.scrollWidth / 2 -
          4 * (elementWidth + padding + margin);
      }
    });
  }, []);

  React.useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollLeft = containerRef.current.scrollWidth / 2;
  }, [elementWidth]);

  function scrollLeft() {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: -(elementWidth + padding),
      behavior: "smooth",
    });
  }

  function scrollRight() {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: elementWidth + padding,
      behavior: "smooth",
    });
  }

  return (
    <div className="carousel">
      <button onClick={scrollLeft}>Prev</button>
      <div ref={containerRef} className="carousel-inner">
        {data.map((item, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ minWidth: elementWidth }}
          >
            <Component {...item} />
          </div>
        ))}
      </div>
      <button onClick={scrollRight}>Next</button>
    </div>
  );
}
