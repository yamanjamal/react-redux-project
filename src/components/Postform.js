import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


class Postform extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'',
      body:''
    }

    this.onChange=this.onChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    const post={
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post);
    // fetch('https://jsonplaceholder.typicode.com/posts',{
    //   method:'POST',
    //   headers: { 'content-type' :'application/json'},
    //   body: JSON.stringify(post)
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        <h1>add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" onChange={this.onChange} value={this.state.title}/>
          </div>
          <br />
          <div>
            <label htmlFor="body">Body:</label>
            <br />
            <textarea type="text" name="body" id="body" onChange={this.onChange} value={this.state.body} />
          </div>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  posts: state.posts.items,
  // newPost: state.posts.item
});

export default connect(mapStateToProps, { createPost })(Postform);

// export default Postform;
