function KeyDataCard({ data, dataName }) {
  const cardInfos = [
    {
      name: "Calories",
      cssClass: "calories-card",
      imgPath: "/img/calories.svg",
      unit: "kCal",
    },
    {
      name: "Proteines",
      cssClass: "proteins-card",
      imgPath: "/img/proteins.svg",
      unit: "g",
    },
    {
      name: "Glucides",
      cssClass: "carbohydrates-card",
      imgPath: "/img/carbohydrates.svg",
      unit: "g",
    },
    {
      name: "Lipides",
      cssClass: "lipids-card",
      imgPath: "/img/lipids.svg",
      unit: "g",
    },
  ];

  function selectData(dataName) {
    for (let card of cardInfos) {
      if (card.name === dataName) {
        return card;
      }
    }
    return null;
  }

  const card = selectData(dataName);

  return (
    <div className={"chart-container keydata-card-container " + card.cssClass}>
      <div className="img-container">
        <img src={card.imgPath} alt="" />
      </div>
      <div className="txt-container">
        <p>
          {dataName === "Calories" ? data / 1000 : data}
          {card.unit}
        </p>
        <h2>{dataName}</h2>
      </div>
    </div>
  );
}

export default KeyDataCard;
