//объект, который содержит в себе поля для запроса и может быть передан в URLSearchParams
export interface IReposQuery extends Record<string, string> {
  q: string;
  page: string;
  per_page: string;
}

//часть запроса с указанием сортировки и очереди
export type TypeReposSortQuery = {
  sort?:string;
  order: TypeOrder
} | null

//варианты сортировки
export type TypeOrder = 'desc' | 'asc'


//ответ от сервера - один репозиторий(гит предлагает свои типы, 
//но они имеют не нужную обертку и много не нужных полей)
export interface IRepoItem {
  language: string;
  name: string;
  stargazers_count: number;
  updated_at: string;
  full_name: string;
  forks: number;
  license: {
    name: string
  };
  description: string

}

//ответ от сервера - поиск по всем репозиториям
export interface IReposResponse {
  total_count: number;
  items: IRepoItem[];
}