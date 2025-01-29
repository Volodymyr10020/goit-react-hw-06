import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={handleSearch} />
      </label>
    </div>
  );
};

export default SearchBox;
