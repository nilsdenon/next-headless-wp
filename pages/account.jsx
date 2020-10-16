import Link from 'next/link'
import PageLayout from '../layout/PageLayout'

export default function Account() {
  return (
    <div>
      <p>This is the Account page.</p>
      <p>
        <Link href="/profile">
          <a>Go: Profile</a>
        </Link>
      </p>
    </div>
  )
}

Account.Layout = PageLayout
