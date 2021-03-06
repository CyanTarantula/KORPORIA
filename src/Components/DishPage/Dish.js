import "./Dish.css"
import React from "react";

const Popup = props => {
  // const modal = document.querySelector("#popup-box")

  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     props.handleClose
  //   }
  // }

  return (
    <div id="popup-box" onclick={props.handleClose}>
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>X</span>
        {/* {props.content} */}

        <div className="Dish-and-img">
          <p className="DishName">{props.dishName}</p>
          <img style={{
              content: `url(${props.dishImg})`
          }} />
        </div>

        <div className="Description">
          <p>Description:</p>
          <p>
            {props.description}
          </p>
        </div>

        <div className="Ingredients-and-nutritions">
          <div className="Ingredients">
            <p>Ingredients:</p>
            <p>
              {props.dishIngredients}
            </p>
          </div>

          <div className="Nutritions">
            <p>Nutritional Value:</p>
            <p>
              {props.dishNutritions}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
 
export default Popup;
