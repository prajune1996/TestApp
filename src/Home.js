import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
          <h1 className="py-4 text-center">Projects</h1>
          <section class="glass">
            <div class="games">
              <div class="cards">
                <Link to="dogs" className="textDecorationNone">
                <div class="card-game">
                  <div class="card-info">
                    <h2>Dog Search Project 🐶</h2>
                  </div>
                </div>
                </Link>
                <Link to="country" className="textDecorationNone">
                <div class="card-game">
                  <div class="card-info">
                    <h2>Country Details 🌐</h2>
                  </div>
                </div>
                </Link>
                <Link to="timer" className="textDecorationNone">
                <div class="card-game">
                  <div class="card-info">
                    <h2>Task List ⏱️</h2>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </section>
          </>
    );
  }
}

export default Home;
