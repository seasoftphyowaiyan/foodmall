import React from "react";

class AllData extends React.Component {
  constructor() {
    super();
    this.state = {
        shops: [],
        order: {
            items: [],
            total: 0,
        },
        emptyText: "Cart is Empty!",
    };
  }
  componentDidMount() {
    fetch("http://yeemon-food.herokuapp.com/api/shop-lists")
      .then(res => res.json())
      .then(shops => this.setState({ shops: shops }));

    // fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    //   .then(res => res.json())
    //   .then(posts => this.setState({ barList: posts }));
  }
  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/users/1/posts")
  //       .then(res => res.json())
  //       .then(posts => this.setState({ barList: posts }));
  //   }
  render() {
    return;
  }
}

export default AllData;
