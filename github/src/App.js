import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GithubCard from './coponents/GithubCard';

class App extends React.Component {
    constructor()
   {
      super();
      this.state = {
        githubUser: {},
        githubFollowers: []
      };

    }

    componentDidMount(){
      axios
      .get('https://api.github.com/users/gnhossain')
      .then(res => {
        console.log(res.data);
        this.setState({githubUser:res.data});
        console.log(this.state.githubUser)
      })
      .catch(err => console.log(err));

      axios
        .get('https://api.github.com/users/gnhossain/followers')
        .then(res => {
          console.log(res.data);
          this.setState({githubFollowers: res.data});
          console.log(this.state.githubFollowers)
        })
        .catch(err => console.log(err));
      }

    render()
    {
      return(
        <div className="App"> 
          <GithubCard github={this.state.githubUser}/>
          {this.state.githubFollowers.map(follower => 
            <GithubCard github={follower} />  ) }
        </div>
      );
    }
    
}

export default App;
