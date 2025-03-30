import css from './SearchBox.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  return (
    <div className={clsx(css.searchBox, 'container')}>
      <label htmlFor='search'>Find contacts by name</label>
      <input
        type='text'
        id='search'
        placeholder='Search...'
        value={filterValue}
        onChange={event => dispatch(changeFilter(event.target.value))}
      ></input>
    </div>
  );
};

export default SearchBox;
