import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls';
import s from './Counter.module.css';

class Counter extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
      }),
    ),
  };

  state = {
    value: 0,
    activeColorIdx: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      const isLastColorIdx =
        prevState.activeColorIdx === this.props.colors.length - 1;

      return isLastColorIdx
        ? {
            value: prevState.value + 1,
            activeColorIdx: 0,
          }
        : {
            value: prevState.value + 1,
            activeColorIdx: prevState.activeColorIdx + 1,
          };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      const isInitialColorIdx = prevState.activeColorIdx === 0;

      return isInitialColorIdx
        ? {
            value: prevState.value - 1,
            activeColorIdx: this.props.colors.length - 1,
          }
        : {
            value: prevState.value - 1,
            activeColorIdx: prevState.activeColorIdx - 1,
          };
    });
  };

  render() {
    const { value, activeColorIdx } = this.state;
    const { title, colors } = this.props;
    const { color } = colors[activeColorIdx];

    return (
      <div className={s.container}>
        <div className={s.info}>
          <div>
            <h3 className={s.title}>{title}</h3>
            <p className={s.text}>Count: {value}</p>
          </div>
          <span
            className={s.color}
            style={{
              backgroundColor: color,
            }}
          ></span>
        </div>
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;
