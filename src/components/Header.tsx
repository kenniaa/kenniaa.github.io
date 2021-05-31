import * as React from 'react';
import Link from 'next/link'
import styled  from 'styled-components';
import ThemeContext from '../components/GlobalContext'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

class Header extends React.Component<HeaderProps, {}> {
    render() {
        const { className }  = this.props;

        return (
            <header className={className}>
                <Title>
                    Kenia
                </Title>

                <Nav>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                    <Link href='/stuff'>
                        <a>Stuff</a>
                    </Link>
                    <Link href='/contact'>
                        <a>Contact</a>
                    </Link>
                    <ThemeContext.Consumer>
                        {({ switchTheme, theme }) => (
                            <ToggleButton onClick={() => switchTheme(theme)}>
                                {theme === 'light' ?
                                    <>🌞</>
                                    :
                                    <>🌙</>
                                }
                            </ToggleButton>

                        )}
                    </ThemeContext.Consumer>
                </Nav>
            </header>
        )
    }
}

export default styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  padding: 1.45rem 1.0875rem;
`;

const Title = styled.h3`
  font-weight: 700;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3em, 1fr));
  grid-gap: 0.5em;
  justify-items: center;
  align-items: center;
  flex: 0 1 40%;
  font-size: 16px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.15em;
`;