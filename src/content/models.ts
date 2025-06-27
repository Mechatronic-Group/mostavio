
import BatteryIcon from "../assets/icons/Battery.png";
import SpeedIcon from "../assets/icons/Speed.png";
import TicketIcon from "../assets/icons/Ticket.png";
import ChargingStationIcon from "../assets/icons/ChargingStation.png";

let mx1Banner = {
    header: "MX1 ",
    tagline:
        "Introducing the Prototype",
    description:
        "Our next generation eVTOL prototype is designed to redefine urban commuting.<br> With seating for <strong>2–3 passengers</strong>,\
         MX1 combines sleek design with <strong>AI-powered navigation</strong>, <strong>real-time collision avoidance</strong>, and advanced safety systems. ",
};


let aeroBanner = {
    header: "Aeroguardian",
    tagline:
        "Built for Critical Missions",
    description: "Designed for emergency response and rapid intervention. As a GOAERO Stage 1 Winner, Aeroguardian is built to meet the demands of high-stakes scenarios.\
     With the ability to carry up to 160 kg, it ensures fast and safe transport of patients, organs, and life-saving supplies from remote or high-risk zones. "
};


let ultralightBanner = {
    header: "Ultralight",
    tagline:
        "Personal Flight for Rural Exploration",
    description: "MOSTAVIO’s Ultralight is a single passenger eVTOL designed for personal recreational use in rural environments. With a lightweight\
     frame compliant with FAA Part 103 and Transport Canada ultralight standards, it offers a safe and simple solution for off-grid flight. Perfect for scenic flights and off-grid adventures—coming soon to elevate your outdoor experience. "
};

let featureContent = [
    {
        icon: SpeedIcon,
        header: "150 mph",
        preHeader: "Top Speed",
    },
    {
        icon: BatteryIcon,
        header: "200 miles",
        preHeader: "Maxiumum Range",
    },
    {
        icon: ChargingStationIcon,
        header: "30 min to full",
        preHeader: "Charging Time",
    },
    {
        icon: TicketIcon,
        header: "1 Passenger",
        preHeader: "Capacity",
    },
];

// let featureContent2 = [
// 	{
// 		icon: ChipIcon,
// 		header: "Our cutting-edge eVTOL aircraft merges sleek design with advanced engineering. ",
// 	},
// 	{
// 		icon: NaturalIcon,
// 		header: "Our cutting-edge eVTOL aircraft merges sleek design with advanced engineering. ",
// 	},
// 	{
// 		icon: SpeedIcon,
// 		header: "Our cutting-edge eVTOL aircraft merges sleek design with advanced engineering. ",
// 	},
// ];

let focusText1 = {
    header: "Revolutionary Design",
    description:
        "Our eVTOL aircraft features an angular, geometric design that’s modern and sleek, ensuring both aesthetics and aerodynamics. \
		The carbon fiber exterior and Kevlar® battery cover guarantee durability and lightweight performance.",
};

let focusText2 = {
    header: "Advanced Materials",
    description:
        "Our commitment to innovation extends to the materials we use. The exterior is constructed from carbon fiber, known for its high \
		strength-to-weight ratio and durability. Inside, Kevlar® components provide additional safety and resilience. These advanced materials \
		not only enhance performance but also contribute to the aircraft's overall sustainability by reducing weight and improving efficiency.",
};

let focusText3 = {
    header: "Designed To Be Safe",
    description:
        "Safety is our top priority. Our eVTOL aircraft is equipped with a state-of-the-art autopilot system that ensures a smooth, stable flight \
		experience. The aircraft also features redundant systems, including multiple batteries and motors, to ensure maximum safety and reliability.",
};

// let focusText4 = {
// 	header: "Sustainable Aviation",
// 	description:
// 		"Our eVTOL is designed with the environment in mind. Utilizing electric propulsion and sustainable materials, we aim to reduce \
// 		carbon footprints and noise pollution, promoting a cleaner and quieter urban environment.",
// };

// let focusText5 = {
// 	header: "Shipping Begins 2025",
// 	description:
// 		"Join the future of urban air mobility by preordering your MOSTAVIO eVTOL. Secure your place in line and be among the first to \
// 		experience the ultimate in personal transportation. Our eVTOL aircraft is priced at $250,000. Early adopters can enjoy special \
// 		financing options and priority delivery.",
// };

export {
    mx1Banner,
    aeroBanner,
    ultralightBanner,
    featureContent,
    focusText1,
    focusText2,
    focusText3,
    // focusText4,
    // focusText5,
};