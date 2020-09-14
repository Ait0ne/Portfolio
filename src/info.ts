import FPIdeas from './assets/funprazdnik-ideas.png';
import FPLandingModal from './assets/funprazdnik-landingModal.png';
import FPAbout from './assets/funprazdnik-about.png';
import GoalsMockup from './assets/goals-mockup.jpg';
import GoalsMain from './assets/goals-main.png';
import GoalsTasks from './assets/goals-tasks.jpg';


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
            percentage: 90
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
            title: 'Python',
            percentage: 90
        },
        {
            title: 'Django',
            percentage: 40
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
            images: [FPLandingModal,FPIdeas, FPAbout],
            type: 'web',
            link: 'https://funprazdnik.ru/',
            githubLink: 'https://github.com/Ait0ne/funPrazdnik1.0',
            websiteLink: 'https://thawing-tundra-44235.herokuapp.com/'
        },
        {

            name: 'Goals',
            shortDescription: 'Offline-first mobile task manager with cloud synchronization',
            longDescription: '',
            technologies: ['React-Native', 'MongoDB-Realm', 'TypeScript'],
            images: [GoalsMockup,GoalsMain, GoalsTasks],
            type: 'web',
            githubLink: 'https://github.com/Ait0ne/Goals'
        }
    ]
}