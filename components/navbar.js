import React from 'react'
import Link from 'next/link'

export default () => (
  <nav className='nav'>
    <ul>
      <li>
        <Link href='/production'>Home</Link>
      </li>
      <li>
        <Link href='/production/dogs'>Dogs</Link>
      </li>
      <li>
        <Link href='/production/dogs/shepherd'>Only Shepherds</Link>
      </li>
    </ul>
  </nav>
)
