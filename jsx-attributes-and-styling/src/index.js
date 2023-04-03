import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const img = "https://picsum.photos/200";

root.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={img + "?grayscale"} />
    <img
      className="food-img"
      src="https://i.ytimg.com/vi/Pbc56TniI78/maxresdefault.jpg"
    />
    <img
      className="food-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XSwFuwqQlKdEidNkZKDvMLUUHYZ0vgBwtA&usqp=CAU"
    />
  </div>
);
