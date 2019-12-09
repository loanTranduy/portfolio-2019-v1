import React from 'react'
import styled from 'styled-components';
import {Mockup} from '../../mockup/Mockup';
import {fontSize, lineHeight} from '../../../styles/default/Mixins';
import {media} from '../../../styles/default/Mediaqueries';
import {ContentInside} from '../front-end/FrontEndProjectMockup';
import {fontFamilies as FontFamilies} from '../../../styles/default/Font';

export const Logo = styled.img`
  width: 200px;
    margin: 8px 0 44px 0;
    display: block;
  ${media.md`
    width: 160px;
  `}
  
  ${media.xl`

  `}
`;

export const TextStyle = styled.div`
  font-family: ${FontFamilies.RbMedium};
  color: #252726;
  margin-top: 80px;
  margin-bottom: 80px;
  p{
    letter-spacing: .5px;
    ${fontSize(14)};
    ${lineHeight(20)};
  }
  
  h2{
    ${fontSize(50)};
    margin-bottom: 8px;
  }
  ${media.md`
      h2{
        ${fontSize(62)};
      }
  `}
  
  ${media.xl`

  `}
`;

export const Colors = styled.ul`
  display: grid;
  margin-top: 48px;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  margin-bottom: 80px;
  
  li{
   grid-column: span 1;
  }
  
  ${media.md`
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 32px;
  `}
  
  ${media.xl`

  `}
`;

export const Color = styled.div`
    background: ${props => props.backgroundColors};
    height: 72px;
    width: 100%;
    border-radius: 4px;
  ${media.md`

  `}
  
  ${media.xl`

  `}
`;

export const ColorLabel = styled.p`
  margin-top: 8px;
  font-family: ${FontFamilies.RbMedium};
  font-weight: 700;
  color: ${props => props.truc};
  ${fontSize(14)};
  
  ${media.md`
    ${fontSize(10)};
  `}
  
  ${media.xl`

  `}
`;

export const Gradiants = styled.ul`
  display: flex;
  align-items: flex-end;
  height: 72px;
  background: ${props => props.mainColor};
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  
  li{
    width: calc(100% / ${props => props.gradiantsSize});
  }
  ${media.md`
  `}
  
  ${media.xl`

  `}
`;


export const Gradiant = styled.div`
  background: ${props => props.backgroundColors};
  height: 20px;

  ${media.md`
    height: 24px;
  `}
  
  ${media.xl`

  `}
`;

export const GradiantList = styled.div`
  display: grid;
  margin-top: 48px;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  margin-bottom: 100px;
  
  li{
   grid-column: span 1;
  }

  ${media.md`
    grid-template-columns: repeat(3, 1fr);
  `}
  
  ${media.xl`

  `}
`;

export const Mobile = styled.div`
  display: grid;
  margin-top: 180px;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 48px;
  margin-bottom: 100px;
  
  li{
   grid-column: span 1;
  }

  ${media.md`
   grid-column-gap: 32px;
    grid-template-columns: repeat(3, 1fr);
  `}
  
  ${media.xl`

  `}
`;

export const Desktop = styled(Mobile)`
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 48px;
  margin-bottom: 150px;
  
  li{
   grid-column: span 1;
  }

  ${media.md`
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 100px;

  `}
  
  ${media.xl`

  `}
`;

export class WebDesignProjectMockup extends React.Component {

    render() {
        const{sideInfoWidth, fontName,logo, cover,backgroundColor, marginTop, colors, gradiants, mobileScreens, desktopScreens} = this.props;
        return (
            <ContentInside sideInfoWidth={sideInfoWidth} backgroundColor={backgroundColor} marginTop={marginTop} absolute>
                <Logo src={logo} alt=""/>
                <Mockup
                    cover={cover}
                    side
                />
                <TextStyle>
                    <h2>{fontName}</h2>
                    <p>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz<br/>
                        1234567890!@#$%^&$()_+</p>
                </TextStyle>
                <GradiantList>
                    {gradiants.map((gradiant, id) => (
                        <li>
                            <Gradiants key={id} mainColor={gradiant.mainColor} gradiantsSize={gradiant.gradiantsList.length}>
                                {gradiant.gradiantsList.map((gradiantItem, id) => (
                                    <li key={id}>
                                        <Gradiant backgroundColors={gradiantItem}/>
                                    </li>
                                ))}
                            </Gradiants>
                            <ColorLabel truc={gradiant.gradiantsList[0]}>{gradiant.gradiantsList[0]}</ColorLabel>
                        </li>
                    ))}
                </GradiantList>
                <Colors>
                    {colors.map((color, id) => (
                        <li key={id}>
                            <Color backgroundColors={color}/>
                            <ColorLabel truc={color}>{color}</ColorLabel>
                        </li>
                    ))
                    }
                </Colors>
                <Mobile>
                    {mobileScreens.map((mobileScreen, id) => (
                        <Mockup
                            key={id}
                            cover={mobileScreen}
                            device="mobile"
                        />
                    ))}
                </Mobile>
                <Desktop>
                    {desktopScreens.map((mobileScreen, id) => (
                        <Mockup
                            key={id}
                            cover={mobileScreen}
                        />
                    ))}
                </Desktop>
            </ContentInside>
        )
    }
}
