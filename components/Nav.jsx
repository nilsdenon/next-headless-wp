import styled from 'styled-components'
import { dimensions, colors } from '../theme/default'

const Nav = styled.nav`
  display: flex;
  a {
    padding: ${dimensions.base5._1x} ${dimensions.base4._2x};
    &:hover {
      color: ${colors.grays.mediumGray};
    }
  }
`
export default Nav
