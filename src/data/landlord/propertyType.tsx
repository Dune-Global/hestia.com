import {
  HouseIcon,
  ApartmentIcon,
  HostelIcon,
} from "../../../public/assets/icons";

const buildingTypeData = [
  {
    id: "1",
    bottomText: "House",
    svg: <HouseIcon />,
    clickable: true,
  },
  {
    id: "2",
    bottomText: "Apartment",
    svg: <ApartmentIcon />,
    clickable: true,
  },
  {
    id: "3",
    bottomText: "Hostel",
    svg: <HostelIcon />,
    clickable: true,
  },
];

export default buildingTypeData;
