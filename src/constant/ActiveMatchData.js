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
import { Category } from '@mui/icons-material'


export const ActiveMatch = [
    {
        id: 1,
        imagecard: img1,
        type: "Veteran",
        title: "Championship",
        icon: faTrophy,
        profilephoto: player1,
        organizer: "Juan Dela Cruz",
        location: "Ortigas",
        category: "Shooting",
        minsquarter: "5mins. / 4h"
    },
    {
        id: 2,
        imagecard: img2,
        type: "Kids",
        title: "Kids Exhibition Match",
        icon: faBasketball,
        profilephoto: player2,
        organizer: "Juan Dela Cruz",
        location: "Manila",
        category: "Shooting",
        minsquarter: "5mins. / 4h"
    },
    {
        id: 3,
        imagecard: img3,
        type: "Teen",
        title: "Teenage Dry Run",
        icon: faMedal,
        profilephoto: player3,
        organizer: "Juan Dela Cruz",
        location: "Batangas",
        category: "Slam Dunk",
        minsquarter: "10mins. / 4h"
    },
    {
        id: 4,
        imagecard: img4,
        type: "Expert",
        title: "Slam Dunk Contest",
        icon: faTrophy,
        profilephoto: player4,
        organizer: "Juan Dela Cruz",
        location: "Cavite",
        category: "Veteran",
        minsquarter: "10mins. / 4h"
    },
    // {
    //     id: 5,
    //     imagecard: img4,
    //     type: "Expert",
    //     title: "Slam Dunk Contest",
    //     icon: faTrophy,
    //     profilephoto: player4,
    //     organizer: "Kenneth Quinto"
    // },
    // {
    //     id: 6,
    //     imagecard: img4,
    //     type: "Expert",
    //     title: "Slam Dunk Contest",
    //     icon: faTrophy,
    //     profilephoto: player4,
    //     organizer: "Kenneth Quinto"
    // },
]

export const CardData = [
    {
        id: 0,
        isAvailable: false,
        imagecard: court1,
        location: "Pasig city",
    },
    {
        id: 1,
        isAvailable: false,
        imagecard: court2,
        location: "Mandaluyong",
    },
    {
        id: 2,
        isAvailable: false,
        imagecard: court3,
        location: "Marikina City",
    },
    {
        id: 3,
        isAvailable: false,
        imagecard: court4,
        location: "Antipolo city",
    },
]

export const PlayersData = [
    {
        id: 1,
        name: "Juan Dela Cruz",
        status: "Veteran"
    },

    {
        id: 2,
        name: "Juan Dela Cruz",
        status: "Veteran"
    },

    {
        id: 3,
        name: "Juan Dela Cruz",
        status: "Veteran"
    },

    {
        id: 4,
        name: "Juan Dela Cruz",
        status: "Veteran"
    },
    {
        id: 5,
        name: "Juan Dela Cruz",
        status: "Veteran"
    },

    {
        id: 6,
        name: "Juan Dela Cruz",
        status: "Veteran"
    },
    {
        id: 7,
        name: "Juan Dela Cruz",
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
        name: "Juan Dela Cruz",
    },
    {
        id: 2,
        name: "Juan Dela Cruz"
    }
]