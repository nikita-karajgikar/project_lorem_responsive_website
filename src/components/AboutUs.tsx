import Image from "next/image";
import logo from "../../public/logo.svg";
import styles from "../app/global.module.css";

export default function AboutUs() {
    return (
      <div className={styles.about_us}>
        <div className={styles.about_us_main + " lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-12"}>
            <div className="hidden lg:block">
                <div className={styles.about_us_left}>
                    ABOUT
                </div>
                <div className={styles.about_us_left}>
                    US
                </div>
                <div className="my-3">
                    Lorem
                </div>
                <div className="mb-3">
                    Lorem
                </div>
            </div>

            <div className="lg:hidden">
                <div className={`lg:hidden ${styles.about_us_heading_mob}`} >
                    LOREM IPSUM
                </div>
                <div className="my-4">Instagram</div>
                <div className="mb-2">Linkedin</div>
            </div>
        
            <div className={styles.about_us_right}>
                Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel nisl. Dignissim molestie amet purus felis egestas amet eget. Viverra malesuada ultricies nunc vel diam posuere mauris sociis maecenas. Aenean dui et nec ultrices libero lacus.
            </div>
            </div>
      </div>
    )
  }