import PropTypes from 'prop-types';
import Container from '../../Container';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={s.section}>
      <Container>
        {title && <h2 className={s.title}>{title}</h2>}
        {children}
      </Container>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
