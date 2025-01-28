import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name:
        <input type="text" value={value} onChange={handleSearch} />
      </label>
    </div>
  );
};

export default SearchBox;
