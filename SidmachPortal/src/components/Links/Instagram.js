import React, { useEffect } from "react";
import instagram from "../../assets/instagram.svg";

function Instagram() {

  useEffect(() => {
    window.location.href = "https://instagram.com/officialsidmach/";
  }, []);

  return (
    
    <img src={instagram} alt="" style={{ paddingRight: "10px" }} />
  );
}

export default Instagram;