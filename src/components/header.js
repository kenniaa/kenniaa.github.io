import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'none'
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <a
        href='/'
      >
        <h3 style={{ margin: '1em 0' }}>
          {siteTitle}
        </h3>
      </a>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flex: '0 1 40%'
        }}
      >
        <Link
          className='fancy-link'
          to='/about/'
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <span
            style={{ fontSize: '75%', margin: '0 0.4em', color: '#ee6962' }}
            className='th th-flower-o'
          />
          About
        </Link>

        <Link
          className='fancy-link'
          to='/stuff/'
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <span
            style={{ fontSize: '75%', margin: '0 0.4em', color: '#ee6962' }}
            className='th th-folder-2-o'
          />
          Stuff
        </Link>

        <Link
          className='fancy-link'
          to='/contact/'
          style={{
            color: 'black',
            textDecoration: 'none'
          }}
        >
          <span
            style={{ fontSize: '75%', margin: '0 0.4em', color: '#ee6962' }}
            className='th th-envelope-o'
          />
          Contact
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
