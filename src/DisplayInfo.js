import React from "react";

class DisplayInfo extends React.Component{
  render(){
    return(
      <>
      <h3>Display name : {this.props.display_name}</h3>
        <p>Lon : {this.props.lon}</p>
        <p>Lat : {this.props.lat}</p>

     
      </>
    )
  }

}

export default DisplayInfo