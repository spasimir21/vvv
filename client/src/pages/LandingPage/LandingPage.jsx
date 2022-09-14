import { FoodyLandingSVG } from '../../assets/svg_react/FoodyLandingSVG';
import { LandingSVG } from '../../assets/svg_react/LandingSVG';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

function LandingPage() {
  return (
    <section className='landing-page'>
      <div className='landing-wrap'>
        <LandingSVG />
        <div className='landing-text'>
          <FoodyLandingSVG />
          <p className='landing-p'>Decrease the amount of wasted food Help the planet now</p>
        </div>
      </div>
      <Link to='/register'>Get started</Link>
    </section>
  );
}

export { LandingPage };
