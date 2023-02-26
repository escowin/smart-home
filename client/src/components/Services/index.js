import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Services = () => {
  const services = [
    {
      name: "Energy management",
      link: "EnergyManagement",
      image:
        "https://img.freepik.com/free-photo/digital-tablet-screen-with-smart-home-controller-wooden-table_53876-96317.jpg?t=st=1650333133~exp=1650333733~hmac=e3f7a4c08e987d974e39d55a48e821a7f247b49d7e8c401415456988799e2d29&w=740",
    },
    {
      name: "Home security",
      link: "HomeSecurity",
      image:
        "https://img.freepik.com/free-vector/isometric-smart-home-technology-interface-smartphone-app-screen-with-augmented-reality-ar-view_122058-956.jpg?w=740",
    },
    {
      name: "Connectivity",
      link: "Connectivity",
      image:
        "https://img.freepik.com/free-vector/internet-things-concept_1284-10812.jpg?t=st=1650336184~exp=1650336784~hmac=88d5fe240c8d0e8dde4a30c8863818e7c1cae29c2ba8b25813c2bea60fff4fc3&w=996",
    },
    {
      name: "Lifestyle",
      link: "HomeSecurity",
      image:
        "https://img.freepik.com/free-vector/isometric-smart-home-technology-interface-smartphone-app-screen-with-augmented-reality-ar-view_122058-956.jpg?w=740",
    },
  ];

  return (
    <>
      <section className="services">
        {services.map((service, i) => (
          <article className="service" key={i}>
            <Link to={`/${service.link}`}>{service.name}</Link>
            <img
              src={service.image}
              alt={service.name}
              className="service-img"
            />
          </article>
        ))}
      </section>
    </>
  );
};
export default Services;
