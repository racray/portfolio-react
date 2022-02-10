import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import { webPortfolio, designPortfolio, contentPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },

    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;

      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, id) => (
          <PortfolioList
            key={id}
            title={item.title}
            active={selected === item.id} // this checks if selected is true or false
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, id) => (
            <a href={d.web} target="_blank" rel="noreferrer">
            <div className="item" key={id}>
            <img src={d.img} alt="" />
            
            
            <h3>{d.title}</h3>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}
