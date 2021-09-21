import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/offer/${id}`);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div className="offer-body">
      <div className="content-center offer-content">
        <img src={data.product_image.secure_url} alt={data.product_name} />
        <div className="offer-infos">
          <p className="offer-price">{data.product_price} €</p>
          <ul>
            {data.product_details.map((elem, index) => {
              const keys = Object.keys(elem);
              return (
                <div>
                  <li key={index} className="offer-details">
                    <span>{keys[0]}</span>
                    <span>{elem[keys[0]]}</span>
                  </li>
                </div>
              );
            })}
            <Link
              to={{ pathname: "/payment", state: { data: data } }}
              className="buy-or-sell-button"
            >
              Acheter
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offer;
