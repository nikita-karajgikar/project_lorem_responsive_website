"use client";
import styles from "../app/global.module.css";
import { SetStateAction, useState } from "react";
import plus_icon from "../../public/plus_icon.svg";
import minus_icon from "../../public/minus_icon.svg";
import Image from 'next/image';

const accordionData = {
    title: 'LOREM IPSUM DOLOR SIT AMET',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
    officia deserunt mollit anim id est laborum.`
  };

const { title, content } = accordionData;

export default function FAQ() {
    const [isActive, setIsActive] = useState(0);

    const openAccordion = (tabNum: SetStateAction<number>) => {
        if(isActive !== tabNum) {
            setIsActive(tabNum);
        }
        else {
            setIsActive(0);
        }
    }

    return (
        <div>
            <div className={styles.info_heading + " " + styles.faq_heading}>
                lorem ipsum dolor
            </div>
            <div className={styles.accordion}>
                <div className={styles.accordion_item}>
                    <div className={isActive === 1 ? styles.accordion_title_bg : styles.accordion_title} onClick={()=> {openAccordion(1)}}>
                        <div>{title}</div>
                        <div>{isActive === 1 ? <Image src={minus_icon} alt="Minus icon"/> : <Image src={plus_icon} alt="Plus icon"/>}</div>
                    </div>
                    {isActive === 1 && <div className={styles.accordion_content}>{content}</div>}
                </div>
                <div className={styles.accordion_item}>
                    <div className={isActive === 2 ? styles.accordion_title_bg : styles.accordion_title} onClick={()=> {openAccordion(2)}}>
                        <div>{title}</div>
                        <div>{isActive === 2 ? <Image src={minus_icon} alt="Minus icon"/> : <Image src={plus_icon} alt="Plus icon"/>}</div>
                    </div>
                    {isActive === 2 && <div className={styles.accordion_content}>{content}</div>}
                </div>
                <div className={styles.accordion_item}>
                    <div className={isActive === 3 ? styles.accordion_title_bg : styles.accordion_title} onClick={()=> {openAccordion(3)}}>
                        <div>{title}</div>
                        <div>{isActive === 3 ? <Image src={minus_icon} alt="Minus icon"/> : <Image src={plus_icon} alt="Plus icon"/>}</div>
                    </div>
                    {isActive === 3 && <div className={styles.accordion_content}>{content}</div>}
                </div>
                <div className={styles.accordion_item}>
                    <div className={isActive === 4 ? styles.accordion_title_bg : styles.accordion_title} onClick={()=> {openAccordion(4)}}>
                        <div>{title}</div>
                        <div>{isActive === 4 ? <Image src={minus_icon} alt="Minus icon"/> : <Image src={plus_icon} alt="Plus icon"/>}</div>
                    </div>
                    {isActive === 4 && <div className={styles.accordion_content}>{content}</div>}
                </div>
                <div className={styles.accordion_item}>
                    <div className={isActive === 5 ? styles.accordion_title_bg : styles.accordion_title} onClick={()=> {openAccordion(5)}}>
                        <div>{title}</div>
                        <div>{isActive === 5 ? <Image src={minus_icon} alt="Minus icon"/> : <Image src={plus_icon} alt="Plus icon"/>}</div>
                    </div>
                    {isActive === 5 && <div className={styles.accordion_content}>{content}</div>}
                </div>
                <div className={styles.accordion_item}>
                    <div className={isActive === 6 ? styles.accordion_title_bg : styles.accordion_title} onClick={()=> {openAccordion(6)}}>
                        <div>{title}</div>
                        <div>{isActive === 6 ? <Image src={minus_icon} alt="Minus icon"/> : <Image src={plus_icon} alt="Plus icon"/>}</div>
                    </div>
                    {isActive === 6 && <div className={styles.accordion_content}>{content}</div>}
                </div>
            </div>
        </div>
    )
  }