import React, { Component } from "react";
import styles from "./Model.module.css";
import Aux from "../../../hoc/Auxillary/Auxillary";
import Backdrop from "../Backdrop/Backdrop";

class model extends Component {


    shouldComponentUpdate(nextProps,nextState) {
<<<<<<< HEAD
        return (nextProps.show !== this.props.show) || nextProps.children !== this.props.children;
=======
        return (nextProps.show !== this.props.show) ;
>>>>>>> 0dd51eaa00aae63e0bc3f0f2b998e0974e053b95
    }
    
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modelClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default model;
