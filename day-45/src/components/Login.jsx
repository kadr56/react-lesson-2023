import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loginName: "mb",
    password: "123",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      toast.success("user is permitted");
      navigate("/", { replace: true, state: { bookName: "Fake title" } });
    } else {
      toast.error("user is not permitted");
      navigate("/register", {
        replace: true,
        state: { bookName: "Fake title" },
      });
    }
  };

  return (
    <div className="form-container">
      <Header />
      <form onSubmit={onSubmit} className="login-form">
        <label htmlFor="username"> Login Name:</label>
        <input name="username" type="text" />
        <br />
        <label htmlFor="password"> Password:</label>
        <input type="password" name="password" /> <br />
        <button>Sign In</button>
      </form>
      <ToastContainer />
    </div>
  );
}
