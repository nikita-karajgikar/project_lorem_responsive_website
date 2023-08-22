import styles from "../style";
import {
  topLeftImg,
  bottomImg,
  usersPlus,
  icon,
  target,
  icon1,
  cpuChip,
  icon2,
} from "../assets";

const Hero = () => {
  return (
    <>
      <div className="flex-1 flex flex-col">
        <h1
          className={`flex-1 ${styles.flexStart}font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[120.8px] leading-[75px] w-full1`}
        >
          LOREM IPSUMY
        </h1>
      </div>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div className="flex-col xl:px-0 sm:px-8 px-6">
          <h1 className="font-poppins font-semibold ss:text-[18px] text-[17.38px] text-white ss:leading-[0.1px] leading-[75px] w-full">
            DOLOR SIT
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
            Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
            faucibus aliquet quis sed sed. Phasellus non at lacus convallis
            elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
            cras leo.
          </p>
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <img
              src={usersPlus}
              alt="star"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
        </div>

        <div className="flex-col xl:px-0 sm:px-8 px-6">
          <h1 className="font-poppins font-semibold ss:text-[18px] text-[17.38px] text-white ss:leading-[0.1px] leading-[75px] w-full">
            LOREM IPSUMY DOLOR SIT
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel
            nisl. Dignissim molestie amet purus felis egestas amet eget. Viverra
            malesuada ultricies nunc vel diam posuere mauris sociis maecenas.
            Aenean dui et nec ultrices libero lacus.
          </p>
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <img
              src={icon}
              alt="star"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
        </div>

        <div className="flex-col xl:px-0 sm:px-8 px-6">
          <img
            src={topLeftImg}
            alt="coke"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
      </section>
      <div className={`flex-1 ${styles.flexEnd} flex-col xl:px-0 sm:px-8 px-6`}>
        <h1
          className={`flex-1 ${styles.flexEnd} font-poppins font-semibold ss:text-[18px] text-[17.38px] text-white ss:leading-[0.1px] leading-[75px]`}
        >
          LOREM IPSUMY DOLOR SIT
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
            src={target}
            alt="star"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      </div>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div className="flex-col xl:px-0 sm:px-8 px-6">
          <h1 className="font-poppins font-semibold ss:text-[18px] text-[17.38px] text-white ss:leading-[0.1px] leading-[75px] w-full">
            LOREM IPSUMY
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <img
              src={icon1}
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
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <img
              src={cpuChip}
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
            src={bottomImg}
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
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <img
              src={icon2}
              alt="star"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
