import React from "react";

const StarRating = ({rating, handelRating}) => {
  // console.log(rating)
  let stars = (rating) => {
    let tab = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        tab.push(
          <span
            onClick={()=>handelRating(i)}
            style={{ color: "gold", fontSize: "30px", cursor:"pointer" }}
          >
            ★
          </span>
        );
      } else {
        tab.push(
          <span
          onClick={()=>handelRating(i)}
            style={{ color: "black", fontSize: "30px" ,cursor:"pointer"}}
          >
            {" "}
            ★
          </span>
        );
      }
    }
    return tab;
  };

  return <div>{stars(rating)}</div>;
};
StarRating.defaultProps = { handelRating:()=>{} };
export default StarRating;
