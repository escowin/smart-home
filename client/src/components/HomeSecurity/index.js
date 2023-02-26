import React from "react";

const HomeSecurity = () => {
  return (
    <main className="section">
      <h2 className="card-title">Home Security</h2>
      <article className="card-container">
        <div className="card-approved-list" style={{ width: "18rem" }}>
          <img
            className="img"
            src="https://img.freepik.com/free-vector/isometric-smart-home-technology-interface-smartphone-app-screen-with-augmented-reality-ar-view_122058-956.jpg?w=740"
            alt="Home Security"
            width={300}
          ></img>
          <p>
            Who wants to run more wires through your home?
            <br /> <br />
            If your answer was, "Oh please no", then you are at the right place!
            Here at Smart Home Enterprises we offer a variety of smart home
            security systems to meet any need you may have to protect you and
            your loved ones!
            <br /> <br />
            To set up a consulation today reach out to our team at
            1-800-SMART-HOME.
          </p>
        </div>
      </article>
    </main>
  );
};

export default HomeSecurity;
