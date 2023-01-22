import React from "react";

import { useNavigate} from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Error 404. THe Page you are Searching does not exist</h1>
      <button
        variant="contained"
        color="danger"
        onClick={() => {
          navigate("/");
        }}
      >
        Go back HOME
      </button>
    </div>
  );
};

export default Notfound;
