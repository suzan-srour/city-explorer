import React from "react";

class Errors extends React.Component{
  render(){
    return(
      <>
      {this.props.errFlag && <h4>Error :Unable to geocode</h4>}
      </>
    )
  }

}

export default Errors