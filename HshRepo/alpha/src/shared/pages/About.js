import React from "react";
import queryString from "query-string";

const About = ({ location }) => {
  const query = queryString.parse(location.search);
  console.log(query);
  // query를 사용할 수 있는 방법
  const test = query.test === "true";
  return (
    <div>
      <h2>About</h2>
      {test && "test: true!@!"}
    </div>
  );
};

export default About;
