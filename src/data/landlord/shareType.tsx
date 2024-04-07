import {
  HouseIcon,
  PrivateIcon,
  SharedIcon,
} from "../../../public/assets/icons";

const accomodationTypeData = [
  {
    id: "1",
    text: "An entire place",
    bottomText: "Guests have the whole place to themselves.",
    svg: <HouseIcon />,
  },
  {
    id: "2",
    text: "A private room",
    bottomText: "Guests sleep in a private room but some areas may be shared.",
    svg: <PrivateIcon />,
  },
  {
    id: "3",
    text: "A shared room",
    bottomText: "Guests sleep in a room or common area that may be shared.",
    svg: <SharedIcon />,
  },
];

export default accomodationTypeData;
