import { Button, InputBase } from "@mui/material";
import styles from "./header.module.sass";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setRequestString } from "../../redux/slices/requestStringSlice";
export function SearchBar() {
  const [searchString, setSearchString] = useState("");

  const dispatch = useAppDispatch();

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(setRequestString(searchString));
  };

  return (
    <form className={styles.searchForm}>
      <InputBase
        onChange={(e) => setSearchString(e.target.value)}
        maxRows={1}
        className={styles.searchBar}
        placeholder="Введите поисковый запрос"
      />
      <Button
        onClick={e => handleSearch(e)}
        className={styles.button}
        variant="contained"
        type="submit"
      >
        Искать
      </Button>
    </form>
  );
}
