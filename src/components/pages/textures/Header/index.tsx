import { NextPage } from 'next'
import { Navbar } from '../../../globals/Navbar'
import styles from './Header.module.scss'

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  )
}

export { Header }