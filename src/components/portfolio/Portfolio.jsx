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
      <div className="logoContainer">
        <h1 className="portfolioLogo">PORTFOLIO</h1>
        <span className="line"></span>
      </div>
      <div className="portfolioItems">
        <div
          className="portfolioSlider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {portfolios.map((portfolio, index) => (
            <div
              className="portfolioSlide"
              key={portfolio.id}
              //   style={{ flexDirection: index % 2 === 1 && "row-reverse" }}
            >
              <div className="portfolioLeft">
                <h2>{portfolio.name}</h2>
                {/* <h1>{portfolio.url}</h1> */}
                <p>{portfolio.desc}</p>
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
        <div
          className="circles"
          style={{
            display: "flex",
            gap: "10px",
            textAlign: "center",
            border: "1px solid rgb(7, 35, 46)",
            width: "max-content",
            padding: "6px",
            borderRadius: "5px",
            marginLeft: "20px",
          }}
        >
          {portfolios.map((portfolio, index) => (
            <span
              onClick={() => setCurrentSlide(index)}
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: index === currentSlide ? "teal" : "gray",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 1,
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
