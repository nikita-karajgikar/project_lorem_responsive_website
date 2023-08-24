import Image from 'next/image';
import loremIpsum from '../../public/lorem ipsum.svg';
import woman from '../../public/Woman.png';
import hug from '../../public/hug.svg';
import child from '../../public/child.png';
import styles from "../app/global.module.css";

export default function Intro() {
    return(
        <div>
            <div className="invisible lg:visible">
            <Image
                priority
                src={loremIpsum}
                alt="Lorem Ipsum"
                />
            </div>
            <div className= {`lg:hidden ${styles.intro_heading_mob}`}>
                LOREM IPSUM
            </div>
            <div className=" lg:grid lg:grid-cols-3 lg:gap-4 mt-12">
            <div>
                <div className="text-2xl font-bold">DOLOR SIT</div>
                <div className="mt-2 lg:m-0">
                    Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo.
                </div>
                <div className="mt-8">
                <Image
                    priority
                    src={hug}
                    alt="hug"
                />
                </div>
            </div>
            <div className="mt-20 lg:m-0">
                <div className="text-2xl font-bold">LOREM IPSUM DOLOR SIT</div>
                <div className="mt-2 lg:m-0">
                Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel nisl. Dignissim molestie amet purus felis egestas amet eget. Viverra malesuada ultricies nunc vel diam posuere mauris sociis maecenas. Aenean dui et nec ultrices libero lacus.
                </div>
                <div className="mt-8">
                <Image
                    priority
                    src={hug}
                    alt="hug"
                />
                </div>
            </div>
            <div className="mt-20 lg:m-0">
                <Image
                    src={woman}
                    alt="Woman"
                />
            </div>
            </div>
            <div className="mt-20 lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-8">
                <div></div>
                <div></div>
                <div>
                    <div className="text-2xl font-bold">LOREM IPSUM DOLOR SIT</div>
                    <div className="mt-2 lg:m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </div>
                    <div className="mt-8">
                    <Image
                        priority
                        src={hug}
                        alt="hug"
                    />
                    </div>
                </div>
            </div>
            <div className="mt-12 lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-8">
            <div>
                <div className="text-2xl font-bold">LOREM IPSUM </div>
                <div className="mt-2 lg:m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </div>
                <div className="mt-8">
                <Image
                    priority
                    src={hug}
                    alt="hug"
                />
                </div>
            </div>
            <div className="mt-20 lg:m-0">
                <div className="text-2xl font-bold">DOLOR SIT AMET </div>
                <div className="mt-2 lg:m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </div>
                <div className="mt-8">
                <Image
                    priority
                    src={hug}
                    alt="hug"
                />
                </div>
            </div>
            </div>
            <div className="mt-20 lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-8">
            <div></div>
            <div>
                <Image
                    priority
                    src={child}
                    alt="Child"
                />
            </div>
            <div className="mt-20 lg:m-0">
                <div className="text-2xl font-bold">LOREM IPSUM DOLOR</div>
                <div>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </div>
                <div className="mt-8">
                <Image
                    priority
                    src={hug}
                    alt="hug"
                />
                </div>
            </div>
            </div>
        </div>
    )
}