import Image from 'next/image';
import styles from "../app/global.module.css";


export default function Marquee() {
    return(
        <div className={styles.marquee}>
            <div className={styles.track}>
                <div className="text-white text-lg">
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span><span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span><span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span><span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span><span className="mx-6">LOREM IPSUM</span>
                    <span className="mx-6">LOREM IPSUM</span>
                </div>
            </div>
        </div>
    )
}