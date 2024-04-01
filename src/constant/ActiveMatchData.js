import { faBasketball, faMedal, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import player1 from '../assets/Active Match/player1.jpg'
import player2 from '../assets/Active Match/player2.jpg'
import player3 from '../assets/Active Match/player3.jpg'
import player4 from '../assets/Active Match/player4.jpg'
import img1 from '../assets/Active Match/activematch1.jpg'
import img2 from '../assets/Active Match/activematch2.jpeg'
import img3 from '../assets/Active Match/activematch3.jpg'
import img4 from '../assets/Active Match/activematch4.jpg'
import court1 from '../assets/Active Match/court1.jpg'
import court2 from '../assets/Active Match/court2.jpeg'
import court3 from '../assets/Active Match/court3.jpeg'
import court4 from '../assets/Active Match/court4.jpg'


export const ActiveMatch = [
    {
        id: 1,
        imagecard: img1,
        type: "Veteran",
        title: "Championship",
        icon: faTrophy,
        profilephoto: player1,
        organizer: "Juan Dela Cruz"
    },
    {
        id: 2,
        imagecard: img2,
        type: "Kids",
        title: "Kids Exhibition Match",
        icon: faBasketball,
        profilephoto: player2,
        organizer: "Desiree Cabales"
    },
    {
        id: 3,
        imagecard: img3,
        type: "Teen",
        title: "Teenage Dry Run",
        icon: faMedal,
        profilephoto: player3,
        organizer: "Mhel De Torres"
    },
    {
        id: 4,
        imagecard: img4,
        type: "Expert",
        title: "Slam Dunk Contest",
        icon: faTrophy,
        profilephoto: player4,
        organizer: "Kenneth Quinto"
    },
]

export const CardData = [
    {
        id: 1,
        isAvailable: false,
        imagecard: court1,
        location: "Pasig city",
    },
    {
        id: 2,
        isAvailable: true,
        imagecard: court2,
        location: "Mandaluyong",
    },
    {
        id: 3,
        isAvailable: false,
        imagecard: court3,
        location: "Marikina City",
    },
    {
        id: 4,
        isAvailable: true,
        imagecard: court4,
        location: "Antipolo city",
    },
]

export const PlayersData = [
    {
        id: 1,
        name: "Bryan Angelo Aguillera",
        status: "Veteran"
    },

    {
        id: 2,
        name: "Mhel Yrvin De Torres",
        status: "Veteran"
    },

    {
        id: 3,
        name: "Desiree Diane Cabales",
        status: "Veteran"
    },

    {
        id: 4,
        name: "Paul Kenneth Quinto",
        status: "Veteran"
    },
    {
        id: 5,
        name: "Rhezel Landicho",
        status: "Veteran"
    },

    {
        id: 6,
        name: "Dixie Mae Endozo",
        status: "Veteran"
    },
    {
        id: 7,
        name: "Angelo Burog",
        status: "Veteran"
    },
    // {
    //     id: 8,
    //     name: "Jean Badinas",
    //     status: "Veteran"
    // },
    // {
    //     id: 9,
    //     name: "Leonard Arguelles",
    //     status: "Veteran"
    // },
    // {
    //     id: 10,
    //     name: "Regina Jalandoni",
    //     status: "Veteran"
    // },
]

export const RefereesData = [
    {
        id: 1,
        name: "Bini Maloi",
    },
    {
        id: 2,
        name: "Bini Jhoanna"
    }
]