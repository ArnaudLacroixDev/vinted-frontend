import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ offer }) => {
  return (
    <Link to={`/offer/${offer._id}`}>
      <div key={offer._id} className="item">
        <p className="item-details">{offer.owner.account.username}</p>
        <img
          className="item-picture"
          src={offer.product_image.secure_url}
          alt={offer.product_name}
        />
        <p className="item-price-color">{offer.product_price} €</p>
        <p className="item-details">
          {offer.product_details[0].MARQUE},{""}{" "}
          {offer.product_details[1].TAILLE}, {""}
          {offer.product_details[2].ÉTAT}
        </p>
      </div>
    </Link>
  );
};

export default Item;
