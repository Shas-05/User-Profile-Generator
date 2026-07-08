import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    image: "",
  });

  const [profile, setProfile] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/profile",
        formData,
      );

      setProfile(res.data);

      setFormData({
        name: "",
        bio: "",
        image: "",
      });
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <h1>User Profile Card Generator</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="bio"
          placeholder="Enter your bio"
          value={formData.bio}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Enter image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <button type="submit">Generate Profile</button>
      </form>

      {profile && (
        <div className="card">
          <img src={profile.image} alt={profile.name} className="profile-img" />

          <h2>{profile.name}</h2>

          <p>{profile.bio}</p>
        </div>
      )}
    </div>
  );
}

export default App;
