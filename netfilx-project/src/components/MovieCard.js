import React from "react";

const MovieCard = ({ item }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "URL(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}` +
          ")",
      }}
    >
      MovieCard
    </div>
  );
};

export default MovieCard;
