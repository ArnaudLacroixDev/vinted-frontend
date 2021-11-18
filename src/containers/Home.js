import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Item from "../components/Item";
import Loader from "../components/Loader";

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
    <Loader />
  ) : (
    <main>
      <div className="home-hero-block">
        <div className="home-card">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <Link to="/publish" className="home-card-button" type="button">
            Commencer à vendre
          </Link>
        </div>
      </div>
      <div className="content-center">
        <h2>Articles récemment ajoutés</h2>
        <div className="home-articles-list-center">
          {data.offers.map((offer) => {
            return <Item offer={offer} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
