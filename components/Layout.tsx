import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Header from './Header';
import StyledComponentsRegistry from '../lib/registry';

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
                    <StyledComponentsRegistry>
                        {children}
                    </StyledComponentsRegistry>
                </Main>

                <Footer>
                    <Link href='http://github.com/kenniaa' target='_blank'>
                        github
                    </Link>

                    <Link href='https://www.linkedin.com/in/kenia-c-6b19bb50'  target='_blank'>
                        linkedin
                    </Link>

                    <Link href='https://poly.work/kennia'  target='_blank'>
                        polywork
                    </Link>
                </Footer>
            </Container>
        )
    }
}

const Main = styled.main`
  padding: 1rem;
  flex: 1;
  max-width: 960px;
  width: 100%;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid ${props => props.theme.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1em 0;
  
  > a {
    margin-left: 1em;
    margin-right: 1em;
  }
`;

const Container = styled.div`
  min-height: calc(100vh - 2em);
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
  margin: 1em;
`;