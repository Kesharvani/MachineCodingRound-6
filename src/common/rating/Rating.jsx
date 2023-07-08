import "./Rating.css";
import { FcRating } from "react-icons/fc";
export const Rating = ({ item }) => {
  return (
    <div className="container">
      <div className="image-row">
        <div className="image_row_name">
          <img className="image" src={item?.pp} alt="ImageIcons" />
          <h2>{item?.revName}</h2>
        </div>
        <div className="rating_icon">
          <p>{item?.rating}</p>
          <FcRating size={18} />
        </div>
      </div>

      <div className="image-info">
        <p>{item?.comment}</p>
      </div>
      <hr className="hr_line" />
    </div>
  );
};
