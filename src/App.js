import React from "react";

import Counters from "./Component/Counters";
import "bootstrap/dist/css/bootstrap.css";
const styles = {
  margin: "auto",
};
class App extends React.Component {
  state = {
    languages: [
      { name: "php", votes: 0 },
      { name: "java", votes: 0 },
      { name: "Javascript", votes: 0 },
      { name: "C#", votes: 0 },
      { name: "C++", votes: 0 },
    ],
  };

  handleInrement = (language) => {
    const languages = [...this.state.languages];
    const index = languages.indexOf(language);
    languages[index] = { ...language };
    languages[index].votes++;
    this.setState({ languages: languages });
  };

  render() {
    return (
      <div className="container-fluid" style={styles}>
        <Counters
          langauges={this.state.languages}
          onIncrement={this.handleInrement}
        />
      </div>
    );
  }
}

export default App;
