import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/team-work.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Participation Benifits",
  desc: `
        Participating in the Maze Master robotic battle
        competition offers several benefits for school 
        and university students interested in robotics.
        `,
  image: benefitOneImg,
  bullets: [
    {
      title: "Skill Development",
      desc: `
      Gain hands-on experience in robotics, programming, and engineering
      `,
      icon: <FaceSmileIcon />,
    },
    {
      title: "Teamwork and Collaboration",
      desc: "Enhance collaboration, communication, and problem-solving skill.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Networking and Exposure",
      desc: `Connect with peers, mentors, and industry professionals,
       and explore future career opportunities`,
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
