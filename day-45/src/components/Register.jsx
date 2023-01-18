import { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";
export default function Register() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  if (formSubmitted) {
    return <Navigate to={"/login"} />;
  }
  const handleSubmit = function (event) {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="form-container">
      <Header />
      <h1>Register Form</h1>
      <form action="onSubmit" className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <br />
        <label htmlFor="username">Username:</label>
        <input type="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />
        <br />
        <label htmlFor="phone">Phone number:</label>
        <input type="number" name="phone" />
        <br />
        <button>Sign In</button>
      </form>
    </div>
  );
}
