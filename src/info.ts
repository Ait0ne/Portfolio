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
import TravellogLanding from './assets/Travellog4.png';
import TravellogMobile from './assets/Travellog5.jpg';
import TravellogAlbum from './assets/Travellog3.png';
import SmartCalcSplash from './assets/SmartCalcSplash.jpg';
import SmartCalcMain from './assets/SmartCalcMain.png';
import RaspberryMain from './assets/raspberry3.png';
import RaspberryItem from './assets/raspberry2.png';
import RaspberryAuth from './assets/raspberry4.png';
import RaspberryMobile from './assets/raspberry.jpg';
import SupportMain from './assets/supportMain.jpg';
import SupportList from './assets/supportList.jpg';
import SupportAuth from './assets/supportAuth.png';
import RecipeMockup from './assets/recipe.jpg';
import RecipeMain from './assets/recipe3.jpg';
import RecipeSearch from './assets/recipe4.jpg';

export interface IProject {
    name: string,
    shortDescription: string,
    longDescription: string,
    images: string[],
    technologies: string[],
    type: 'mobile'| 'web',
    link?: string,
    githubLink: string,
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
            title: 'Javascript',
            percentage: 80
        },
        {
            title: 'Typescript',
            percentage: 80
        },
        {
            title: 'React',
            percentage: 90
        },
        {
            title: 'CSS&HTML',
            percentage: 90
        },
        {
            title: 'React Native',
            percentage: 50
        },
        {
            title: 'Node.Js',
            percentage: 70
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
            title: 'Python',
            percentage: 80
        },
        {
            title: 'Django',
            percentage: 50
        },
        {
            title: 'Machine Learning',
            percentage: 40
        },
    ],
    Projects: [
        {
            name: 'FunPrazdnik',
            shortDescription: 'Website rework for an event agency',
            longDescription: 'Website rework made with React and StrapiCMS. You can view original website',
            technologies: ['React', 'Typescript', 'Strapi'],
            images: [FPLandingModal,FPIdeas, FPAbout, FPMobile],
            type: 'web',
            link: 'https://funprazdnik.ru/',
            githubLink: 'https://github.com/Ait0ne/funPrazdnik1.0',
            websiteLink: 'https://thawing-tundra-44235.herokuapp.com/'
        },
        {

            name: 'Goals',
            shortDescription: 'Mobile task manager with local notifications and cloud synchronization',
            longDescription: 'Task manager made with React Native and utilizing MongoDb-Realm to create offline-first user experience with cloud syncronization. Local Notifications are used to notify user about each task',
            technologies: ['ReactNative', 'MongoDB-Realm', 'TypeScript'],
            images: [GoalsMockup,GoalsMain, GoalsTasks, GoalsVideo],
            type: 'web',
            githubLink: 'https://github.com/Ait0ne/Goals'
        },
        {
            name: 'VideoChat',
            shortDescription: 'Chat app with video-chat functionality made with PeerJs and SocketIO',
            longDescription: 'Chat/VideoChat App with Push Notifications utilizing SocketIO for real-time communication, MongoDb as a database and PeerJs for Video functionality.',
            technologies: ['React', 'NodeJs', 'Typescript', 'MongoDB', 'Redis', 'SocketIO', 'Firebase'],
            images: [VideoChatMockup, VideoChatList, VideoChatCall, VideoChat],
            type: 'web',
            githubLink: 'https://github.com/Ait0ne/myVideoChat',
            websiteLink: 'https://fathomless-fjord-74738.herokuapp.com/'
        },
        {
            name: 'RecipeSearch',
            shortDescription: 'Website for searching recipes by ingredients',
            longDescription: 'Website for searching recipes by ingredients made with React and PostgreSQL',
            technologies: ['React', 'Javascript', 'Python', 'PostgreSQL'],
            images: [RecipeMockup, RecipeMain, RecipeSearch],
            type: 'web',
            githubLink: 'https://github.com/Ait0ne/RecipeSearch',
            websiteLink: 'https://calm-dusk-58826.herokuapp.com/'
        },
        {
            name: 'Travellog',
            shortDescription: 'Original photo album made for travellers',
            longDescription: 'Photo album made with React, Firebase and Cesium',
            technologies: ['React', 'NodeJs', 'Javascript', 'Firebase', 'AWS S3'],
            images: [ TravellogLanding, TravellogMap,  TravellogMobile, TravellogAlbum],
            type: 'web',
            githubLink: 'https://github.com/Ait0ne/travellog',
            websiteLink: 'https://radiant-reef-63518.herokuapp.com/map/jR8vZDI0RSZLwuaDNwMinSpeNgb2'
        },
        {
            name: 'SmartCalculator',
            shortDescription: 'Calculator with speech recognition',
            longDescription: 'Calculator made with React Native using native mobile speech recognition',
            technologies: ['React Native', 'Javascript'],
            images: [SmartCalcSplash, SmartCalcMain],
            type: 'web',
            githubLink: 'https://github.com/Ait0ne/SpeechRecognitionCalculator'

        },
        {
            name: 'RaspBerry',
            shortDescription: 'E-commerce template for flower shop',
            longDescription: 'Flower shop e-commerce template made with NextJs. Includes Customer support chat.',
            technologies: ['React', 'NextJs', 'Firebase'],
            images: [RaspberryMain,RaspberryMobile,RaspberryAuth, RaspberryItem],
            type: 'web',
            githubLink: 'https://github.com/Ait0ne/RaspberryProductionFrontend',
            websiteLink: 'https://raspberrynextjsstrapifrontend.herokuapp.com/'
        },
        {
            name: 'RaspBerry Support Chat',
            shortDescription: 'Customer support Chat made for RaspBerry E-commerce template',
            longDescription: 'Chat App made with React Native, Firestore and Firebase Cloud Messaging',
            technologies: ['React Native', 'Firebase'],
            images: [SupportMain, SupportList, SupportAuth],
            type: 'web',
            githubLink: 'https://github.com/Ait0ne/RaspberryCustomerSupport.git'
        }
    ]
}