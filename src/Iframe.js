import React from "react";

function Iframe({ id }) {
  return (
    <div>
      <iframe
        title="iframe"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="fullscreen ;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
  );
}

export default Iframe;
