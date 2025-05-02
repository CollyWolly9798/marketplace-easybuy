import fingerPrint from '../../../assets/img/icons/fingerprint.svg';

const FiltersButton = () => {
  return (
    <li>
      <a href='!#'>
        <img src={fingerPrint} alt='Saved filters' title='Saved filters' />
      </a>
    </li>
  );
};

export default FiltersButton;
