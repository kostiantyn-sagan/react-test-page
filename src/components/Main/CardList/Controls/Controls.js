import PropTypes from 'prop-types';
import s from './Controls.module.css';

function Controls({ onDecrement, onIncrement }) {
  return (
    <div className={s.container}>
      <button type="button" className={s.decrement} onClick={onDecrement}>
        minus
      </button>
      <button type="button" className={s.increment} onClick={onIncrement}>
        plus
      </button>
    </div>
  );
}

Controls.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Controls;
