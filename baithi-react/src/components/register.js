import React, { useState, useEffect } from "react";
import { useForm } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    
    setFormData({
      name: "",
      phone: "",
      email: "",
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    const errors = {};
    if (!formData.name) {
      errors.name = "Tên không được bỏ trống";
    }
    if (!formData.phone) {
      errors.phone = "Số điện thoại không được bỏ trống";
    }
    if (!formData.email) {
      errors.email = "Email không được bỏ trống";
    }

    if (Object.keys(errors).length > 0) {
      return;
    }

    // Submit form data
    alert("Đăng ký thành công!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Tên"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Số điện thoại"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default Form;