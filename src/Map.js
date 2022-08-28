import React from "react";

class Map extends React.Component{
  render(){
    return(
      <>
      {this.props.mapFlag && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.props.lat},${this.props.lon}`} alt="Map"></img>}
      </>
    )
  }

}

export default Map