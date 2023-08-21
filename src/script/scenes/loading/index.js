import { useNavigate } from "react-router-dom";

import { auth } from "../../../api/firebase";
import { useEffect } from "react";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    function onAuthStateChanged(user) {
      setTimeout(() => {
        if (!user) {
          navigate("login");
        }
      }, 1000);
    }

    const sub = auth.onAuthStateChanged(onAuthStateChanged);
    return sub;
  }, [navigate]);

  return <div>Loading</div>;
}

export default Loading;
