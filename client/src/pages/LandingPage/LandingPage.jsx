import "./LandingPage.scss";
import image from "../../assets/landing-image.png";
import SVGComponent from "../../components/FoodySvg";
import LandingSVGComponent from "../../components/FoodyLanding";

export const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="landing-wrap">
        <div className="image">
          <LandingSVGComponent />
        </div>
        <div className="landing-text">
          <SVGComponent />
          <div className="landing-p-container">
            <p>Decrease the amount of wasted food Help the planet now</p>
          </div>
        </div>
      </div>
      <a href="/">
        Get Started
      </a>
    </section>
  );
};
