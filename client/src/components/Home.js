import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import { Image } from 'semantic-ui-react';

class Home extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => this.setState({ posts: res.data }) )
    }


    render() {
      return(
        <div>
          { this.state.posts.map( post =>
              <div key={post.id}>
                <h2>{post.title}</h2> 
                <h3>{post.body}</h3>
                <hr/>
              </div>
            )
          }
        </div>
      );
    }
}

export default Home;
