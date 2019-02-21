import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import TopBar from './componets/TopBar';
import BottomBar from './componets/BottomBar';
import HeaderImageCard from './componets/HeaderImageCard';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <TopBar />
          <HeaderImageCard />
          <BottomBar />
        </MuiThemeProvider>
      </div >
    );
  }
}

export default App;
