import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

class Dog extends Component {
  state = {
    searchTerm: "",
    dogs: [],
    dogImages: [],
    urls: [],
    isLoader: false,
  };
  // Search and API hit
  search = (value) => {
    this.setState({
      searchTerm: value,
      dogs: [],
      dogImages: [],
      urls: [],
    });
    // length check
    if (value.length > 3) {
      this.setState({
        isLoader: true,
      });
      // api for search names
      axios
        .get(`https://api.thedogapi.com/v1/breeds/search?q=${value}`)
        .then((res) => {
          const dogs = res.data;
          if (res.data.length > 0) {
            this.setState({ dogs });

            // filter dogs where no image was available
            let finalResults = dogs.filter(function (item) {
              return item.reference_image_id !== undefined;
            });
            // sliced 6 dog images
            this.setState({ dogImages: finalResults.slice(0, 6) });
            const { dogImages } = this.state;
            // hitting every dog's image api
            for (var i = 0; i < dogImages.length; i++) {
              let key = dogImages[i].reference_image_id;
              axios
                .get(`https://api.thedogapi.com/v1/images/${key}`)
                .then((res) => {
                  let data = res.data.url;
                  if (dogImages.length > 1) {
                    const { searchTerm } = this.state;
                    if (searchTerm === value) {
                      this.setState({
                        urls: [...this.state.urls, data],
                        isLoader: false,
                      });
                    }
                  } else {
                    this.setState({
                      urls: [data],
                      isLoader: false,
                    });
                  }
                });
            }
          } else {
            this.setState({ isLoader: false });
          }
        });
    } else {
      this.setState({
        dogs: [],
        dogImages: [],
        urls: [],
        isLoader: false,
      });
    }
  };

  render() {
    const { urls, isLoader } = this.state;
    return (
      <>
        <h1 className="py-4 text-center">
          {" "}
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
          Search Dogs 🐶
        </h1>
        <section class="glass">
          <div class="games m-4">
            <div class="cards">
              {" "}
              <p className="text-center mb-0">
                Please enter more than 3 characters
              </p>
              <input
                onChange={(event) => this.search(event.target.value)}
                className="search-input form-control"
                placeholder="Search a breed..."
              />
            </div>
          </div>
        </section>
        <div className="row px-4">
          {!isLoader &&
            urls.length > 0 &&
            urls.map((data, index) => (
              <div
                className="col-12 col-md-3 px-2 py-2 text-center"
                key={index}
              >
                <img className="img-fluid img-animal" src={data} />
              </div>
            ))}
          {urls.length === 0 && (
            <div className="col-12 py-5">
              <p className="text-center text-danger">No dogs found</p>
            </div>
          )}
          {isLoader && (
            <div className="col-12 py-5">
              <p className="text-center text-danger">Loading</p>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Dog;
