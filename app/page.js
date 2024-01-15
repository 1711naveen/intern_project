import Image from 'next/image'
import styles from './page.module.css'
import Pages from './Components/page/Pages'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1>hello</h1>
      </div>
      <Pages />
    </main>
  )
}
