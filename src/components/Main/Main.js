import { FaThLarge } from 'react-icons/fa';
import cards from '../../cards.json';
import Section from './Section';
import CardList from './CardList';
import s from './Main.module.css';

function Main() {
  return (
    <main>
      <Section title="Counters">
        <div className={s.container}>
          <FaThLarge className={s.icon} size="18px" />
          <p className={s.text}>Card</p>
        </div>
        <CardList cards={cards} />
      </Section>
    </main>
  );
}

export default Main;
