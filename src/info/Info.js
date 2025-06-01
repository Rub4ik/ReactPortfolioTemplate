import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ibrohim",
    lastName: "Ruzmetov",
    initials: "ML", // the example uses first and last, but feel free to use three or more if you like.
    position: "Full Stack Developer & Data Scientist", // this is the title that will be displayed on the homepage
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💻',
            text: 'BSc Data Science and AI, MBA E-commerce and Company Management'
        },
        {
            emoji: '🌎',
            text: 'based in the Tashkent, Uzbekistan'
        },
        {
            emoji: "💼",
            text: "Full stack developer & AI & Data Scientist"
        },
        {
            emoji: "📧",
            text: "Thatweix@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/Ibrokhim_rm",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Rub4ik",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://twitter.com/Thatweix",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://t.me/Thatweix",
            icon: "fa fa-telegram",
            label: 'telegram'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Greetings! I'm Ibrohim Ruzmetov. I'm a Full stack developers & AI & Data Scientist. I've studied BSc, MBA at WSEI, Poland. I love the logic and structure of coding and always strive. You should hire me!",
    skills:
        {
            proficientWith: ['JavaScript', 'React', 'Git', 'Github', 'Bootstrap', 'HTML5', 'CSS3', 'scikit-learn', 'Tensorflow', 'Pandas', 'NumPy', 'Flask', 'XGboost'],
            exposedTo: ['NodeJS', 'Python', 'Adobe photoshop']
        }
    ,
    hobbies: [
        {
            label: 'Coding',
            emoji: '📖'
        },
        {
            label: 'Chess',
            emoji: '♟'
        },
        {
            label: 'GYM',
            emoji: '🏋'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
portfolio: [ // This is where your portfolio projects will be detailed
    {
        title: "Project 1",
        live: "https://github.com/Rub4ik", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        source: "https://github.com/Rub4ik/Dog-breeds.git", // this should be a link to the **repository** of the project, where the code is hosted.
        image: mock1
    },
    {
        title: "Project 2",
        live: "https://github.com/Rub4ik",
        source: "https://github.com/Rub4ik/Rub4ik.github.io.git",
        image: mock2
    },
    {
        title: "Project 3",
        live: "https://github.com/Rub4ik",
        source: "https://github.com/Rub4ik/scikit.git",
        image: mock3
    },
    {
        title: "Project 4",
        live: "https://github.com/Rub4ik",
        source: "https://github.com/Rub4ik/textual.git",
        image: mock4
    },
    {
        title: "Project 5",
        live: "https://github.com/Rub4ik",
        source: "https://github.com/Rub4ik/scikit-learn.git",
        image: mock5
    }
]
}