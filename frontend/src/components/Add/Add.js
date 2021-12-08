import React, { Component } from "react";
import "./AddStyles.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import additional from "./additional.png";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  country: "",
  gender: "",

  nameerror: "",
  emailerror: "",
  phoneerror: "",
  addresserror: "",
  countryerror: "",
  gendererror: "",
};

class Add extends React.Component {
  state = initialState;

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let nameerror = "";
    let emailerror = "";
    let phoneerror = "";
    let addresserror = "";
    let countryerror = "";
    let gendererror = "";

    if (!this.state.name) {
      nameerror = "Enter User Name";
    }

    if (!this.state.email) {
      emailerror = "Enter User Email";
    }
    if (!this.state.phone) {
      phoneerror = "Enter Phone Number";
    }
    if (!this.state.address) {
      addresserror = "Enter User Address";
    }
    if (!this.state.country) {
      countryerror = "Enter Country Name";
    }
    if (!this.state.gender) {
      gendererror = "Enter Gender";
    }

    if (
      nameerror ||
      emailerror ||
      phoneerror ||
      addresserror ||
      countryerror ||
      gendererror
    ) {
      this.setState({
        nameerror,
        emailerror,
        phoneerror,
        addresserror,
        countryerror,
        gendererror,
      });
      return false;
    }
    swal("Guest Details Added Successfully!", "No warnings! ", "success");
    return true;
  };

  onSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.name);
      console.log(this.state.email);
      console.log(this.state.phone);
      console.log(this.state.address);
      console.log(this.state.country);
      console.log(this.state.gender);

      //clear form
      this.setState(initialState);
    }

    if (
      this.state.name == null &&
      this.state.email == null &&
      this.state.phone == null &&
      this.state.address == null &&
      this.state.country == null &&
      this.state.gender == null
    ) {
      return alert("Cannot submit empty fields");
    }
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        country: this.state.country,
        gender: this.state.gender
      }),
    })
      .then(function (callback) {
        console.log(callback.json());
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      gender: "",
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.formSubmitHandler}>
          <div className="container text-center">
            <br></br>
            <br></br>
            <br></br>

            <h1 className="o">
              {" "}
              {/* <img src={additional}></img> */}
              &nbsp;Sign Up
            </h1>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div className="container text-center mt-3">
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Name
                </label>
                <input
                  name="name"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="User Name"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.name}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.nameerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;Email
                </label>
                <input
                  name="email"
                  onChange={this.onChangeHandler}
                  type="email"
                  placeholder="User Email"
                  className="form-control"
                  value={this.state.email}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.emailerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;Phone
                  Number
                </label>
                <input
                  name="phone"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="With the country code (Eg: 9477711188)"
                  className="form-control"
                  value={this.state.phone}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.phoneerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-address-card" aria-hidden="true"></i>
                  &nbsp;Address
                </label>
                <input
                  name="address"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  value={this.state.address}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.addresserror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-globe" aria-hidden="true"></i>&nbsp;Country
                </label>
                <input
                  name="country"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Country"
                  className="form-control"
                  value={this.state.country}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.countryerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-male" aria-hidden="true"></i>&nbsp;Gender
                </label>
                <input
                  name="gender"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Female / Male"
                  className="form-control"
                  value={this.state.gender}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.gendererror}
                </div>
              </div>

              <br></br>
              <br></br>
              <div className="form-group">
                <button
                  className="btn btn-danger"
                  onClick={this.onSubmitHandler}
                >
                  <i className="fa fa-send"></i>&nbsp; Submit
                </button>
                <Link to="/home">
                  <button className="btn btn-info ml-2">
                    <i className="fa fa-arrow-left"></i>&nbsp; Back to Home Page
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </form>
      </div>
    );
  }
}

export default Add;

