
import NaturalIcon from "../assets/icons/Natural.png";
import ChipIcon from "../assets/icons/Chip.png";
import PaperPlain from "../assets/icons/paper-plane.svg";

let focusText1 = {
    header: null,
    description:
        "At <strong>MOSTAVIO</strong>, we are at the forefront of urban transportation innovation.<br> Our mission is to provide a seamless, eco-friendly, \
		and efficient air travel experience through groundbreaking electric Vertical Take-Off and Landing (eVTOL) technology. \
		Join us as we redefine the skies.",
};

let focusText2 = {
    header: "A New Era in Urban Mobility",
    description: [
        "<strong>MOSTAVIO</strong> envisions a future where air travel isn't just for airports or long distances. With our innovative 2-3 passenger eVTOL (electric Vertical Take-Off and Landing) aircraft, we’re making short-range air mobility accessible, sustainable, and practical. \
		Our mission is simple: to create smarter, greener ways to navigate cities and suburbs, while setting a new standard for safe and efficient air transportation.",
    ],
    link: "/aircrafts",
};
let focusText3 = {
    header: "Mastering the Art of Autonomous Flight",
    description:
        "Our eVTOL showcases the evolution of self-piloted aircraft, blending advanced technology with precision design. Focused on systems like AI-powered navigation, real-time collision avoidance, and extensive safety redundancies, it highlights how these innovations are shaping the future of aviation. \
		With applications in transportation, logistics, and urban mobility, this resource explores the balance between efficiency, reliability, and regulatory progress in autonomous flight.",
    link: "/aircrafts",
};

let focusText4 = {
    header: "Safety. Simplicity. Sustainability.",
    link: "/aircrafts",
};

let featureContent = [
    {
        icon: ChipIcon,
        header: "First-Principle Design",
        description:
            "Every system is built around what works, eliminating unnecessary complexity to create a seamless, intuitive, and reliable flight experience.",
    },
    {
        icon: NaturalIcon,
        header: "Extensive Redundancy Systems",
        description:
            "From backup power systems to fail-safe controls, our aircraft ensures continuous operation even in the rare case of component failure.",
    },
    {
        icon: PaperPlain,
        header: "Sustainability with Zero Emissions",
        description:
            "Powered entirely by electric energy, MOSTAVIO’s eVTOL operates without producing emissions, making it a cleaner choice for the environment and urban airspaces.",
    },
];

let focusText5 = {
    header: "Cut Your Commute Time Dramatically",
    description:
        "Imagine turning a 45-minute drive into a swift 10-minute flight. MOSTAVIO's advanced eVTOL technology offers \
		unparalleled efficiency, allowing you to bypass traffic and reach your destination faster than ever. Experience \
		the freedom of urban air mobility and reclaim your valuable time.",
    link: "/aircrafts",
};

// let featureContent = [
// 	{
// 		icon: ChipIcon,
// 		header: "Our eVTOL aircraft feature smart chips for seamless and safe flights.",
// 	},
// 	{
// 		icon: NaturalIcon,
// 		header: "Built with sustainable materials and zero-emission technology, our eVTOL is kind to the planet.",
// 	},
// 	{
// 		icon: PaperPlain,
// 		header: "Experience rapid, efficient travel with our high-speed eVTOL aircraft.",
// 	},
// ];

export {
    focusText1,
    focusText2,
    focusText3,
    focusText4,
    focusText5,
    featureContent,
};