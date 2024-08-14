export interface IReposQuery extends Record<string, string> {
  q: string;
  page: string;
  per_page: string;
}

export type IReposSortQuery = {
  sort?:string;
  order?: "desc" | "asc"
} | null

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

export interface IReposResponse {
  items_count: number;
  items: IRepoItem[];
}
