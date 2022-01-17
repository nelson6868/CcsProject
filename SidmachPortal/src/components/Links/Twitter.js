import React, { useEffect } from "react";
import twitter from "../../assets/twitter.svg";

function Twitter() {

  useEffect(() => {
    window.location.href = "https://twitter.com/sidmach";
  }, []);

  return (
    
    <img src={twitter} alt="" style={{ paddingRight: "10px" }} />
  );
}

export default Twitter;