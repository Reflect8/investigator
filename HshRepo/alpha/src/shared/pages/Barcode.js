import React from "react";

const Barcode = ({ match }) => {
  return (
    <div>
      <h2>Barcode {match.params.name}</h2>
    </div>
  );
};

export default Barcode;
