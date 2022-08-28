import React from "react";

class Error extends React.Component{
  render(){
    return(
      <>
      {this.props.errFlag && <h4>Error :Unable to geocode</h4>}
      </>
    )
  }

}

export default Error