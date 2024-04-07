import {
  MaleIcon,
  FemaleIcon,
  BothGendersIcon,
} from "../../../public/assets/icons";

const genderTypeData = [
  {
    id: "1",
    bottomText: "Male",
    svg: <MaleIcon />,
    clickable: true,
  },
  {
    id: "2",
    bottomText: "Female",
    svg: <FemaleIcon />,
    clickable: true,
  },
  {
    id: "3",
    bottomText: "Both",
    svg: <BothGendersIcon />,
    clickable: true,
  },
];

export default genderTypeData;
