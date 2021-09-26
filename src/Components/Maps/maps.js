import React, { Component } from "react";
import Wrapper from "../Wrapper/wrapper";
import Styles from "./maps.module.css";

class maps extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <div className={Styles.wrapper}></div>
        </Wrapper>
      </>
    );
  }
}

export default maps;
