
import BatteryIcon from "../assets/icons/Battery.png";
import SpeedIcon from "../assets/icons/Speed.png";
import TicketIcon from "../assets/icons/Ticket.png";
import ChargingStationIcon from "../assets/icons/ChargingStation.png";

let bannerContent = {
    header: "Introducing the Prototype",
    description:
        "Our revolutionary eVTOL prototype combines sleek design with cutting-edge technology to redefine personal air travel. Engineered for efficiency and safety, this aircraft is set to transform the way you commute.",
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
    bannerContent,
    featureContent,
    focusText1,
    focusText2,
    focusText3,
    // focusText4,
    // focusText5,
};