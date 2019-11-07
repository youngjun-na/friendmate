import React from 'react';

export default class CommentCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: 1,
      post_id: 1,
    };
  }

  render() {
    return(
      <div className="c-c">
        <textarea className="c-ta" placeholder="Write a comment..."/>
      </div>
    );
  }
}