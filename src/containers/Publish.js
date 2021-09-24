import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ userToken }) => {
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);

      const response = await axios.post(
        "https://vinted-like-backend.herokuapp.com/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.data._id) {
        history.push(`/offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return userToken ? (
    <div className="publish-page">
      <div className="content-center">
        <h2>Vends ton article</h2>
        <form className="publication-form" onSubmit={handleSubmit}>
          <div className="upload-picture">
            <input
              type="file"
              id="file"
              className="input-file"
              onChange={(event) => setPicture(event.target.files[0])}
            />
            <label for="file">
              <span className="input-sign">+</span>
              <span>Ajoute une photo</span>
            </label>
          </div>
          <div className="publish-text-input">
            <p>Titre</p>
            <input
              type="text"
              placeholder="ex: Chemise Sézane verte"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="publish-text-input">
            <p>Décris ton article</p>
            <textarea
              placeholder="ex: porté quelquefois, taille correctement"
              cols="30"
              rows="10"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>

          <div>
            <div className="publish-text-input">
              <p>Marque</p>
              <input
                type="text"
                placeholder="ex: Zara"
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div className="publish-text-input">
              <p>Taille</p>
              <input
                type="text"
                placeholder="ex: L / 40 / 12"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>
            <div className="publish-text-input">
              <p>Couleur</p>
              <input
                type="text"
                placeholder="ex: Fushia"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div className="publish-text-input">
              <p>Etat</p>
              <input
                type="text"
                placeholder="ex: Neuf avec étiquette"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div className="publish-text-input">
              <p>Lieu</p>
              <input
                type="text"
                placeholder="ex: Paris"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="publish-text-input">
            <p>Prix</p>
            <input
              type="text"
              placeholder="ex: 5"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div className="form-validation-display">
            <input
              className="form-validation-button"
              type="submit"
              value="Publier l'annonce"
            />
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Publish;
