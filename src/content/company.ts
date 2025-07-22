import step1Image from "../assets/timeline/step1.webp";
import step2Image from "../assets/timeline/step2.webp";
import step3Image from "../assets/timeline/step3.webp";
import step4Image from "../assets/timeline/step4.webp";
import member from "../assets/team/member2.webp";
import museWinnerImage from "../assets/timeline/muse_winner.png";
import goAeroLogo from "../assets/timeline/goaeroLogo.png";
import skyTechLogo from "../assets/SkyTechTransparent.png"

import TrophyIcon from "../assets/icons/trophy.svg?raw";
import RocketIcon from "../assets/icons/rocket.svg?raw";
import LightBulbIcon from "../assets/icons/lightbulb.svg?raw";
import BeakerIcon from "../assets/icons/beaker.svg?raw";
import WrenchIcon from "../assets/icons/wrench-screwdriver.svg?raw";
import CubeIcon from "../assets/icons/cube.svg?raw";
import UserPlusIcon from "../assets/icons/user-plus.svg?raw";


let bannerContent = {
    header: "Where Innovation Takes Flight",
    description: "Reshaping urban air mobility through advanced eVTOL innovation",
};

let focusText = {
    // header: "Transforming Urban Air Mobility with Next-Generation eVTOL Technology",
    description:
        "Founded in Toronto in 2021, we specialize in next generation eVTOL solutions designed\
         to transform urban mobility.<br> With a focus on safety, sustainability, and intelligent\
         design, our mission is to make personal air transportation more accessible, efficient,\
         and environmentally responsible.",
};
let focusText2 = {
    description:
        "<strong>MOSTAVIO</strong> collaborates with leading investors, government agencies, and top-tier suppliers to advance our mission.<br>\
         Our strategic partnerships ensure we have the resources and \
		expertise needed to bring our vision to life.",
};

let featureContent = [
    {
        header: "15+",
        headerClass: "text-5xl mb-8",
        description: "Years of operation in the automotive industry",
    },
    {
        header: "80+",
        headerClass: "text-5xl mb-8",
        description: "Total years of combined aerospace experience",
    },
    {
        header: "1,000+",
        headerClass: "text-5xl mb-8",
        description: "Subscale flight tests",
    },
];

let jobList = [
    {
        title: "Firmware Engineer",
        location: "Toronto, ON",
        team: "Engineering",
        description:
            "We are looking for a firmware engineer to join our team in developing the future of urban air mobility.",
        link: "mailto:info@mostavio.com",
    },
    {
        title: "Senior Software Engineer",
        location: "Toronto, ON",
        team: "Engineering",
        description:
            "We are looking for a Senior Software Engineer to join our team and help us build the future of urban air mobility.",
        link: "mailto:info@mostavio.com",
    },
    {
        title: "Aerospace Engineer",
        location: "Toronto, ON",
        team: "Engineering",
        description:
            "We are seeking an Aerospace Engineer to help us design and develop our eVTOL aircraft.",
        link: "mailto:info@mostavio.com",
    },
];

// For reference

// const timeline = [
//     {
//         year: "2019",
//         title: "Founded by Ariane Doe",
//         description:
//             "Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia",
//         image: step1Image.src,
//         avatarImg: "/images/avatars/avatar.webp",
//         highlight: {
//             type: "customers",
//             text: "12 Satisfied",
//             link: { href: "customers.html", text: "Customers" },
//         },
//     },
//     {
//         year: "2020",
//         title: "Grown the team",
//         description:
//             "Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia",
//         image: step2Image.src,
//         highlight: {
//             type: "team",
//             text: "5 Developers joined the",
//             link: { href: "customers.html", text: "Team" },
//             members: [member.src, member.src, member.src],
//         },
//     },
//     {
//         year: "2021",
//         title: "Startup of the year",
//         description:
//             "Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia",
//         image: step3Image.src,
//         highlight: {
//             type: "companies",
//             text: "Worked with 3 world leading",
//             link: { href: "customers.html", text: "companies" },
//             clients: [
//                 airbusImage.src, brailleImage.src, ontarioImage.src,
//             ],
//         },
//     },
//     {
//         year: "2022",
//         title: "Founded by Bernard Ng",
//         description:
//             "Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia",
//         image: step4Image.src,
//         highlight: null,
//     },
// ];

const timeline = [
    {
        year: "2021",
        title: "MOSTAVIO Founded",
        description:
            "Founded with the ambition to revolutionize personal air mobility. Infrastructure development and strategic planning began.",
        // image: step1Image.src,
        // avatarImg: RocketIcon.src,
        avatar: RocketIcon,
        highlights: null,
    },
    {
        year: "2022",
        title: "MX1 Concept Designs Unveiled",
        description:
            "First concept designs of the MX1 eVTOL were revealed.",
        avatar: LightBulbIcon,
        image: step2Image.src,
        highlights: null,
    },
    {
        year: "2023",
        title: "Grown the team",
        description:
            "We expanded our team with new aerospace, mechanical, and software engineers.",
        // image: step2Image.src,
        avatar: UserPlusIcon,
        highlights: [{
            type: "team",
            text: "New Engineers joined",
            link: { href: "/company/#team", text: "Our Team" },
            images: [member.src, member.src, member.src],
        }],
    },
    {
        year: "2023",
        title: "MX1 Testing and Component Development",
        avatar: BeakerIcon,
        description:
            "Completed subscale testing and developed key components for MX1.",
        // image: step3Image.src,
        highlights: null,
    },
    {
        year: "2024",
        title: "Expanded with Prototype Assembly and new division",
        avatar: WrenchIcon,
        description:
            "MX1 prototype fully assembled. Launched Skytech division and became an official DJI enterprise dealer.",

        highlights: [
            {
                type: "companies",
                text: "Launched Skytech division",
                link: { href: "https://skyt.ca/", text: "Skytech", target: "_blank" },
                images: [
                    skyTechLogo.src
                ],
            },
        ],
    },
    {
        year: "2025",
        title: "Breakthrough Year",
        avatar: TrophyIcon,
        description:
            "Successful eVTOL flight test. Winner of GOAERO Competition Stage 1 and Muse Design Award for eVTOL \
             innovation. Recognized by Transport Canada as an RPAS Flight School. Published NSERC-backed research \
            with Centennial College.",
        // image: step4Image.src,
        highlights: [
            {
                type: "companies",
                text: "Winner of GOAERO & MUSE Awards",
                link: { href: "/news/mostavio-wins-muse-design-award", text: "Learn more" },
                images: [
                    museWinnerImage.src, goAeroLogo.src
                ]
            },
            {
                type: "customers",
                text: "Recognized by Transport Canada as an RPAS Flight School",
                link: { href: "https://skyt.ca/training-and-certification/", text: "Find out more", target: "_blank" },
            },
            {
                type: "customers",
                text: "Published NSERC-backed research with Centennial College",
                link: { href: "customers.html", text: "Link" },
            }
        ],
    },

];


export {
    bannerContent,
    focusText,
    focusText2,
    featureContent,
    jobList,
    timeline,
};