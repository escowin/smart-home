import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./index.css";

const Popular = () => {
  const popular = [
    {
      name: "wifi optimization",
      img: "wifi.jpeg",
    },
    {
      name: "Smart home lighting",
      img: "lights.webp",
    },
    {
      name: "Smart phone repair",
      img: "phone.jpeg",
    },
    {
      name: "Home theater",
      img: "tv.jpeg",
    },
    {
      name: "Smart garage",
      img: "gd.jpeg",
    },
    {
      name: "Home security",
      img: "cctv.jpeg",
    },
  ];

  return (
    <>
      <h2 className="title">Trending services</h2>

      <section className="trending">
        {popular.map((installation, i) => (
          <article key={i} className="trending-item">
            <Link to="/CreateProject" className="link">{installation.name}</Link>
            <img
              src={require(`../../assets/images/${installation.img}`)}
              alt={installation.name}
              className="trending-img"
            />
          </article>
        ))}
      </section>
    </>
  );
};
export default Popular;
