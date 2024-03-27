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

export const ActiveMatch = [
    {
        id: 1,
        imagecard: img1 ,
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