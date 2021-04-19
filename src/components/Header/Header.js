import Container from '../Container';
import s from './Header.module.css';

function Header() {
  return (
    <header>
      <Container>
        <h1 className={s.title}>Header</h1>
      </Container>
    </header>
  );
}

export default Header;
