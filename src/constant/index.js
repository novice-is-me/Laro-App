import { faCompass, faSquarePen, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const links = [
    {
        navigationBar:[
            {
                name: "Home",
                path: "/"
            },{
                name: "Matches",
                path: "/matches"
            },{
                name: "Courts",
                path: "/court"
            },{
                name: "About",
                path: "/about"
            }
        ]
    },{
        footerLink:[
            {
                title: "Contact Us",
                links: [
                    "hello@laroph.com" ,
                    "(+63)00-00-000-00"
                ]
            },{
                title: "Navigate",
                links: [
                    "Home",
                    "About",
                    "Play Now"
                ]
            },{
                title: "FAQs",
                links: [
                    "Earn Money",
                    "Referral Program"
                ]
            }
        ]
    },{
        headerBtn: [
            {
                id: 1,
                name: "Login",
                path: "/login"
            },{
                id: 2,
                name: "Play Now",
                path: "/play" 
            }
        ]
    },{
        policies: [
            "Privay and Cookies",
            "Content Policy",
            "Terms of Use",
            "Feedback"
        ]
    },{
        footerBtn: [
            {
                id: 1,
                name: "Login",
                path: "/login"
            },{
                id: 2,
                name: "Create Account",
                path: "/register"
            },{
                id: 3,
                name: "Apply as Organizer",
                path: "/organizer"
            },{
                id: 4,
                name: "Apply as Court Owner",
                path: "/court-owner"
            }
        ]
    }
]

export const choices = [
    {
        icon: faCompass,  
        text: 'Joined a game near you?',
        choice: 'Find',
        placeholder: "Enter Matches (ex) Shooting"
    },{
        icon: faSquarePen,
        text: 'Organize a game',
        choice: 'Setup',
        placeholder: "Create Event"
    },{
        icon: faStar,
        text: 'Find Courts near you?',
        choice: 'Find',
        placeholder: "Enter Location"
    }
]