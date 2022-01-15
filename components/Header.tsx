import * as React from 'react';
import IconButton from './IconButton';
import styled  from 'styled-components';
import ThemeContext from '../components/GlobalContext'
import Cloud from './Cloud';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

class Header extends React.Component<HeaderProps, {}> {
    render() {
        const { className }  = this.props;

        return (
            <header className={className}>
                <Title>
                    Kenia <Cloud />
                </Title>

                <Nav>
                    <ThemeContext.Consumer>
                        {({ switchTheme, theme }) => (
                            <IconButton onClick={() => switchTheme(theme)}>
                                {theme === 'light' ?
                                    <>🌞</>
                                    :
                                    <>🌙</>
                                }
                            </IconButton>

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
  padding: 1.45rem 1.0875rem 0;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5em;
  color: ${props => props.theme.title}
`;

const Nav = styled.nav`
  font-size: 16px;
`;
