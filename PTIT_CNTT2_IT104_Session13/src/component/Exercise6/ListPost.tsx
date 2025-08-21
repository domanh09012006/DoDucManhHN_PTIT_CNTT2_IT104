import React, { Component } from "react";
import DetailPost from "./DetailPost";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface State {
  posts: Post[];
}

export default class ListPost extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "tai sao hoc ReactJS",
          content: "Hoc de di lam",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong ReactJS",
          content: "Giup truyen du lieu tu cha xuong con",
          author: "Linda",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>Danh sach</h2>
        {this.state.posts.map((post) => (
          <DetailPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
