import React, { Component } from 'react';
import axios from 'axios';

class TestApiComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = async () => {
    await axios
      .get('http://3.39.6.41:8080/settings')
      .then((res) => {
        console.log(res);
      })
      .catch((res) => console.log(res));
  };

  render() {
    return <div>Main 페이지</div>;
  }
}

export default TestApiComponet;
