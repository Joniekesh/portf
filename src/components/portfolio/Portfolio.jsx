import "./portfolio.scss";
import { portfolios } from "../../dummyData/portfolio";
import { useState } from "react";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : portfolios.length - 1
        )
      : setCurrentSlide(
          currentSlide < portfolios.length - 1 ? currentSlide + 1 : 0
        );
  };

  const handleNavigate = (url) => {
    window.location.href = url;
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolioContainer">
        <h1>PORTFOLIO</h1>
        <div
          className="portfolioSlider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {portfolios.map((portfolio, index) => (
            <div
              className="portfolioSlide"
              key={index}
              //   style={{ flexDirection: index % 2 === 1 && "row-reverse" }}
            >
              <div className="portfolioLeft">
                <h2>{portfolio.name}</h2>
                {/* <h1>{portfolio.url}</h1> */}
                <p>{portfolio.desc.slice(0, 200)}...</p>
              </div>
              <div className="portfolioRight">
                <img src={portfolio.img} alt="" />
                <span onClick={() => handleNavigate(portfolio.url)}>
                  Click to view site
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="navButtons">
          <button onClick={() => handleClick("left")}>
            <i className="fa-solid fa-arrow-left arrow left"></i>
          </button>
          <button onClick={() => handleClick()}>
            <i className="fa-solid fa-arrow-right arrow right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
