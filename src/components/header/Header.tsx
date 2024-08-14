import styles from './header.module.sass'
import { SearchBar } from './SearchBar'

export default function Header() {
  return (
    <header className={styles.header}>
      <SearchBar />
    </header>
  )
}
