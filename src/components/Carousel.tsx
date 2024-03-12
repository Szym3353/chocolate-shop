import React from "react";
import "../css/carousel.css";

export default function Carousel<T>({
  data,
  Component,
  inView = 5,
}: {
  data: T[];
  Component: React.FC<any>;
  inView?: number;
}) {
  let [currentInView, setCurrentInView] = React.useState(inView);
  let [elementWidth, setElementWidth] = React.useState<number>(300);
  let [scrollBlock, setScrollBlock] = React.useState(false);
  let containerRef = React.useRef<HTMLDivElement | null>(null);

  let gap = 10;

  function updateElementWidth() {
    if (!containerRef.current) return;
    setElementWidth(
      (containerRef.current.offsetWidth - currentInView * gap) / currentInView
    );
  }

  function updateInView() {
    if (!containerRef.current) return;
    let allowedWidth = containerRef.current.offsetWidth - currentInView * gap;
    let allowedElements = Math.floor(allowedWidth / elementWidth);
    if (currentInView > 1 && allowedElements < inView) {
      setCurrentInView(allowedElements);
    }
  }

  function scroll(value: -1 | 1) {
    if (!containerRef.current || scrollBlock) return;
    containerRef.current.scrollBy({
      left: value * (elementWidth + gap),
      behavior: "smooth",
    });

    setScrollBlock(true);
    setTimeout(() => {
      setScrollBlock(false);
    }, 500);
  }

  React.useEffect(() => {
    if (!containerRef.current) return;
    updateElementWidth();
    updateInView();

    window.addEventListener("resize", () => {
      if (!containerRef.current) return;
      updateElementWidth();

      let allowedWidth = containerRef.current.offsetWidth - currentInView * gap;
      let allowedElements = Math.floor(allowedWidth / elementWidth);

      if (currentInView > 1 && allowedElements <= inView) {
        if (!containerRef.current) return;
        setElementWidth(
          (containerRef.current.offsetWidth - allowedElements * gap) /
            allowedElements
        );
        setCurrentInView(allowedElements);
      }
    });

    containerRef.current.addEventListener("scroll", () => {
      if (!containerRef.current) return;
      let currentElementView = containerRef.current.offsetWidth / currentInView;

      if (containerRef.current.scrollLeft <= 10) {
        containerRef.current.scrollLeft = containerRef.current.scrollWidth / 2;
      } else if (
        containerRef.current.scrollLeft >=
        containerRef.current.scrollWidth - containerRef.current.offsetWidth - 10
      ) {
        containerRef.current.scrollLeft =
          containerRef.current.scrollWidth / 2 -
          currentInView * currentElementView;
      }
    });
  }, []);

  React.useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollLeft = containerRef.current.scrollWidth / 2;
  }, [elementWidth]);

  React.useEffect(() => {
    if (!containerRef.current) return;
    updateElementWidth();
  }, [currentInView]);

  return (
    <div className="carousel">
      <button onClick={() => scroll(-1)}>&lt;</button>
      <div ref={containerRef} className="carousel-inner">
        {data.map((item, index) => (
          <div
            key={`carousel-element-${index}`}
            className="carousel-item"
            style={{ minWidth: elementWidth }}
          >
            <Component {...item} />
          </div>
        ))}
      </div>
      <button onClick={() => scroll(1)}>&gt;</button>
    </div>
  );
}
