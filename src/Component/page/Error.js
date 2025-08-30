import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log("Router Error:", error);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Oops! Something went wrong 🚨</h1>
 
      <h2>{error.status || "Unknown Error"}</h2>
   
      <p>{error.statusText || error.message || "Unexpected error occurred."}</p>
    </div>
  );
}

export default Error;
