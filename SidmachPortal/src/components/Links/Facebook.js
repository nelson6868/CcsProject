import React, { useEffect } from "react";
import facebook from "../../assets/facebook.svg";


function Facebook() {

  useEffect(() => {
    window.location.href = "https://facebook.com/SidmachTechnologies";
  }, []);

  return (
    
     <img src={facebook} alt="" style={{ paddingRight: "10px" }} />
  );
}

export default Facebook;