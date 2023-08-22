import styles, { layout } from "../style";
import { aboutUS, banner } from "../assets";

const AboutUS = () => (
  <>
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          ABOUT <br className="sm:block hidden" /> US.
        </h2>
        <div className="flex-col xl:px-0 sm:px-8 px-6">
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem <br className="sm:block hidden" />
            Lorem
          </p>
          <img
            src={aboutUS}
            alt="coke"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
      </div>
      <div className="flex-col xl:px-0 sm:px-8 px-6">
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
          Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
          faucibus aliquet quis sed sed. Phasellus non at lacus convallis
          elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
          cras leo.
        </p>
      </div>
    </section>
    <div className="flex-col xl:px-0 sm:px-8 px-6">
      <img
        src={banner}
        alt="coke"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>
  </>
);

export default AboutUS;
