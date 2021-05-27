import Counter from '../Counter/Counter';
import style from  './footer.module.css';

function Footer({countOfDone}) {

  return (
    <footer className='pt-5'>
      <Counter />
    </footer>
  )
}

export default Footer