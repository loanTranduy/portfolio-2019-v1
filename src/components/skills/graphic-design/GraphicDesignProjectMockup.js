import React from 'react'
import styled from 'styled-components';
import {media} from '../../../styles/default/Mediaqueries';
import {VideoBox} from '../../video/VideoBox';
import Video from '../../video/Video';
import MaskRatio from '../../grid/MaskRatio';
import throttle from 'lodash.throttle';
import {VideoFullscreen, YoutubeComponent} from '../../video/YoutubeComponent';
import {backgroundColors} from '../../../styles/default/Colors';
import close from '../../../assets/icons/close.svg'

const Intro = styled.section`
  color: white;
  margin: auto;
  
  img{
    position: inherit;
    margin-top: 24px;
    width: 200px;
    margin-bottom: 16px;
  }
  
  p{
    text-align: center;
    color: ${props => props.baselineColor};
    font-weight: 500;
  }
  
  &:after{
    display: none;
  }
  
  ${media.md`
    margin: 80px auto;
    grid-column: span 12;
    display: flex;
    flex-direction: column;
    justify-content: center;
        align-items: center;
  `}
`;


export const ContentInside = styled.section`
  margin-bottom: 72px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  padding: 48px 72px 48px 32px;
  position: relative;
    
  //Background
  &:before{
    content:'';
    position: fixed;
    z-index: -1;
    top: -50px;
    left: -100px;
    right: 0;
    background:${props => props.backgroundColor};
    height: 400px;
    transform: rotate(-16deg);
    display:${props => props.backgroundColor ? 'block' : 'none'};
  }
  
  &:after{
    top: 70px;
    content:url(${props => props.backgroundImage});
    position: fixed;
    z-index: -1;
    left: 50%;
    background:${backgroundColors.primary};
    height: 400px;
    transform: translateX(-50%);
    display:${props => props.backgroundImage ? 'block' : 'none'};
    width: 100%;
  }
  //_______________________________
  
  ${media.md`
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    
    &:before{
        top: -60px;
        height: 630px;
    }
  `}
  
  ${media.xl`
    padding: 72px 48px;
    width: calc(100% - ${props => props.sideInfoWidth}px);
  `}
`;

export const ListImages = styled.div`
    overflow: hidden;
    border-radius: 40px;
    
    ${media.md`
        grid-column: span ${props => props.width};  
    `}
`;

const FullscreenVideo = styled(VideoFullscreen)`
`;

export class GraphicDesignProjectMockup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desktop: false,
            clicked: false
        };
        this.updateDimensions = throttle(this.updateDimensions, 500).bind(this);
    }

    updateDimensions() {
        if (window.innerWidth < 768) {
            this.setState({desktop: false});
        } else {
            this.setState({desktop: true});
        }
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    };

    handleOnClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    };

    render() {
        const{sideInfoWidth, mockups, backgroundColor, logo, backgroundImage, baselineColor} = this.props;
        const {clicked} = this.state;
        return (
            <ContentInside sideInfoWidth={sideInfoWidth} backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
                <Intro baselineColor={baselineColor}>
                    <img src={logo} alt=""/>
                    {/*<p>———   {baseline}</p>*/}
                </Intro>
                {mockups.map((mockup, id) => (
                    <ListImages key={id} width={mockup.col}>
                        {mockup.image &&
                            <MaskRatio ratio={mockup.ratio} ratioDesktop={mockup.ratioDesktop}>
                                <img src={this.state.desktop ? mockup.image : mockup.imageLow} alt={mockup.imageAlt}/>
                            </MaskRatio>
                        }
                        {mockup.posterVideoPlay &&
                            <>
                                {/*//button Video*/}
                                <MaskRatio ratio="video" ratioDesktop="video">
                                    <VideoBox
                                        onClickVideo={this.handleOnClick}
                                        coverVideo={mockup.posterVideoPlay}
                                        coverVideoAlt={mockup.videoAlt}
                                    />
                                </MaskRatio>

                                {/*//Generate youtube Video*/}
                                {clicked && mockup.youtubeVideoId &&
                                    <YoutubeComponent
                                        id={mockup.youtubeVideoId}
                                        clicked={clicked}
                                        handleClick={this.handleOnClick}
                                    />
                                }

                                {/*//generate intern Video*/}
                                {clicked && mockup.videoIntern &&
                                    <FullscreenVideo>
                                        <div>
                                            <button onClick={this.handleOnClick}><img src={close} alt="close video"/></button>
                                            <video controls muted={false} autoPlay={true} src={mockup.videoIntern}
                                                   poster={mockup.posterVideoPlay}>
                                                <source type="video/mp4" src={mockup.posterVideoPlay}/>
                                                Your browser does not support HTML5 video.
                                            </video>
                                        </div>
                                    </FullscreenVideo>
                                }
                            </>
                        }

                        {/*//Gif video*/}
                        {mockup.playingVideo &&
                            <Video
                                src={mockup.playingVideo}
                                ratio={mockup.ratio}
                                ratioDesktop={mockup.ratioDesktop}
                                poster={mockup.poster}
                            />
                        }
                    </ListImages>
                ))}
            </ContentInside>
        )
    }
}
