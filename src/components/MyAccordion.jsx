import styles, { layout } from "../style";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const MyAccordion = () => (
  <>
    <div className="flex-1 flex flex-col">
      <h1
        className={`flex-1 ${styles.flexStart}font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[120.8px] leading-[75px] w-full1`}
      >
        LOREM IPSUMY DOLOR
      </h1>
    </div>
    <section className={layout.section}>
      <Accordion className="font-poppins font-semibold ss:text-[18px] text-[17.38px] text-white ss:leading-[0.1px] leading-[75px] w-full">
        <AccordionItem
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          header="LOREM IPSUMY DOLOR SIT AMET"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AccordionItem>

        <AccordionItem
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          header="LOREM IPSUMY DOLOR SIT AMET"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AccordionItem>

        <AccordionItem
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          header="LOREM IPSUMY DOLOR SIT AMET"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AccordionItem>

        <AccordionItem
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          header="LOREM IPSUMY DOLOR SIT AMET"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AccordionItem>

        <AccordionItem
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          header="LOREM IPSUMY DOLOR SIT AMET"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AccordionItem>

        <AccordionItem
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          header="LOREM IPSUMY DOLOR SIT AMET"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default MyAccordion;
