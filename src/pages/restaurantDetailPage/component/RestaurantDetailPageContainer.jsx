import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";

import "./RestaurantDetailPageContainer.css";
import { AiFillBackward } from "react-icons/ai";
import { useRestaurant } from "../../../context/RestaurantContext";
import { Rating } from "../../../common/rating/Rating";

export const RestaurantDetailPageContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useRestaurant();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const getRestaurantObject = state?.restaurantsData?.find(
    (item) => item.id === Number(id)
  );

  return (
    <>
      <AiFillBackward
        size={32}
        className="backarrow"
        onClick={() => navigate("/")}
      />
      <div className="detailpage">
        <h1 className="heading">{getRestaurantObject?.name}</h1>
        <div className="details_plus_button">
          <div className="restaurant_main_details">
            <span>
              {getRestaurantObject?.menu?.map((item) => (
                <span key={item.name}>
                  {item.name}
                  {", "}
                </span>
              ))}
            </span>
            <span>{getRestaurantObject?.address}</span>
            <span>AverageRating:{getRestaurantObject?.averageRating}</span>
            <hr />
          </div>

          <div>
            <button onClick={openModal} className="review_btn">
              Review
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              className="modal"
            >
              <h2>Add Your Review</h2>
              <hr />
              <div className="review">
                <div>
                  <label htmlFor=""> Rating:</label>
                  <select name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Comments</label>
                  <textarea name="" id="" cols="10" rows="3"></textarea>
                </div>
                <button onClick={closeModal}>Close Modal</button>
              </div>
            </Modal>
          </div>
        </div>

        <hr />
        <h3>Review</h3>
        {getRestaurantObject?.ratings?.map((item) => (
          <Rating item={item} key={item?.revName + item?.comment} />
        ))}
      </div>
    </>
  );
};
