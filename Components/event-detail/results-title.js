import Button from '@material-ui/core/Button'
import classes from './results-title.module.css';
import Link from 'next/link'

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button variant='contained' color='primary' ><Link href='/events'>Show all events</Link></Button>
    </section>
  );
}

export default ResultsTitle;