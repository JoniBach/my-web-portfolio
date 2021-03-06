    /* 
    Each Object can take the following peramiters:  
    image: String
    title: String
    description: String
    href: String
    */
export const Data = [
    {
        title: "Logo Design",
        id: "LogoDesignCardData",
        textPosition: [50, 30],
        textColor: 'white',
        textAlign: 'center',
        content: [
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/logos/BirdStash.png', title: 'Movember 2020', description: 'Designed to celebrate Movember 2020 (along with my first ever attempt to grow a mustache).', href: 'https://uk.movember.com/https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/LoFi+FinTech+Dashboard+01+wireframes.png' },
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/logos/GolfFIreWhite.png', title: 'Hot Ace', description: 'An alternative concept for a new golf championship Logo or golfing brand', href: '' },
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/logos/FlyingBirdWhite.png', title: 'Swift Air', description: 'A logo concept themed for a new/existing airline', href: '' },
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/logos/NeonBoat.png', title: 'Dockyard Night Club', description: 'A neon style logo for a nightclub with a sailing / nautical theme', href: '' },
        ]
    },
    {
        title: "Grad Show",
        id: "GradshowData",
        textPosition: [70, 30],
        textColor: 'white',
        textAlign: 'right',
        content: [
            { type:'iframe', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/trumpbot.png', title: 'Trump Bot', description: 'A simulacrum of Donald Trump driven by a TensorFlow Neural Network, animated in Maya, rendered with Arnold', href: 'https://vimeo.com/317655498' },
        ]
    },
    {
        title: "Fine Art",
        id: "DocumentaryCardData",
        textPosition: [30, 30],
        textColor: 'white',
        textAlign: 'left',
        content: [
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Hearing_Ear.jpg', title: 'Sine Ear', description: 'A rendering of the human anatomy represented by data made with ProcessingPY, lazer cutter, darkroom exposures', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Hearing_Ear.jpg' },
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Sight_Eye.jpg', title: 'Sine Eye', description: 'A rendering of the human anatomy represented by data made with ProcessingPY, lazer cutter, darkroom exposures', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Sight_Eye.jpg' },
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Touch_finger.jpg', title: 'Sine Finger', description: 'A rendering of the human anatomy represented by data made with ProcessingPY, lazer cutter, darkroom exposures', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Touch_finger.jpg' },
        ]
    },
    {
        title: "Animations",
        id: "AnimationCardData",
        textPosition: [70, 8],
        textColor: 'black',
        textAlign: 'right',
        content: [
            { type:'iframe', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/butterfly.png', title: 'Butterfly', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://youtu.be/R1_Z7zR6drM', embedCode: 'R1_Z7zR6drM' },
            { type:'iframe', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/parkinglot.png', title: 'Parking Lot', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=PoLar73R4Zw', embedCode: 'PoLar73R4Zw' },
            { type:'iframe', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/rainbowcar.png', title: 'Rainbow Rd', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=Fu2tjMiWqGU', embedCode: 'Fu2tjMiWqGU' },
            { type:'iframe', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/rainbowman.png', title: 'Rainbow Man', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=TD0s8BGV2fQ&feature=youtu.be', embedCode: 'TD0s8BGV2fQ' },
            { type:'iframe', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/strut.png', title: 'Strut Fur', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=ncLb4wvw9uY', embedCode: 'ncLb4wvw9uY' },
            { type:'iframe', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/wateralien.png', title: 'Fluid Alien', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=Wo40N4g04QI', embedCode: 'Wo40N4g04QI' },
        ]
    },
    {
        title: "Architecture",
        id: "ArchitectureCardData",
        textPosition: [50, 30],
        textColor: 'black',
        textAlign: 'center',
        content: [
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Two+Foxes+Complete+Sides.jpg', title: 'Two Foxes', description: 'A rendering of a building concept made to learn modeling in Cinema4D', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Two+Foxes+Complete+Sides.jpg' },
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Three+Spikes+Final.jpg', title: 'Three Spikes', description: 'A rendering of a building concept made to learn modeling in Cinema4D', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Three+Spikes+Final.jpg' },
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Hotel+Building.jpg', title: 'Hotel Casino', description: 'A rendering of a building concept made to learn modeling in Cinema4D', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Hotel+Building.jpg' },
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/01+Canada+IG.jpg', title: '1 Canada Sq', description: 'An architectural rendering made using Cinema4D for the purpose of studying 3D reflections', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/01+Canada+IG.jpg' },
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/25+Canada+IG.jpg', title: '25 Canada Sq', description: 'An architectural rendering made using Cinema4D for the purpose of studying 3D reflections', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/25+Canada+IG.jpg' },
            { type:'image', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/BT+Tower.jpg', title: 'BT Tower', description: 'An architectural rendering made using Cinema4D for the purpose of studying 3D reflections', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/BT+Tower.jpg' },
        ]
    },
    {
        title: "Web Design",
        id: "WebDesignCardData",
        textPosition: [30, 40],
        textColor: 'black',
        textAlign: 'left',
        content: [
            { type:'document', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/LoFi+fintech+style+dashboard+Screenshot.png', title: 'FinTech Style Dash Wireframes', description: 'Low Fideliy Wire Frames to guide the design and implimentation of a FinTech style personal expenses dashboard Proof of Concept, made in Sketch', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/LoFi+FinTech+Dashboard+01+wireframes.png' },
            { type:'document', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/LoFi+jamescrookdev+Screenshot.png', title: 'jamescrookdev Wireframes', description: 'Low Fideliy Wire Frames to guide the design of this website, made in Sketch', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/my-react-portfolio+design+01.pdf' },
            { type:'document', image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/HIFI+jamescrookdev+Screenshot.png', title: 'jamescrookdev HIFI Design', description: 'High Fidelity Designs to guide the construction of this website, made in Sketch', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/my-react-portfolio+HiFi+01.pdf' },
        ]
    },
]
