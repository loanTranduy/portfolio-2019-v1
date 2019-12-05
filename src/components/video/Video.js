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
    };


    render() {
        const {ratio, src, ratioDesktop, poster} = this.props;
        return (
            <MaskRatio ratio={ratio} ratioDesktop={ratioDesktop}>
                <video muted={true} autoPlay={true} loop={true} src={src} poster={poster}>
                    <source type="video/mp4" src={src}/>
                    Your browser does not support HTML5 video.
                </video>
            </MaskRatio>
        );
    }
}