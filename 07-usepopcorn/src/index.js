import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating onSetRating={setMovieRating} />
      <p>This movie has been rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating />
    <StarRating maxRating={5} color="blue" size="24" />
    <StarRating
      maxRating={3}
      color="blue"
      size={24}
      messages={["Bad", "Okay", "Good"]}
    />
    <Test />
  </React.StrictMode>
);
