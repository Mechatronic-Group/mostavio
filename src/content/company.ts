
import museWinnerImage from "../assets/timeline/muse_winner.png";
import goAeroLogo from "../assets/timeline/goaeroLogo.png";
import skyTechLogo from "../assets/SkyTechTransparent.png"


// Assets for v2
import RedDotAward from "../assets/v2/company/RedDotAward.png";


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
        title: "HR Manager",
        location: "Toronto, ON",
        team: "Administration and Support",
        description:
            "Manage recruitment and onboarding processes \
            Develop and implement HR policies and procedures \
            Foster a positive work environment and company culture.",
        link: "mailto:info@mostavio.com",
    },
];

// For reference


const timeline = [
    {
        year: "2021",
        title: "MOSTAVIO Founded",
        description:
            "Founded with the ambition to revolutionize personal air mobility. Infrastructure development and strategic planning began.",
        highlights: null,
    },
    {
        year: "2022",
        title: "MX1 Concept Designs Unveiled",
        description:
            "First concept designs of the MX1 eVTOL were revealed.",
        highlights: null,
    },
    {
        year: "2023",
        title: "Grown the team",
        description:
            "We expanded our team with new aerospace, mechanical, and software engineers.",
    },
    {
        year: "2023",
        title: "MX1 Testing and Component Development",
        description:
            "Completed subscale testing and developed key components for MX1.",
        highlights: null,
    },
    {
        year: "2024",
        title: "Expanded with Prototype Assembly and new division",
        description:
            "MX1 prototype fully assembled. Launched Skytech division and became an official DJI enterprise dealer.",

        highlights: [
            {
                text: "Launched Skytech division.",
                link: { href: "https://skyt.ca/", text: "Find Out More", target: "_blank" },
                images: [
                    skyTechLogo.src
                ],
            },
        ],
    },
    {
        year: "2025",
        title: "Breakthrough Year",
        description:
            "Successful eVTOL flight test. Winner of GOAERO Competition Stage 1 and Muse Design Award for eVTOL \
             innovation. Recognized by Transport Canada as an RPAS Flight School. Published NSERC-backed research \
            with Centennial College.",
        highlights: [
            {
                text: "Check our news section to find out more.", link: { href: "/news/mostavio-wins-muse-design-award", text: "See Here", target: "_blank" },
                images: [
                    goAeroLogo.src, museWinnerImage.src, RedDotAward.src
                ]
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