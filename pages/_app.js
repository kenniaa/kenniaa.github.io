import App from 'next/app';
import dynamic from "next/dynamic";
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../components/GlobalStyles';
import ThemeContext from '../components/GlobalContext'
import themes from '../components/Themes'

class MyApp extends App {
    constructor() {
        super();

        this.state = {
            theme: 'light',
            switchTheme: this.switchTheme.bind(this)
        };
    }

    switchTheme() {
        const { theme } = this.state;

        if (theme === 'light') {
            this.setState({ theme: 'dark' });
        } else {
            this.setState({ theme: 'light' });
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <ThemeContext.Provider value={this.state}>
                    <ThemeContext.Consumer>
                        {(data) => (
                            <ThemeProvider theme={themes[data.theme]}>
                                <GlobalStyles />
                                <Component
                                    {...pageProps}
                                />
                            </ThemeProvider>
                        )}
                    </ThemeContext.Consumer>
                </ThemeContext.Provider>
            </>
        )
    }
}

export default dynamic(() => Promise.resolve(MyApp), {
    ssr: false,
});