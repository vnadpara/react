import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    const storeusers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storeusers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setMessage("login successful!");
    } else {
      setMessage("invalid password & email!");
    }

    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      loginForm
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default Login;
