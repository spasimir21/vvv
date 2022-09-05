import './HomePage.scss';
import image from  '../../assets/landing-image.png';

export const HomePage = () => {
    return (
        <section className="home-page">
            <img src={image} className="image">

            </img>
            <h1>Welcome to App Name</h1>
            <button>Get started</button>
        </section>
    )
}