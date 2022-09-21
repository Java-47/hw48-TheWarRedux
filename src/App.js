import React from 'react';
import Game from './components/Game';
import Result from './components/Result';
import Start from './components/Start';
import { game, result, start } from './utils/contants';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: start,
      name: 'You',
      score: [0, 0]
    }
  }

  changePage = page => {
    this.setState({ page });
  }

  changeName = name => {
    if (name) {
      this.setState({ name });
    }
  }

  changeScore = score => {
    if(score[0] > score[1]){
      this.setState({
        score: [this.state.score[0] + 1,this.state.score[1]],
        result: 'Lose'
      })
    }
    if(score[0] < score[1]){
      this.setState({
        score: [this.state.score[0],this.state.score[1] + 1],
        result: 'Win'
      })
    }
    if(score[0] === score[1]){
      this.setState({result: 'Draw'})
    }
  }

  render() {
    switch (this.state.page) {
      case game:
        return <Game
                  nickName={this.state.name}
                  changePage={this.changePage}
                  getScore={this.changeScore}
                />;
      case result:
        return <Result 
                  changePage={this.changePage} 
                  score={this.state.score}
                  result={this.state.result}
                />
      default:
        return <Start 
                  name={this.state.name} 
                  changeName={this.changeName} 
                  changePage={this.changePage} 
                />
    }
  }

}

export default App;
