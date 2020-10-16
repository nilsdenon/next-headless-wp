import Link from 'next/link'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

export default function Header() {
  return (
    <StyledHeader>
      <svg
        className="logo"
        viewBox="-275 400.9 43.6 40"
        enableBackground="new -275 400.9 43.6 40"
      >
        <path d="M-254.4 421.7M-254.4 421.7"></path>
        <path
          className="st0"
          d="M-275 401.5l22.8 15.5-22.8 15.2zM-254.4 421.7M-254.4 421.7"
        ></path>
        <path
          className="st0"
          d="M-254.8 428.8l18-12-14.7-10v5.7l-3.3-2.2v-9.4l23.4 15.9-20.1 13.4v8.8l-3.3 1.9z"
        ></path>
      </svg>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </StyledHeader>
  )
}
