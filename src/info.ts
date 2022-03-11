import FPIdeas from './assets/funprazdnik-ideas.jpg';
import FPMobile from './assets/funprazdnik-mobile.jpg';
import FPLandingModal from './assets/funprazdnik-landingModal.jpg';
import FPAbout from './assets/funprazdnik-about.png';
import GoalsMockup from './assets/goals-mockup.jpg';
import GoalsMain from './assets/goals-main.png';
import GoalsTasks from './assets/goals-tasks.jpg';
import GoalsVideo from './assets/goals-video.gif';
import VideoChatMockup from './assets/videoChat-mockup.png';
import VideoChatList from './assets/videoChat-chatlist.png';
import VideoChat from './assets/videoChat-chat.jpg';
import VideoChatCall from './assets/videoChat-call.jpg';
import TravellogMap from './assets/Travellog.png';
import TravellogLanding from './assets/Travellog4.jpg';
import TravellogMobile from './assets/Travellog5.jpg';
import TravellogAlbum from './assets/Travellog3.jpg';
import SmartCalcSplash from './assets/SmartCalcSplash.jpg';
import SmartCalcMain from './assets/SmartCalcMain.png';
import RaspberryMain from './assets/raspberry3.jpg';
import RaspberryItem from './assets/raspberry2.jpg';
import RaspberryAuth from './assets/raspberry4.png';
import RaspberryMobile from './assets/raspberry.jpg';
import SupportMain from './assets/supportMain.jpg';
import SupportList from './assets/supportList.jpg';
import SupportAuth from './assets/supportAuth.png';
import RecipeMockup from './assets/recipe.jpg';
import RecipeMain from './assets/recipe3.jpg';
import RecipeSearch from './assets/recipe4.jpg';
import InventoryLanding from './assets/inventory.png';
import InventoryStructure from './assets/inventory2.png';
import InventoryCreate from './assets/inventory3.png';
import InventoryItems from './assets/inventory4.png';
import CourseraML from './assets/courseraML.png';
import LS1 from './assets/ls1.png';
import LS2 from './assets/ls2.png';
import LS3 from './assets/ls3.png';
import Kvartel1 from './assets/kvartel1.png';
import Key1 from './assets/key1.png';
import Key2 from './assets/key2.png';
import Grants1 from './assets/grants1.png';
import Grants2 from './assets/grants2.png';
import era1 from './assets/era1.png';
import era2 from './assets/era2.png';
import era3 from './assets/era3.png';
import club1 from './assets/club1.png';
import club2 from './assets/club2.png';
import eway1 from './assets/eway1.png';
import eway2 from './assets/eway2.png';
import grm1 from './assets/grm1.png';
import grm2 from './assets/grm2.png';
import ac1 from './assets/ac1.png';
import ac2 from './assets/ac2.png';
import ac3 from './assets/ac3.png';
import ac4 from './assets/ac4.png';
import tars1 from './assets/tars1.png';
import tars2 from './assets/tars2.png';
import tars3 from './assets/tars3.png';
import tars4 from './assets/tars4.png';
import team1 from './assets/team1.png';
import team2 from './assets/team2.png';

export interface IProject {
    name: string,
    shortDescription: string,
    longDescription: string,
    images: string[],
    technologies: string[],
    type: 'mobile'| 'web',
    link?: string,
    githubLink?: string,
    websiteLink?:string 
}

export interface ISkill {
    title: string,
    percentage:number
}

interface IInfo {
    skills: ISkill[],
    Projects: IProject[]
}

