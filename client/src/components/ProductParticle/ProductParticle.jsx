import image from '../../assets/orange-1.png'
import './ProductParticle.scss';

export const ProductParticle = () => {
    return(
    <section className="product">
        <img src={image} className="image" />
        <div className="text">
            <p className="name">
                Orange
            </p>
            <p className="expires">
                Expires in
            </p>
        </div>
        <p className="days">
                3 days
        </p>
    </section>
    )
}