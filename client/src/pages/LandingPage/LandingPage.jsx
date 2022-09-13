import './LandingPage.scss';
// import image from "../../assets/landing-image.png";
import SVGComponent from '../../components/FoodySvg';
import LandingSVGComponent from '../../components/FoodyLanding';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <section className='landing-page'>
      <div className='landing-wrap'>
        <LandingSVGComponent />
        <div className='landing-text'>
          <SVGComponent />
          <p class='landing-p'>Decrease the amount of wasted food Help the planet now</p>
        </div>
      </div>
      <Link to='/register'>Get started</Link>
    </section>
  );
};
