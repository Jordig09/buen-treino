import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/firebase";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return children;
}

export default ProtectedRoute;