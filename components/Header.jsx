import Link from 'next/link'
import styled from 'styled-components'
import Nav from '../components/Nav'
import { BaseMetrics, colors, dimensions } from '../theme/default'

const StyledHeader = styled.header`
  ${BaseMetrics}
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(16px);
  max-width: ${dimensions.container.large};
  position: sticky;
  top: 0;
  z-index: 101;
  align-items: center;
  height: 80px;
  ${Nav} a {
    padding: ${dimensions.base4._3x} ${dimensions.base5._2x};
  }
`
const Logo = styled.div`
  a {
    color: ${colors.accents.primary};
  }
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 800;
`
export default function Header({ menu }) {
  return (
    <StyledHeader>
      <Logo>
        <Link href="/">
          <a>Natalie Kriwy Photographer</a>
        </Link>
      </Logo>
      {menu && (
        <Nav>
          {menu.map((item) => (
            <Link key={item.node.id} href={item.node.path}>
              <a>{item.node.label}</a>
            </Link>
          ))}
        </Nav>
      )}

      {/* <Nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Portrait</a>
        </Link>
        <Link href="/blog">
          <a>Reportage</a>
        </Link>
        <Link href="/clients">
          <a>Clients</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Nav> */}
    </StyledHeader>
  )
}
