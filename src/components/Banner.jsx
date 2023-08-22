import { bottomImg1, icon3, icon4, barChartCircle } from "../assets";
import styles, { layout } from "../style";

const Banner = () => (
  <>
    <div className={`flex-1 ${styles.flexCenter} flex-1 flex flex-col`}>
      <h1
        className={`flex-1 ${styles.flexCenter}font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[120.8px] leading-[75px] w-full1`}
      >
        LOREM IPSUMY
        <br className="sm:block hidden" /> DOLOR SET
      </h1>
    </div>
    <section id="product" className={layout.sectionReverse}>
      <div className="flex-col xl:px-0 sm:px-8 px-6">
        <h1 className="font-poppins font-semibold ss:text-[18px] text-[17.38px] text-white ss:leading-[0.1px] leading-[75px] w-full">
          LOREM IPSUMY DOLOR
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Neque venenatis
          mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet
          quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse
          tincidunt congue sem turpis. Nulla eu lorem cras leo.
        </p>
        <div
          className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
          <img
            src={icon3}
            alt="star"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      </div>
      <div className="flex-col xl:px-0 sm:px-8 px-6">
        <h1 className="font-poppins font-semibold ss:text-[18px] text-[17.38px] text-white ss:leading-[0.1px] leading-[75px] w-full">
          DOLOR SIT AMET
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Neque venenatis
          mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet
          quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse
          tincidunt congue sem turpis. Nulla eu lorem cras leo.
        </p>
        <div
          className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
          <img
            src={icon4}
            alt="star"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      </div>
    </section>
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-8 px-6`}
      >
        <img
          src={bottomImg1}
          alt="bottom"
          className={`flex-1 ${styles.flexCenter} w-[50%] h-[50%] relative z-[5]`}
        />
      </div>
      <div className="flex-col xl:px-0 sm:px-8 px-6">
        <h1 className="font-poppins font-semibold ss:text-[18px] text-[17.38px] text-white ss:leading-[0.1px] leading-[75px] w-full">
          DOLOR SIT DOLOR
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>
        <div
          className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
          <img
            src={barChartCircle}
            alt="star"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      </div>
    </section>
  </>
);

export default Banner;
