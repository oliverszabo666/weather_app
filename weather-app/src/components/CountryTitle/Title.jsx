import React from "react";

const Title = (props) => {
  return (
    <div className="title">
      <h1>{props.data.name}</h1>
      <h2 className="country">{props.data.sys.country}</h2>
    </div>
  );
};

export default Title;
