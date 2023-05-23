import React, { useState } from "react";
import styles from "../Form/Form.module.css";
import validation from "./validation";

function Form(props) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    setErrors(validation({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(data);
  };

  return (
    <div
      style={{ display: "flex", alignSelf: "center", justifyContent: "center" }}
    >
      <form onSubmit={handleSubmit} className={styles.container}>
        <div>
          <img
            src="https://images3.alphacoders.com/606/606020.jpg"
            alt="foto"
          />
        </div>

        <div>
          <p>{errors.email && errors.email}</p>
          <label htmlFor="userName">Email: </label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="{}"
          />
        </div>

        <div>
          <p>{errors.password && errors.password}</p>
          <label htmlFor="Password">Password</label>
          <input
            type="text"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
