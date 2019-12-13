import MarieJoRegularWoff2 from '../../assets/fonts/marie-jo/marieandjo-webfont.woff2'
import MarieJoRegularWoff from '../../assets/fonts/marie-jo/marieandjo-webfont.woff'
import BrandonGrotesqueWoff from '../../assets/fonts/brandon-grotesque/Brandon_reg.woff'
import PlayfairWoff from '../../assets/fonts/playfair-display/playfairdisplay-black-webfont.woff'
import PlayfairWoff2 from '../../assets/fonts/playfair-display/playfairdisplay-black-webfont.woff2'
import LatoWoff2 from '../../assets/fonts/lato/lato-regular-webfont.woff2'
import LatoWoff from '../../assets/fonts/lato/lato-regular-webfont.woff'

import { createGlobalStyle } from 'styled-components';

export const InjectFont = createGlobalStyle`
    @font-face {
        font-family: 'marie_and_joregular';
        src: url('${MarieJoRegularWoff2}') format('woff2'),
            url('${MarieJoRegularWoff}') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Brandon Grotesque Regular';
        font-style: normal;
        font-weight: normal;
        src: url('${BrandonGrotesqueWoff}') format('woff');
    }
    
    @font-face {
        font-family: 'playfair_displayblack';
        src: url('${PlayfairWoff2}') format('woff2'),
             url('${PlayfairWoff}') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'latoregular';
        src: url('${LatoWoff2}') format('woff2'),
             url('${LatoWoff}') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

export const fontFamilies = {
    mtRegular: "'Montserrat', Helvetica, sans-serif",
    RbMedium: "'Roboto', Helvetica, sans-serif",
    mjRegular: "'marie_and_joregular', Helvetica, sans-serif",
    bgLight:"'Brandon Grotesque Light', Helvetica, sans-serif",
    bgRegular: "'Brandon Grotesque Regular', Helvetica, sans-serif",
    pfBlack: "'playfair_displayblack', Helvetica, sans-serif",
    latoRegular: "'latoregular', Helvetica, sans-serif",

};