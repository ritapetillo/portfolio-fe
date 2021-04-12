import { HiCode } from "react-icons/hi";
import {
  GiPineapple,
  GiPalmTree,
  GiPathDistance,
  GiPalm,
} from "react-icons/gi";
import { AiOutlineQuestion } from "react-icons/ai";
import { BiRun } from "react-icons/bi";

const Icon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "code":
      return <HiCode />;
    case "pineapple":
      return <GiPineapple />;
    case "run":
      return <BiRun />;
    case "problems":
      return <AiOutlineQuestion />;
    case "miami":
      return <GiPalmTree />;
    case "gps":
      return <GiPathDistance />;
    default:
      return <HiCode />;
  }
};

export default Icon;
