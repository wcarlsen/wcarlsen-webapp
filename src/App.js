import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import TopBar from './componets/TopBar';
import BottomBar from './componets/BottomBar';
import AboutMeCard from './componets/AboutMeCard';
import AtWorkCard from './componets/AtWorkCard';
import CVCard from './componets/CVCard';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  state = {
    content: "about",
  };

  changeContent = (contentName) => {
    this.setState({ content: contentName });
  };

  render() {

    let contentComponent;

    switch (this.state.content) {
      case "about":
        contentComponent = <AboutMeCard />;
        break;
      // case "home":
      //   contentComponent = <AtHomeCard />;
      //   break;
      case "work":
        contentComponent = <AtWorkCard />;
        break;
      // case "skills":
      //   contentComponent = <SkillsCard />;
      // break;
      case "cv":
        contentComponent = <CVCard />;
        break;
      default:
        contentComponent = <AboutMeCard />;
        break;
    }

    return (
      <div className="App" >
        <MuiThemeProvider theme={theme}>
          <TopBar changeContent={this.changeContent} />
          {contentComponent}
          <BottomBar />
        </MuiThemeProvider>
      </div >
    );
  }
}

export default App;
