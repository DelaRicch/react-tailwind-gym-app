import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/Types";
import { motion } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <AiOutlineHome className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      " nesciunt hic fugiat veritatis ex quaerat excepturi asperiores porro illum, expedita atque est dolores officia blanditiis maiores recusandae!",
  },
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolor? Liberotemporibus nesciunt hic fugiat veritatis!",
  },
  {
    icon: <HiOutlineAcademicCap className="h-6 w-6" />,
    title: "Experts and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur excepturi asperiores porro illum, expedita atque est dolores officia blanditiis maiores recusandae!",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText> MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            quidem cumque, non magnam tempora possimus aliquam accusamus in ex
            dolor, velit recusandae perferendis illo harum totam rem itaque
            veniam laboriosam deserunt.
          </p>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            src={BenefitsPageGraphic}
            alt="Benefit page graphic"
            className="mx-auto"
          />
          <div className="">
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                error quas eos, nulla animi quae dignissimos maiores soluta
                aliquid vel temporibus, quisquam veniam iure. Dolore.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                hic harum nostrum ipsa, dolorum nam fugiat ipsam. Eaque
                voluptatibus doloribus asperiores.
              </p>
            </motion.div>
            <div className="relative mt-16 ">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
