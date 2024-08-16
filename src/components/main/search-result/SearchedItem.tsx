import { Button, Typography } from "@mui/material";
import type { IRepoItem } from "../../../types/api.types";
import styles from "./search.module.sass";
import { TypeItemInTable } from "../../../types/repoApp.types";

interface IRepoItemProps {
  item: IRepoItem;
  trigger: (url: string) => any;
}

export function SearchedItem({ item, trigger }: IRepoItemProps) {

  //отделяем от обекта ключи, которые не нужны в таблице
  const itemDivided: TypeItemInTable = {
    name: item.name,
    language: item.language,
    forks: item.forks,
    stargazers_count: item.stargazers_count,
    //оставил только дату, в формате, как было на макете
    updated_at: item.updated_at
      .split("T")[0]
      .replace("-", ".")
      .replace("-", "."),
  };

  //запрос на сервер, для получения данных по репозиторию
  const handleGetRepo = async () => {
    window.scrollTo(0, 0);
    await trigger(item.full_name);
  };

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
        <Typography key={key} className={styles.itemValue} component="p">
          {/* перебор значений и их вывод */}
          {(itemDivided[key as keyof TypeItemInTable] ||
            itemDivided[key as keyof TypeItemInTable] === 0)
            ? itemDivided[key as keyof TypeItemInTable]
            : "Нет данных"}
        </Typography>
      ))}
    </Button>
  );
}
