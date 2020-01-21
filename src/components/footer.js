import React from 'react'

const Footer = () => (
  <footer
    style={{
      maxWidth: 960,
      margin: '0 auto',
      padding: '1.45rem 1.0875rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flex: '0 1 40%'
      }}
    >
      <a
        href='https://github.com/kenniaa'
        target='_blank'
        rel='noopener noreferrer'
        style={{
          color: 'black',
          textDecoration: 'none',
        }}
      >
        <span
          style={{ fontSize: '110%', margin: '0 0.4em', color: '#ee6962' }}
          className='th th-github-o'
        />

        <span
          style={{ fontSize: '110%', margin: '0 0.4em', color: '#ee6962' }}
          className='th th-twitter-o'
        />
      </a>
    </div>
  </footer>
);

Footer.propTypes = {

};

Footer.defaultProps = {
};

export default Footer
