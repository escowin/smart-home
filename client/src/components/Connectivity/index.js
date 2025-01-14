import React from "react";

const Connectivity = () => {
  return (
    <main className="section">
      <h2 className="card-title">Connectivity</h2>

      <article className="card-container">
        <div className="card-approved-list" style={{ width: "18rem" }}>
          <img
            className="img"
            src="https://img.freepik.com/free-vector/internet-things-concept_1284-10812.jpg?t=st=1650336184~exp=1650336784~hmac=88d5fe240c8d0e8dde4a30c8863818e7c1cae29c2ba8b25813c2bea60fff4fc3&w=996"
            alt="Smartphone smart apps"
            width={300}
            height={235}
          ></img>
          <p>
            Welcome to our LifeStyle Support page!
            <br />
            <br />
            On this page you will learn about the various smart home
            technologies that we can build into your day to day life to make
            your life to make it run a little bit smoother!
            <br />
            <br />
            Examples of popular smart home services that we offer here include
            Phillips Light Systems, Smart Thermostats, Sonos Wireless Speaker
            Systems, and countless others!
            <br />
            <br />
            Our LifeStyle Support team stays up to date with the latest and
            greatest technologies!
            <br />
            <br />
            Reach out to our customer services team to schedule your
            consultation today at 1-800-SMART-HOME.
          </p>
        </div>
      </article>
    </main>
  );
};

export default Connectivity;
