import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./index.css";

function Nav(params) {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };
  return (
    <header className="section">
      <h1>
        <a data-testid="link" href="/">
          Smart home
        </a>
      </h1>
      <nav>
        <ul className="nav-links">
          {Auth.LoggedIn() ? (
            <>
              {Auth.customerLoggedIn() ? (
                <>
                  <li className="mx-2">
                    <Link to="/CreateProject">Create Project</Link>
                  </li>
                  <li className="mx-2">
                    <Link to="/YourProject">Your Project</Link>
                  </li>
                  <li className="mx-2">
                    <Link to="/Account">Account</Link>
                  </li>
                  <li className="mx-2">
                    <Link to="/ContactUs">Contact Us</Link>
                  </li>

                  <li className="mx-2">
                    <a data-testid="log Out" href="/" onClick={logout}>
                      Log Out
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="mx-2">
                    <Link to="/Job"> Job Board</Link>
                  </li>
                  <li className="mx-2">
                    <Link to="/ApprovedJob">Missions</Link>
                  </li>
                  <li className="mx-2">
                    <Link to="/Account">Account</Link>
                  </li>
                  <li className="mx-2">
                    <Link to="/ContactUs">Contact Us</Link>
                  </li>
                  <li className="mx-2">
                    <a data-testid="log Out" href="/" onClick={logout}>
                      Log Out
                    </a>
                  </li>
                </>
              )}
            </>
          ) : (
            <>
              <li className="mx-2">
                <Link to="login">+ project</Link>
              </li>
              <li className="mx-2">
                <a data-testid="join" href="/Smarter">
                  join smart network
                </a>
              </li>
              <li className="mx-2">
                <a data-testid="login" href="/login">
                  login
                </a>
              </li>

              <li className="mx-2">
                <a data-testid="join" href="/signup">
                  sign up
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
