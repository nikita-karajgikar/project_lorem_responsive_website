import styles from "./global.module.css";
import Intro from '@/components/Intro';
import AboutUs from '@/components/AboutUs';
import Marquee from '@/components/Marquee';
import Info from '@/components/Info';
import FAQ from '@/components/FAQ';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="bg-black">
      <Header/>
      <div className={styles.main}>
        <Intro/>
      </div>
      <AboutUs/>
      <Marquee/>
      <div className={styles.main}>
        <Info/>
      </div>
      <FAQ/>
    </div>
  )
}
