import React, {Fragment} from 'react'
import FadeIn from "react-fade-in";
import * as doneData from "./../../assets/animation/checked.json";
import styled from 'styled-components';
import * as legoData from "./../../assets/animation/loading.json"

const LoadingBox = styled.div`
    background: pink;
    max-height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
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
            done: undefined
        };
    }

    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        this.setState({ loading: true })
                    }, 1500);
                    setTimeout(() => {
                        this.setState({ done: true });
                    }, 3000);
                });
        }, 1200);
    }

    render() {
        return (
            <Fragment>
                {!this.state.done ? (
                    <LoadingBox>
                    <FadeIn>
                        <div>
                            {!this.state.loading ?
                                (<Lottie options={defaultOptions} height={320} width={320} />)
                                : (<Lottie options={defaultOptions2} height={320} width={320} />)
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