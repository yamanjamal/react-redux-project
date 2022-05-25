import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

    componentDidMount() {
      this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.newPost) {
        this.props.posts.unshift(nextProps.newPost);
      }
    }
    
    // constructor(props){
    //     super(props)
    //     this.state={
    //       posts:[]
    //     }
    //   }

    //   componentDidMount() { 
    //     fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(data=>this.setState({posts:data}))
    //     // fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(data=>console.log(data))
    //   }
  render() {
    const postitems=this.props.posts.map(post=>(
        <div key={post.id}>
          <h1>
            {post.title}
          </h1>
          <p>
            {post.body}
          </p>
        </div>
      ));

    return (
        <div>
            <div>Post</div>
            {postitems}
        </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
// export default Post;
