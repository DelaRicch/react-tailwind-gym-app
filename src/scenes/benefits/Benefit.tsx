import { SelectedPage } from "@/shared/Types";
import { motion } from "framer-motion";
import { Link as AnchorLink } from "react-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};
const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 bg-primary-100 p-4">{icon}</div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        to={`#${SelectedPage.ContactUs}`}
        className="hover:text-secondary-500s cursor-pointer text-sm font-bold text-primary-500 underline"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
