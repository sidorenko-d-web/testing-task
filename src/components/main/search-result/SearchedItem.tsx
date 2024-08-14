import { Button, Typography } from "@mui/material";
import { IRepoItem } from "../../../types/repo.types";
import styles from "./search.module.sass";

type TypeDivided =  Omit<IRepoItem, "full_name" | 'license' | 'description'>

export function SearchedItem({ item, trigger }: { item: IRepoItem, trigger: (url: string) => any}) {
  const itemDivided:TypeDivided = {
    name: item.name,
    language: item.language,
    forks: item.forks,
    stargazers_count: item.stargazers_count,
    updated_at: item.updated_at.split('T')[0].replace('-', '.').replace('-', '.'),
  };

  

  const handleGetRepo = async () => {
    await trigger(item.full_name)
  }


  return (
    <Button
      sx={{
        padding: 0,
        transition: "all .3s",
        ":hover": { background: "#f2f2f2" },
      }}
      className={styles.searchedItem}
      onClick={handleGetRepo}
    >
      {Object.keys(itemDivided).map((key: string) => (
        <Typography 
          key={key} 
          className={styles.itemValue} 
          component="p">
          {itemDivided[key as keyof TypeDivided]
            ? itemDivided[key as keyof TypeDivided]
            : "Нет данных"}
        </Typography>
      ))}
    </Button>
  );
}
