import React from 'react';
import PropTypes from 'prop-types';
import MaskRatio from '../grid/MaskRatio';
import {Ratios} from '../../styles/default/Mixins';

export default class Video extends React.Component {
    static propTypes = {
        poster: PropTypes.string,
        ratio: PropTypes.string,
        src: PropTypes.string,
        ratioDesktop: PropTypes.oneOf(Object.keys(Ratios)),
        mockupVideo: PropTypes.bool
    };


    render() {
        const {ratio, src, ratioDesktop, poster, mockupVideo} = this.props;
        return (
            <MaskRatio ratio={ratio} ratioDesktop={ratioDesktop} mockupVideo={mockupVideo}>
                {/*<video muted={true} autoPlay={true} loop={true} src={src} poster={poster}>*/}
                    {/*<source type="video/gif" src={src}/>*/}
                    {/*Your browser does not support HTML5 video.*/}
                {/*</video>*/}
                <img src={src} alt={poster}/>
            </MaskRatio>
        );
    }
}