import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/offers");

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
              <Link to={`/offers/${offer._id}`}>
                <div key={offer._id} className="item">
                  <img
                    className="item-picture"
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                  />
                  <p>{offer.product_price} €</p>
                  <p>{offer.product_details[0].TAILLE}</p>
                  <p>{offer.product_details[0].MARQUE}</p>
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
