import PropTypes from 'prop-types';
import Counter from './Counter';
import colors from '../../../colors.json';
import s from './CardList.module.css';

function CardList({ cards }) {
  return (
    <ul className={s.list}>
      {cards.map(({ id, title }) => (
        <li key={id}>
          <Counter title={title} colors={colors} />
        </li>
      ))}
    </ul>
  );
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default CardList;
