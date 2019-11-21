import React from 'react'
import styled from 'styled-components';

const ShapeOverlays = styled.svg`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0; 
  left: 0;
  path:nth-of-type(1) { fill: #c4dbea; }
  path:nth-of-type(2) { fill: #4c688b; }
  path:nth-of-type(3) { fill: #2e496a; }
`

export default class OrganicShape extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            numPoints : 18,
            duration: 600,
            delayPointsArray: [],
            delayPointsMax: 300,
            delayPerPath: 60,
            timeStart: Date.now(),
            isOpened: false,
        };
    }

    componentDidMount() {

    }

    // toggle() {
    //     const range = 4 * Math.random() + 6;
    //     for (var i = 0; i < this.numPoints; i++) {
    //         const radian = i / (this.numPoints - 1) * Math.PI;
    //         this.delayPointsArray[i] = (Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4 * this.delayPointsMax;
    //     }
    // ...
    // }
    //
    // updatePath(time) {
    //     const points = [];
    //     for (var i = 0; i < this.numPoints; i++) {
    //         points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
    //     }
    // ...
    // }

    render() {
        return (
            <ShapeOverlays
                viewBox = "0 0 100 100"
                preserveAspectRatio = "none" >
                <path className = "shape-overlays__path" />
                <path className="shape-overlays__path"/>
                <path className = "shape-overlays__path"/>
            </ShapeOverlays>
        )
    }
}


