import Image from 'next/image'
import styles from './page.module.css'
import Pages from './Components/page/Pages'
import Tables from './Components/Table/Tables'
import Forms from './Components/Form/Forms'
import Card from './Components/Card/Card'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1>hello</h1>
      </div>
      <Pages />
      <Tables/>
      <Forms/>
      <Card/>
    </main>
  )
}
