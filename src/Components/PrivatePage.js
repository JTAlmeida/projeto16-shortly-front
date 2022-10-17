import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Home from "./Home/Home";

const SEC = 1000;
const MIN = 60 * SEC;
const HOUR = 60 * MIN;

export default function PrivatePage({ children }) {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const auth = JSON.parse(localStorage.getItem("shortly"));

  function renderError() {
    localStorage.clear("shortly");
    setUser("");
    navigate("/");
  }

  const timeNow = +new Date();

  if (!auth || !auth.token) {
    return renderError();
  } else {
    const timeLogged = auth.timestamp;

    if (timeNow - timeLogged >= 24 * HOUR) {
      return renderError();
    } else {
      return <>{children}</>;
    }
  }
}
