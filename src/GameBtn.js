import React from "react";
import "./stylesheets/GameBtn.css"

class GameBtn extends React.Component {

    render() {

        const buttonValue = this.props.isPlaying ? "Stop" : "Start";

        return(
            <input type="button" value={buttonValue}/>
        );
    }
}

export default GameBtn;