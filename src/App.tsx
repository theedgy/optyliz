import React from 'react';
import logo from './logo.svg';
import { Search } from './scenes/Search';
import { AppContainer, Header, Logo, LogoWrapper } from './styles';

function App() {
    return (
        <AppContainer>
            <Header>
                <LogoWrapper href="/">
                    <Logo src={logo} className="App-logo" alt="logo" />
                    From Poland With Dev
                </LogoWrapper>
            </Header>

            <Search />
        </AppContainer>
    );
}

export default App;
