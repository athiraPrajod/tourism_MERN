import React, { Component } from "react";
import "./HomePageStyles.css";
//import airport from "./airport.png";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import { Link } from "react-router-dom";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      tours: []
    };
  }

  async componentDidMount() {
    return fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          tours: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
    
      <div className="container">
        <br></br>
        <div className={"justify-content-center mt-5 mb-5"}>
          <h1 className="rr">
            {/* <img src={airport}></img> */}
            &nbsp;WELCOME!
          </h1>
        </div>
        <br></br>
        <div className="container-text-left">
          <h2>Amazing adventures await
            <br></br>
            Choose a country to get started :)
          </h2>
        </div>

        <br></br>

        {/* <div className="container text-center">
          <img src={image1}></img>
        </div> */}
        <br></br>
        <div className="container-text-left">
          
          <div class="row">
          {this.state.tours.map((value, key) => (
            <div className="card" key={key}>
              <img
                // src="https://i.pinimg.com/originals/54/2c/7e/542c7e0c990d70f3e732b8a9cf64815f.png"
                src = {value.image}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{value.country_name}</h5>
                <p className="card-text justify">{value.desc}</p>
                <br />
              </div>
            </div>
          ))}
              
        </div>
          <br></br>
          <p>
            End of cards
          </p>
        </div>
        <br></br>
        <br></br>
        <Link to="/add">
          <div class="text-center">
            <a href="#" class="btn btn-primary">
              Norway
            </a>
          </div>
        </Link>

        <br></br>
        {/* <Link to="./singapore">
          <div class="text-center">
            <a href="#" class="btn btn-primary">
              Singapore
            </a>
          </div>
        </Link> */}
      
        <Link to="./add">
          <div class="text-center">
            <button className="btn btn-primary" type="submit">
              <i aria-hidden="true"></i>Singapore
            </button>
          </div>
        </Link>

        <br></br>
        <Link to="/add">
          <div class="text-center">
            <a href="#" class="btn btn-primary">
              India
            </a>
          </div>
        </Link>

        <div className="container-text-left">
          <h2></h2>
          <br></br>
          <p>
            
          </p>
        </div>

        <br></br>
      </div>
    );
  }
}

export default HomePage;
