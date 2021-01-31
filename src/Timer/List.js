import React, { Component } from "react";
import Timer from "./Timer";
import { Link } from "react-router-dom";

export class List extends Component {
  state = {
    Task: [],
    inputValue: "",
    id: 1,
  };

  handleKeyPress = (event) => {
    const { inputValue, Task } = this.state;

    if (event.key === "Enter") {
      let ide = this.state.id++;
      this.setState({
        Task: [...Task, { id: ide, name: inputValue }],
        inputValue: "",
      });
    }
  };
  handleChange = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  render() {
    const { Task, inputValue } = this.state;
    return (
      <>
        <h1 className="py-4 text-center">
          <Link className="" to="/">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="arrow-left"
              class="svg-inline--fa fa-arrow-left fa-w-14 w-11"
              role="img"
              viewBox="0 0 448 512"
              className="backbutton"
            >
              <path
                fill="currentColor"
                d="M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z"
              ></path>
            </svg>
          </Link>
          Task List ⏱️
        </h1>
        <section class="glass">
          <div class="games m-4">
            <div class="cards">
              {Task &&
                Task.length > 0 &&
                Task.map((data) => (
                  <>
                    <div class="card-game">
                      <div class="card-info">
                        <div className="row px-3">
                          <p className="mb-0">
                            <span className="text-dark">{data.id}</span>
                            {". "}
                            {data.name}
                          </p>
                        </div>
                      </div>
                      <Timer />
                    </div>
                  </>
                ))}{" "}
              <p className="text-center mb-0">Add a task</p>{" "}
              <input
                className="search-input form-control"
                placeholder="Enter Task Name +"
                value={inputValue}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default List;
