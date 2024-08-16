import type { IRepoItem } from "./api.types";

//тип для объекта ответа с сервера, который содержит только те поля, которые нужны для таблицы
export type TypeItemInTable = Omit<IRepoItem, "full_name" | "license" | "description">