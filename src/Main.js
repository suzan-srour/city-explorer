import React from "react";
import axios from "axios";
import DisplayInfo from "./DisplayInfo";
import Map from "./Map";
import Error from "./Error"
class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      display_name : '',
      lat : '',
      lon : '',
      errFlag : false,
      mapFlag : false
    }
  }
  
  getLocationData = async (event) => {
    event.preventDefault();
    const cityName = event.target.city.value;
    //send request to the third party
    const key = 'pk.d7ddb0237ca2c92b634b89866686ea71';
    const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`
    
    try 
    {
      let resResult = await axios.get(URL);
      this.setState({
        display_name : resResult.data[0].display_name,
        lat : resResult.data[0].lat,
        lon : resResult.data[0].lon,
        mapFlag : true
      })
    }
    catch
    {
      console.log('err');
      this.setState({
        errFlag : true
      })
    }

    
    

  }
  render(){
    return(
      <div>
      
        <form onSubmit={this.getLocationData}>
          <input type="text" name="city" placeholder='Enter a city'/>
          <button type='submit'>Explore!</button>
        </form>
        <DisplayInfo display_name={this.state.display_name} lon={this.state.lon} lat={this.state.lat} />
        <Error errFlag={this.state.errFlag} />
        <Map lon={this.state.lon} lat={this.state.lat} mapFlag={this.state.mapFlag}/>

        

        
        
      </div>
    )
  }
}

export default Main;