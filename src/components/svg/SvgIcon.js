import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  color: inherit;
  fill: currentColor;
  width: inherit;
  height: inherit;
  position: relative;
`

/**
 * This component is a bare bone svg icon.
 * It doesn't have a default width, height and colors.
 * This is left to the styling component wrapping it.
 * See storybook for examples.
 */
export const SvgIcon = ({glyph}) => (
    <Svg viewBox={glyph.viewBox}>
        <use xlinkHref={`#${glyph.id}`} />
    </Svg>
)

SvgIcon.propTypes = {
    glyph: PropTypes.shape({
        id: PropTypes.string.isRequired,
        viewBox: PropTypes.string.isRequired,
    }).isRequired,
}
