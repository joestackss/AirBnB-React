import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div id="cardColumn">
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`../images/${props.img}`} className="card--image" />
        {/* <img
          src="public\images\wedding-photography.png"
          className="card--image"
        /> */}
        <div className="card--stats">
          {/* <img src="../images/star.png" className="card--star" /> */}
          <img src="public\images\star.png" className="card--star" />
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price">
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>

    // TO KEEP OUR CODE DRYER, WE CAN USE THE PROPS METHOD BELOW

    // return (
    //     <div className="card">
    //         {badgeText && <div className="card--badge">{badgeText}</div>}
    //         <img src={`../images/${props.item.coverImg}`} className="card--image" />
    //         <div className="card--stats">
    //             <img src="../images/star.png" className="card--star" />
    //             <span>{props.item.stats.rating}</span>
    //             <span className="gray">({props.item.stats.reviewCount}) • </span>
    //             <span className="gray">{props.item.location}</span>
    //         </div>
    //         <p className="card--title">{props.item.title}</p>
    //         <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
    //     </div>)
  );
}
