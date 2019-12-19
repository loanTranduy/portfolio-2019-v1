import React, {Fragment} from 'react'
import FadeIn from "react-fade-in";
import * as doneData from "./../../assets/animation/checked.json";
import styled from 'styled-components';
import * as legoData from "./../../assets/animation/loading.json"

const LoadingBox = styled.div`
    background: pink;
    max-height: 100vh;
    position: absolute;
    top: -70px;
    bottom: -70px;
    left: 0;
    right: 0;
    z-index: 99999;
    
    > div {
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    }
`

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export default class Loading extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: undefined,
            done: undefined,
            percentage: 0,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            10)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let next = (this.state.percentage + 1) % 100;
        console.log(this.state);
        this.setState({
            percentage: next
        });
    }

    render() {
        return (
            <Fragment>
                {!this.state.done ? (
                    <LoadingBox>
                        <FadeIn>
                            <div>
                                {this.state.percentage < 99 ?
                                    (<h1>{this.state.percentage}%</h1>)
                                    : null
                                }
                            </div>
                        </FadeIn>
                    </LoadingBox>
                ) : (
                    null
                )}
            </Fragment>
        )
    }
}