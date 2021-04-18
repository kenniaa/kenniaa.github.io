import * as React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';

import { darkTheme, lightTheme } from './Themes';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: lightTheme
        }
    }

    handleThemeToggle() {
        const { theme } = this.state;

        if (theme === lightTheme) {
            this.setState({ theme: darkTheme });
        } else {
            this.setState({ theme: lightTheme });
        }
    }

    render() {
        const { children, title } = this.props;
        const { theme } = this.state;

        return (
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Container>
                    <Head>
                        <title>{title}</title>
                        <link rel='icon' href='/favicon.ico' />
                    </Head>

                    <Header>
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
                        </Nav>
                        <button onClick={() => this.handleThemeToggle()}>
                            toggle
                        </button>
                    </Header>

                    <Main>
                        {children}
                    </Main>

                    <Footer>
                        <a href='http://github.com/kenniaa'>
                            github
                        </a>
                    </Footer>
                </Container>
            </ThemeProvider>
        )
    }
}

const Main = styled.main`
  padding: 1.45rem 1.0875rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1em 0 0 0;
  max-width: 960px;
  width: 100%;
`;

const Header = styled.header`
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
  display: flex;
  justify-content: space-evenly;
  flex: 0 1 40%;
  font-size: 18px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1em 0;
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
  margin: 1em;
`;