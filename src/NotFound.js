import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <>
        <h1 className="py-4 text-center">Error 404 🥺</h1>
        <section class="glass">
          <div class="games">
            <div class="cards">
              <div class="card-info">
                <h2 className="text-danger text-center">We are lost!....</h2>
                <Link to="/" className="home-route">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="arrow-left"
                    class="svg-inline--fa fa-arrow-left fa-w-14 mr-2"
                    role="img"
                    viewBox="0 0 448 512"
                    style={{width:"10px"}}
                  >
                    <path
                      fill="currentColor"
                      d="M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z"
                    ></path>
                  </svg>
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default NotFound;
