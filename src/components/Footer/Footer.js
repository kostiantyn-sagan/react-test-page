import Container from '../Container';
import s from './Footer.module.css';

function Footer() {
  return (
    <footer className={s.pageFooter}>
      <Container>
        <p className={s.copyright}>footer 2021</p>
      </Container>
    </footer>
  );
}

export default Footer;