export const Info: IInfo = {
    skills: [
        {
            title: 'React',
            percentage: 90
        },
        {
            title: 'NextJS',
            percentage: 90
        },
        {
            title: 'Flutter',
            percentage: 90
        },
        {
            title: 'React Native',
            percentage: 50
        },
        {
            title: 'Kotlin',
            percentage: 90
        },
        {
            title: 'Node.Js',
            percentage: 70
        },
        {
            title: 'NestJS',
            percentage: 90
        },
        {
            title: 'Go',
            percentage: 90
        },
        {
            title: 'MySQL',
            percentage: 90
        },
        {
            title: 'PostgreSQL',
            percentage: 70
        },
        {
            title: 'MongoDB',
            percentage: 70
        },
        {
            title: 'Typescript',
            percentage: 80
        },
        {
            title: 'Javascript',
            percentage: 80
        },
        {
            title: 'CSS&HTML',
            percentage: 90
        },
    ],
    // https://github.com/Ait0ne666/eway
    Projects: [
        {
            name: 'E-way',
            shortDescription: 'Cross-platform application for the network of electric charging stations',
            longDescription: 'Application developed with Flutter as cross-platform solution',
            technologies: ['Flutter'],
            images: [eway1, eway2],
            type: 'mobile',
            websiteLink: 'https://e-way.ru/',
            githubLink: 'https://github.com/Ait0ne666/eway'
        },
        {
            name: 'Fresh Up! (In development)',
            shortDescription: 'Landing website for the realtors event',
            longDescription: 'Landing developed using NextJS, TailwindCSS and swr',
            technologies: ['React', 'nextJS', 'swr', 'TailwindCSS'],
            images: [grm1, grm2],
            type: 'web',
            websiteLink: 'https://event.grmos.ru/'
        },
        {
            name: 'Tars (In development)',
            shortDescription: 'MVP of a bug bounty platform',
            longDescription: 'Development of an MVP of a bug bounty platform. I am responsible for the frontend of the application built with React/Redux and styled-components. On a backend responsible for the Pdf generation module and Dashboard Statistics',
            technologies: ['React', 'Styled-components', 'Go'],
            images: [tars1, tars2, tars3, tars4],
            type: 'web',
        },
        {
            name: 'Online-teambuilding',
            shortDescription: 'Landing website for the company specialising in teambuilding events',
            longDescription: 'Landing developed using React and styled-components',
            technologies: ['React', 'Styled-components'],
            images: [team1, team2],
            type: 'web',
            websiteLink: 'https://online-teambuilding.ru/'
        },
        {
            name: 'AC-VO',
            shortDescription: 'Website for the IT-consulting company',
            longDescription: 'Website and CMS developed with NextJS adn StrapiCMS',
            technologies: ['NextJS', 'React', 'NodeJS', 'Strapi'],
            images: [ac1, ac2, ac3,ac4],
            type: 'web',
            githubLink: 'https://github.com/Ait0ne666/AC-VO-front',
            websiteLink: 'https://ac-vo.ru/'
        },
        {
            name: 'Aretocracy club',
            shortDescription: 'Application for the closed club of likeminded people',
            longDescription: 'Developed an IOS/Android app using Flutter for the app itself, Strapi CMS for content management and NodeJS/SocketIO server for in-app chat functionality',
            technologies: ['Flutter', 'NodeJS', 'Strapi', 'SocketIO'],
            images: [club1, club2],
            type: 'mobile',
            websiteLink: 'https://play.google.com/store/apps/details?id=com.lilekov.aretocracyClub'
        },
        {
            name: 'EraCoin',
            shortDescription: 'Website for crypto',
            longDescription: 'Frontend development of website using ReactJS and styled-components',
            technologies: ['React', 'Styled-components'],
            images: [era1, era2, era3],
            type: 'web',
            websiteLink: 'https://eracoin.online/'
        },
        {
            name: 'Grants',
            shortDescription: 'Promo website for whisky vendor',
            longDescription: 'Frontend development of promo website using ReactJS and styled-components',
            technologies: ['React', 'Styled-components'],
            images: [Grants1, Grants2],
            type: 'web',
            websiteLink: 'https://chatbot.wgsacademy.com/'
        },
        {
            name: 'Key-Fi',
            shortDescription: 'Website for the crypto exchange',
            longDescription: 'My responsibility in this project were api integrations with existing crypto platfroms (Aave, Compound, dydx) and later moving frontend from using handlebars to React',
            technologies: ['React', 'NodeJS'],
            images: [Key1, Key2],
            type: 'web',
            websiteLink: 'https://keyfi.com/'
        },
        {
            name: 'Kvartel',
            shortDescription: 'Mobile homesharing app',
            longDescription: 'Added multiple features and bugfixes to existing app, api and admin panel. App written in Native IOS(Swift) and Android (Kotlin), backend in ASP.NET, admin panel JQuery',
            technologies: ['Android', 'IOS', 'ASP.NET', 'JQuery'],
            images: [Kvartel1],
            type: 'mobile',
            websiteLink: 'https://kvartel.com/'
        },
        {
            name: 'Lilekov-studio',
            shortDescription: 'Website for the studio i had worked in',
            longDescription: 'Website for the small it company, developed by me and one more developer. Frontend done in React and Typescript. For the backend i used Strapi headless CMS',
            technologies: ['React', 'Typescript', 'Strapi'],
            images: [LS1, LS2, LS3],
            type: 'web',
            websiteLink: 'https://lilekov-studio.com/'
        },
        // {
        //     name: 'FunPrazdnik',
        //     shortDescription: 'Website rework for an event agency',
        //     longDescription: 'Website rework made with React and StrapiCMS. You can view original website',
        //     technologies: ['React', 'Typescript', 'Strapi'],
        //     images: [FPLandingModal,FPIdeas, FPAbout, FPMobile],
        //     type: 'web',
        //     link: 'https://funprazdnik.ru/',
        //     githubLink: 'https://github.com/Ait0ne/funPrazdnik1.0',
        //     websiteLink: 'https://thawing-tundra-44235.herokuapp.com/'
        // },
        // {

        //     name: 'Goals',
        //     shortDescription: 'Mobile task manager with local notifications and cloud synchronization',
        //     longDescription: 'Task manager made with React Native and utilizing MongoDb-Realm to create offline-first user experience with cloud syncronization. Local Notifications are used to notify user about each task',
        //     technologies: ['ReactNative', 'MongoDB-Realm', 'TypeScript'],
        //     images: [GoalsMockup,GoalsMain, GoalsTasks, GoalsVideo],
        //     type: 'web',
        //     githubLink: 'https://github.com/Ait0ne/Goals'
        // },
        // {
        //     name: 'VideoChat',
        //     shortDescription: 'Chat app with video-chat functionality made with PeerJs and SocketIO',
        //     longDescription: 'Chat/VideoChat App with Push Notifications utilizing SocketIO for real-time communication, MongoDb as a database and PeerJs for Video functionality.',
        //     technologies: ['React', 'NodeJs', 'Typescript', 'MongoDB', 'Redis', 'SocketIO', 'Firebase'],
        //     images: [VideoChatMockup, VideoChatList, VideoChatCall, VideoChat],
        //     type: 'web',
        //     githubLink: 'https://github.com/Ait0ne/myVideoChat',
        //     websiteLink: 'https://fathomless-fjord-74738.herokuapp.com/'
        // },
        // {
        //     name: 'RecipeSearch',
        //     shortDescription: 'Website for searching recipes by ingredients',
        //     longDescription: 'Website for searching recipes by ingredients made with React and PostgreSQL',
        //     technologies: ['React', 'Javascript', 'Python', 'PostgreSQL'],
        //     images: [RecipeMockup, RecipeMain, RecipeSearch],
        //     type: 'web',
        //     githubLink: 'https://github.com/Ait0ne/RecipeSearch',
        //     websiteLink: 'https://calm-dusk-58826.herokuapp.com/'
        // },
        // {
        //     name: 'Travellog',
        //     shortDescription: 'Original photo album made for travellers',
        //     longDescription: 'Photo album made with React, Firebase and Cesium',
        //     technologies: ['React', 'NodeJs', 'Javascript', 'Firebase', 'AWS S3'],
        //     images: [ TravellogLanding, TravellogMap,  TravellogMobile, TravellogAlbum],
        //     type: 'web',
        //     githubLink: 'https://github.com/Ait0ne/travellog',
        //     websiteLink: 'https://radiant-reef-63518.herokuapp.com/map/jR8vZDI0RSZLwuaDNwMinSpeNgb2'
        // },
        // {
        //     name: 'SmartCalculator',
        //     shortDescription: 'Calculator with speech recognition',
        //     longDescription: 'Calculator made with React Native using native mobile speech recognition',
        //     technologies: ['React Native', 'Javascript'],
        //     images: [SmartCalcSplash, SmartCalcMain],
        //     type: 'web',
        //     githubLink: 'https://github.com/Ait0ne/SpeechRecognitionCalculator'

        // },
        // {
        //     name: 'RaspBerry',
        //     shortDescription: 'E-commerce template for flower shop',
        //     longDescription: 'Flower shop e-commerce template made with NextJs. Includes Customer support chat.',
        //     technologies: ['React', 'NextJs', 'Firebase'],
        //     images: [RaspberryMain,RaspberryMobile,RaspberryAuth, RaspberryItem],
        //     type: 'web',
        //     githubLink: 'https://github.com/Ait0ne/RaspberryProductionFrontend',
        //     websiteLink: 'https://raspberrynextjsstrapifrontend.herokuapp.com/'
        // },
        // {
        //     name: 'RaspBerry Support Chat',
        //     shortDescription: 'Customer support Chat made for RaspBerry E-commerce template',
        //     longDescription: 'Chat App made with React Native, Firestore and Firebase Cloud Messaging',
        //     technologies: ['React Native', 'Firebase'],
        //     images: [SupportMain, SupportList, SupportAuth],
        //     type: 'web',
        //     githubLink: 'https://github.com/Ait0ne/RaspberryCustomerSupport.git'
        // },
        // {
        //     name: 'myInventory',
        //     shortDescription: 'Website for managing home inventory',
        //     longDescription: 'Website made with Django for creating and managing inventory of your home',
        //     technologies: ['Python', 'Django'],
        //     images: [InventoryLanding, InventoryStructure, InventoryCreate, InventoryItems],
        //     type: 'web',
        //     githubLink: 'https://github.com/Ait0ne/Myinventory2.0',
        //     websiteLink: 'http://myinventory.site/'

        // },
        // {
        //     name: 'Housing prices analysis for Moscow City',
        //     shortDescription: 'Made as part of a final assignment for Coursera IBM Data Science Specialization',
        //     longDescription: 'Data analysis project created as a part of Coursera IBM Data Science Specialization',
        //     technologies: ['Python', 'SciKitLearn', 'Pandas', 'Numpy'],
        //     images: [CourseraML],
        //     type: 'web',
        //     githubLink: 'https://github.com/Ait0ne/Coursera_Capstone/blob/master/Coursera%20Capstone%20Final%20Assignment.ipynb'
        // }
    ]
}