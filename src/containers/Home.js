import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vinted-like-backend.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <div className="hero-block">
        <div className="card">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <Link to="/publish" className="card-button" type="button">
            Commencer à vendre
          </Link>
        </div>
      </div>
      <div className="content-center">
        <h2>Articles récemment ajoutés</h2>
        <div className="articles-list-center">
          {data.offers.map((offer) => {
            return (
              <Link to={`/offer/${offer._id}`}>
                <div key={offer._id} className="item">
                  <p className="item-details">{offer.owner.account.username}</p>
                  <img
                    className="item-picture"
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                  />
                  <p>{offer.product_price} €</p>
                  <p className="item-details">
                    {offer.product_details[0].MARQUE},{""}{" "}
                    {offer.product_details[1].TAILLE}, {""}
                    {offer.product_details[2].ÉTAT}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