/*
import React , {Component} from 'react';
import "./AddStyles.css"
class Singapore extends Component {
    render() {
        return(
            <div className = "row">
            <div className = "medium -12 columns">


            <div className="w3-top w3-bar w3-black">
<a href="#home" className="w3-bar-item w3-button">Home</a>
<a href="#food" className="w3-bar-item w3-button">Food</a>
<a href="#drinks" className="w3-bar-item w3-button">Drinks</a>
<a href="#fun" className="w3-bar-item w3-button">Attractions</a>
<a href="#map" className="w3-bar-item w3-button">Map</a>

</div>


    
    
        <div id="home" className="w3-container w3-padding-32"></div>
          <div>
            <h1 className = "Singapore"></h1>
            
           
            </div>
        <div className = "txt">
          <h1>Singapore . . .</h1>
          <h2>With its century-old temples, bustling hawker centres and lush green spaces, Singapore’s varied charms are bound to enchant visitors to our island. Our city’s calendar of events is equally diverse, and present travellers with ample opportunities to explore, indulge and express their passions.
    
            From the glitz and glamour of the Grand Prix Season Singapore to the flavours and fragrances of the Singapore Food Festival, here are 10 reasons to consider a trip to Singapore.</h2>
        </div>
    
        <div id="mySidenav" className="sidenav">
          <a href="#food" id = "f1">Food</a>
          <a href="#drinks" id="d1">Drink</a>
          <a href="#fun" id = "fun1">Fun</a>
          <a href="#map" id = "m1">Map</a>
        </div>
    
      </div>
      
    




<div id="food" className="w3-container w3-padding-32">
<div id = "f1">
<h2 className="w3-center">Food</h2>
    
        <div className="image">
          <img src=".../public/images/hianesechicken.jpg"/>
        </div>
        <div className="text">
            <h1>Hianese Chicken Rice</h1>
          <h4>Steamed chicken served with rice cooked in chicken stock. This all-time favourite dish makes for a quick, fulfilling lunch. The quality of chicken stock is crucial to this dish, and you can tell by the steamed rice oozing with flavour and a fragrant aroma. Pour some dipping sauce over the chicken and give it a go.</h4>
        </div>
        
        
        
        
       
  
  
        <div className="image">
          <img src=".../public/images/satay.jpg"/>
        </div>
        <div className="text">
            <h1>Satay</h1>
          <h4>Skewered grilled meat served with rice cake (ketupat), peanut sauce and cucumber-chili relish. This popular side dish makes an excellent starter or party platter. It has a strong turmeric scent and flavour, as this spice is the key marinade ingredient. Choose from pork, chicken, beef or mutton.</h4>
        </div>
        
        
  
        
        <div className="image">
          <img src=".../public/images/kayaToast.jpg"/>
        </div>
        <div className="text">
            <h1>Kaya Toast</h1>
          <h4>Skewered grilled meat served with rice cake (ketupat), peanut sauce and cucumber-chili relish. This popular side dish makes an excellent starter or party platter. It has a strong turmeric scent and flavour, as this spice is the key marinade ingredient. Choose from pork, chicken, beef or mutton.</h4>
        </div>
  
        <div className="image">
          <img src=".../public/images/roti.jpg"/>
        </div>
        <div className="text">
            <h1>Roti prata and teh tarik</h1>
          <h4>Roti Prata is a flaky Indian bread made with or without eggs and served with a thick vegetable based lentil curry. Teh tarik is a tea that is mixed with carnation milk and 'pulled' from one mug to another to create a froth when served.</h4>
        </div>
        </div>
      </div>
      
  
  
  
      

     
      <div id="drinks" className="w3-container w3-padding-32">
        <div id = "d1">
      <h2 className="w3-center">Drinks</h2>
      
        <div className="image">
          <img src=".../public/images/Kopi-O.jpg"/>
        </div>
        <div className="text">
            <h1>Kopi-O</h1>
          <h4>Just like any other country, coffee is one of the most famous drinks in Singapore. Want to recharge yourself within the morning before you warmth out for sight-seeing? Grab a Kopi-O. This is the standard black coffee with sugar that you just could get at each coffee shop/stall, referred to as Kopi Tiam within the native language.</h4>
        </div>
        
        
        
        
       
  
  
        <div className = "image">
          <img src=".../public/images/Milo-Dinosaur.jpg"/>
          </div>
        
        <div className="text">
            <h1>Milo-Dinosaur</h1>
          <h4>This malt primarily based drink is counted among the popular drinks in Singapore because it enjoyed by children and adults alike. Chocolate flavored milo maize is mixed with cold milk and is then liberally lidded with dry milo maize or frozen dessert. The richer, creamier and tastier frozen dessert topping makes it milo Godzilla </h4>
        </div>
        
  
        <div className = "image">
        
          <img src=".../public/images/Bubble-Tea.jpg"/>
        </div>
        <div className="text">
            <h1>Bubble Tea</h1>
          <h4>Originated in Taiwan, Bubble tea is one of the most popular drinks in Singapore among teens. A drink that appears pretty much as good because it tastes, Bubble tea is currently counted among Singapore’s favorite beverages. This drink is created exploitation tea, food product balls, sweetener (sugar, honey, stevia, sweetener etc), milk and or crushed fruit.</h4>
        </div>
  
        <div className = "image">
          <img src=".../public/images/penicillinCocktail.jpg"/>
        </div>
        <div className="text">
            <h1>Penicillin Cocktail</h1>
          <h4>Penicillin Cocktail is one of the best drinks in Singapore. This is an intoxicating concoction of Islay Scotch, honey-ginger sweetening, and recent juice, the drink is lemony, sweet and alluringly smoky all promptly.</h4>
        </div>
  
      </div>
      </div>
  
      

      
  


<div id="fun" className="w3-container w3-padding-32" >
<h2 className="w3-center act">Activities and Attractions</h2>


<h2 className="w3-center">What to do in Singapore...</h2>





        <h2>Trending</h2>
        <p>Singapore has been described as a playground for the rich, and it's true that the small city-state does have a certain sheen of wealth. But Singapore offers more than just high-end shopping malls, luxury hotels, and fine dining (though it's worth indulging in those a bit if you can). There is also a vibrant history and diverse ethnic quarters to discover, along with many family-friendly attractions and lovely public spaces that make exploring this slightly futuristic city worthwhile.</p>
        
           

            
          


            
       


        <h2>Attractions you may like . . .</h2>

        <div className="row">
            <div className="column">
              <div className="card">
                  <img src=".../public/images/gardensbythebay.jpg" alt="Avatar" />
              
                  
                  <h4><b>Gardens by the bay</b></h4> 
                  <p>Wander through the Bay East Garden, perfect for enjoying the vibrant plant life and escaping the city bustle for a moment,Cloud Forest Dome to see the world's tallest indoor waterfall</p>
                  </div>
                  </div> 
           
          
            <div className="column">
              <div className="card">
                  <img src=".../public/images/sentosaIsland.jpg" alt="Avatar" />
              
                  
                  <h4><b>Sentosa Island</b></h4> 
                  <p>Sentosa Island is a good spot for beach time, and visitors can play volleyball on free courts or go kayaking and skimboarding.</p>
                  </div>
                  </div> 
          
                  <div className="column">
                      <div className="card">
                          <img src=".../public/images/universalStudios.jpg" alt="Avatar" />
                      
                          
                          <h4><b>Universal Studios</b></h4> 
                          <p>The park is arranged thematically, with each area paying tribute to a film, or television show. Destinations include New York City, Hollywood.</p>
                          </div>
                          </div> 

                          <div className="column">
                            <div className="card">
                                <img src=".../public/images/museum.jpg" alt="Avatar" />
                            
                                
                                <h4><b>National Museum</b></h4> 
                                <p>The National Gallery focuses on the works of Asian artists.The 9,000-plus works of art are divided between two buildings, City Hall Supreme court over more than 64,000 square meters.</p>
                                </div>
                                </div> 
            </div>
            <br/>
            <h2>Keep Exploring . . .</h2>

            <div className="row">
                <div className="column">
                  <div className="card">
                      <img src=".../public/images/Singaporebubbletea.jpg" alt="Avatar" />
                  
                      
                      <h4><b>Drinks</b></h4> 
                      <a href="#drinks"  className = "link" id = "d1">Explore</a>
                      </div>
                      </div> 
               
              
                <div className="column">
                  <div className="card">
                      <img src=".../public/images/food1.jpg" alt="Avatar" />
                  
                      
                      <h4><b>Food</b></h4> 
                      <a href="#food"  className = "link" id = "f1">Explore</a>
                      </div>
                      </div> 
              
                      <div className="column">
                          <div className="card">
                              <img src=".../public/images/universalStudios.jpg" alt="Avatar" />
                          
                              
                              <h4><b>Map</b></h4> 
                              <a href="#map"  className = "link" id = "m1">Explore</a>
                              </div>
                              </div> 
    
                              <div className="column">
                                <div className="card">
                                    <img src=".../public/images/pic.jpg" alt="Avatar" />
                                
                                    
                                    <h4><b>Covid 19 Advisory</b></h4>
                                    <a href="https://www.un.org/sites/un2.un.org/files/sg_policy_brief_covid-19_tourism_august_2020.pdf" className= "link">Explore</a>.
                                    
                                    
                                    </div>
                                    </div> 
                </div>

            

       
            




<div id="home" className="w3-container w3-padding-32"></div>
<h2 className="w3-center">Singapore 's Map</h2>


            </div>
            </div>
        );
    }
}
export default Singapore;*/