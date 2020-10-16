import styled from 'styled-components'
import { BaseMetrics, dimensions } from '../theme/default'

const StyledFooter = styled.footer`
  ${BaseMetrics}
  justify-content: space-between;
  max-width: ${dimensions.container.large};
  padding: ${dimensions.base5._x2};
`

const Footer = ({ copyright }) => {
  return (
    <StyledFooter>
      <p>© {copyright}. All rights reserved.</p>
    </StyledFooter>
  )
}

export default Footer
