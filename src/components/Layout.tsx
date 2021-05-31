import * as React from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import Header from './Header';

interface LayoutProps {
    children?: any,
    title: string
}

export default class Layout extends React.Component<LayoutProps, {}> {
    render() {
        const { children, title } = this.props;

        return (
            <Container>
                <Head>
                    <title>{title}</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>

                <Header />

                <Main>
                    {children}
                </Main>

                <Footer>
                    <a href='http://github.com/kenniaa'>
                        github
                    </a>
                </Footer>
            </Container>
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