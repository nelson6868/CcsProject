import React, { useEffect } from "react";
import linkedin from "../../assets/linkedin.svg";

function Linkedin() {

  useEffect(() => {
    window.location.href = "https://linkedin.com/company/sidmach-technologies-nigeria-limited?trk=top_nav_home";
  }, []);

  return (
    
    <img src={linkedin} alt="" style={{ paddingRight: "10px" }} />
  );
}

export default Linkedin;