import { NextPage } from 'next'
import { Navbar } from '../../../globals/Navbar'
import styles from './Header.module.scss'

interface HeaderProps {
  author: string,
  name: string,
  thumb: string
}

const Header: NextPage<HeaderProps> = ({ author, name, thumb }) => {
  return (
    <header className={styles.header} style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${thumb}') no-repeat`}}>
      <Navbar />
      <div className="container">
        <div className={styles.hero}>
          <h4>
            By: {author}
          </h4>
          <h1>
            {name}
          </h1>
        </div>
      </div>
    </header>
  )
}

export { Header }