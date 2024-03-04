import "../css/carousel.css";
import React from "react";

export default function Carousel<T>({
  Component,
  data,
  key,
  inView,
  cardWidth,
}: {
  Component: React.FC<any>;
  data: T[];
  key: string;
  inView: number;
  cardWidth: number;
}) {
  let [currentInView, setCurrentInView] = React.useState(inView);
  let [dataArray, setDataArray] = React.useState(data);
  let horizontalPadding = 50 + 65;
  let totalGap = (currentInView - 1) * 30;
  const widthCalc = `calc((100vw - ${horizontalPadding}px - ${totalGap}px) / ${currentInView})`;

  React.useEffect(() => {
    function checkInView() {
      let allowedWidth = window.innerWidth - horizontalPadding - totalGap;
      let floor = Math.floor(allowedWidth / cardWidth);
      if (currentInView > 1 && floor < inView) {
        setCurrentInView(floor);
      }
    }
    checkInView();
    window.addEventListener("resize", () => {
      checkInView();
    });
  }, [currentInView]);

  function handleClick(direction: number) {
    let newData = data;
    if (direction === 1) {
      let cutElement = newData.splice(0, 1);
      newData.push(...cutElement);
    } else {
      let cutElement = newData.splice(newData.length - 2, 1);
      newData.unshift(...cutElement);
    }

    setDataArray([...newData]);
  }

  return (
    <div className="carousel">
      <button className="carousel__button" onClick={() => handleClick(-1)}>
        &lt;
      </button>
      {dataArray.map((cardData, index) => (
        <div className="carousel__element" style={{ width: widthCalc }}>
          <Component {...cardData} id={`${key}-${index}`} />
        </div>
      ))}
      <button className="carousel__button" onClick={() => handleClick(1)}>
        &gt;
      </button>
    </div>
  );
}
