import React from 'react';

class Example1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Вы нажали ${this.state.count} раз`;
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    document.title = `Vy najali ${this.state.count} raz`;
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    document.title = `Siz ${this.state.count} marta bosdingiz`;
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        <p>Вы нажали {this.state.count} раз</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Нажми на меня
        </button>
      </div>
    );
  }
}
export default Example1;
