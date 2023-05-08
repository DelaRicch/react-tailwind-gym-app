import { ClassType, SelectedPage } from "@/shared/Types";
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.png";
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ut nisi, veniam ipsum est eligendi necessitatibus facere, vero laborum rem, optio quasi minima? Inventore, maxime!",
    image: Image1,
  },
  {
    name: "Ab Core Classes",

    image: Image2,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ut nisi, veniam ipsum est eligendi necessitatibus facere, vero laborum rem, optio quasi minima? Inventore, maxime!",
    image: Image3,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ut nisi, veniam ipsum est eligendi necessitatibus facere, vero laborum rem, optio quasi minima? Inventore, maxime!",
    image: Image4,
  },
  {
    name: "Adventure Classes",

    image: Image5,
  },
  {
    name: "Reshape Classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ut nisi, veniam ipsum est eligendi necessitatibus facere, vero laborum rem, optio quasi minima? Inventore, maxime!",
    image: Image5,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              impedit fuga doloremque exercitationem, ex, magnam asperiores
              earum animi quidem voluptatibus aperiam fugit tenetur quae
              recusandae?
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="whitespace-no-wrap w-[2800px]">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
