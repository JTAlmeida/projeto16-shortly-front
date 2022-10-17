import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return <>Signup</>;
}
