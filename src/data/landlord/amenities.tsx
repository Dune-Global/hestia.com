import {
  WifiIcon,
  TVIcon,
  AcIcon,
  PoolIcon,
  OutdoorDiningIcon,
  GymIcon,
  FirstAidIcon,
  FireExtinguisherIcon,
  SmokeAlarmIcon,
} from "../../../public/assets/icons";

export const amenitiesData = [
  {
    id: "1",
    bottomText: "Wifi",
    svg: <WifiIcon />,
    clickable: true,
  },
  {
    id: "2",
    bottomText: "TV",
    svg: <TVIcon />,
    clickable: true,
  },
  {
    id: "3",
    bottomText: "Air conditioning",
    svg: <AcIcon />,
    clickable: true,
  },
  {
    id: "4",
    bottomText: "Pool",
    svg: <PoolIcon />,
    clickable: true,
  },
  {
    id: "5",
    bottomText: "Outdoor dining",
    svg: <OutdoorDiningIcon />,
    clickable: true,
  },
  {
    id: "6",
    bottomText: "Exercise",
    svg: <GymIcon />,
    clickable: true,
  },
];

export const safetyAmenitiesData = [
  {
    id: "1",
    bottomText: "First aid kit",
    svg: <FirstAidIcon />,
    clickable: true,
  },
  {
    id: "2",
    bottomText: "Smoke alarm",
    svg: <SmokeAlarmIcon />,
    clickable: true,
  },
  {
    id: "3",
    bottomText: "Fire extinguisher",
    svg: <FireExtinguisherIcon />,
    clickable: true,
  },
];
