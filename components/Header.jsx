import Link from 'next/link'
import styled from 'styled-components'
import { BaseMetrics, colors, dimensions } from '../theme/default'

const StyledHeader = styled.header`
  ${BaseMetrics}
  max-width: ${dimensions.container.large};
`
const Logo = styled.div`
  color: ${colors.accents.primary};
  text-transform: uppercase;
  font-weight: 800;
`

export default function Header() {
  return (
    <StyledHeader>
      <Logo>Natalie Kriwy Photographer</Logo>
      <nav>
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
      </nav>
    </StyledHeader>
  )
}
