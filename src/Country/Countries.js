import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
import { Link } from "react-router-dom";

const customStyles = {
  container: (provided) => ({
    ...provided,
    display: "inline-block",
    width: "100%",
    minHeight: "1px",
    textAlign: "left",
    border: "none",
    fontSize: "12px",
  }),
  control: (provided) => ({
    ...provided,
    border: "1px solid #02b3e4",
    borderRadius: "10px",
  }),
  input: (provided) => ({
    ...provided,
    minHeight: "1px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    minHeight: "1px",
    paddingTop: "0",
    paddingBottom: "0",
    color: "#02b3e4",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    minHeight: "1px",
    height: "24px",
    background: "#fff",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    minHeight: "1px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    //   minHeight: '1px',
    //   height: '40px',
    paddingTop: "0",
    paddingBottom: "0",
  }),
  singleValue: (provided) => ({
    ...provided,
    minHeight: "1px",
    paddingBottom: "2px",
  }),
};

const formattedArray = (array) => {
  return array.map((item) => {
    return {
      label: item.name,
      value: item.name,
    };
  });
};

class Countries extends Component {
  state = {
    countries: [],
    inputSearchLocation: "",
    countryData: null,
    currency: "",
    currencyData: [],
    weather: [],
  };

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
      this.setState({ countries: res.data });
    });
  }

  handleInputSearchLocation = (value) => {
    if (value) {
      this.setState({
        inputSearchLocation: value,
      });
      axios
        .get(`https://restcountries.eu/rest/v2/name/${value}?fullText=true`)
        .then((res) => {
          this.setState({
            countryData: res.data[0],
            currency: res.data[0].currencies,
          });
        });
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=ffc6ab56debe0eebbd247da7fc3a9662`
        )
        .then((res) => {
          this.setState({ weather: res.data });
        });
    }
  };

  dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  render() {
    const { countries, countryData, weather } = this.state;
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
          Country Details 🌐
        </h1>
        <section class="glass">
          <div class="games m-4">
            <div class="cards">
              {" "}
              <p className="text-center mb-0">Choose a country</p>{" "}
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="color"
                onChange={(e) => this.handleInputSearchLocation(e.value)}
                options={formattedArray(countries)}
                styles={customStyles}
              />
              {countryData !== null ? (
                <div class="card-game">
                  <div class="card-info">
                    <h2>
                      {countryData.name}
                      {", "}
                      {countryData.capital}
                    </h2>
                    <b className="mb-0">{this.dateBuilder(new Date())}</b>
                    Currency:
                    {countryData &&
                      countryData.currencies &&
                      countryData.currencies.length > 0 &&
                      countryData.currencies.map((data) => (
                        <p className="d-flex">{data.code} </p>
                      ))}
                    Temperature:
                    {weather && weather.main && (
                      <div>{weather.main.temp}°c</div>
                    )}
                    {weather &&
                      weather.weather &&
                      weather.weather.length > 0 &&
                      weather.weather.map((data) => (
                        <p className="text-capitalize">{data.description}</p>
                      ))}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Countries;
