import hellocooking from './assets/projects/hello.png'
import ark from './assets/projects/ark.png'
import portfolio from './assets/projects/dev.png'
import anime from './assets/projects/anime.png'
import rps from './assets/projects/rps.png'
import portfolioV1 from './assets/projects/portfolio_v1.png'

export const data = {
  "menu": [
    {
      "name": "About",
      "link": "#about"
    },
    {
      "name": "Experience",
      "link": "#experience"
    },
    {
      "name": "Projects",
      "link": "#projects"
    }
  ],
  "about": {
    "subHeader": "Hello World",
    "name": "I'm Ruel Lobo,",
    "position": "Full Stack Web Developer",
    "content": [
      "Hi there! my name is Ruel Lobo and I'm a web developer from Zamboanga Sibugay Philippines. I started to fell in love with codes when I'm a freshman in a University, where I learn HTML and CSS since then my interest in learning web development grow stronger and stronger. After Graduating I joined a bootcamp to learn more about frameworks to maximize my capabilities.",
      "I've been making lots of Frontend Development projects this days. my latest work is an ecommerce website HelloCooking, where I use PHP-Larvel, CSS, Bootstrap, Javascript, jQuery, and MySql.",
      "I enjoy learning new things in web development, but if I'm not coding I usually play sports like basketball, badminton, and sepak takraw. I also started practicing to play guitar this past few days because I found it very helpful to remove my thoughts and take a break in coding.",
    ]
  },
  "experience": [
    {
      "date": [
        "2023",
        "present"
      ],
      "position": "Full Stack Web Developer - National Center for Mental Health",
      "link": null,
      "content": [
        "As a Full Stack Web Developer and Technical Lead Programmer at the National Center for Mental Health, I am responsible for overseeing both frontend and backend development to ensure seamless integration across the platform. Working closely with the project manager and UI/UX team, I ensure that design and functionality align with user needs while adhering to strict deadlines. I manage the technical aspects of the project, ensuring efficient coding practices and timely delivery of features, all while troubleshooting and optimizing performance. My role also involves mentoring junior developers and ensuring that best practices in coding and project management are followed throughout the development lifecycle.",
      ],
      "skills": [
        "Javascript",
        "React",
        "Typescript",
        "Laravel",
        "MySQL",
        "PHP",
        "Bootstrap",
        "HTML & CSS",
      ]
    }
  ],
    "projects": [
      {
        "name": "HelloCooking",
        "subTitle": "Full Stack Web App",
        "description": "Our capstone project at Kodego Bootcamp is the HelloCooking web app, which allows users to create profiles and share their dishes with others so they can cook them too. This project has been an incredible challenge, pushing our web development skills to the next level.",
        "link": "http://hellocooking-ruel.shop/",
        "image": hellocooking,
        "technologies": [
            "Lucidchart",
            "Canva",
            "Github",
            "PHP - Laravel",
            "MySQL",
            "Javascript",
            "Bootstrap",
            "HTML",
            "CSS",
        ]
      },
      {
        "name": "A.R.K. Motorcycles Rental",
        "subTitle": "Mini Project - Frontend Development",
        "description": false,
        "link": "https://wolf100498.github.io/ark_motorcycle_rentals/index.html",
        "image": ark,
        "technologies": [
            "HTML",
            "CSS",
            "Bootstrap",
            "Canva",
            "Github",
        ]
      },
      {
        "name": "Portfolio",
        "subTitle": "Mini Project - Frontend Development",
        "description": false,
        "link": "https://ruelobo.netlify.app/",
        "image": portfolio,
        "technologies": [
            "HTML",
            "CSS",
            "Bootstrap",
        ]
      },
        {
          "name": "Anime",
          "subTitle": "Mini Project - Frontend Development",
          "description": false,
          "link": "https://wolf100498.github.io/anime/",
          "image": anime,
          "technologies": [
              "HTML",
              "CSS",
              "Bootstrap",
              "Javascript",
          ]
        },
        {
          "name": "Rock Paper Scissors",
          "subTitle": "Mini Project - Frontend Development",
          "description": false,
          "link": "https://wolf100498.github.io/rock_paper_scissors/",
          "image": rps,
          "technologies": [
              "HTML",
              "CSS",
              "Javascript",
          ]
        },
      {
        "name": "Portfolio V1",
        "subTitle": "Mini Project - Frontend Development",
        "description": "This is my first portfolio project that I made when I'm still learning web development. I use HTML, CSS, Bootstrap, and Javascript to make this project.",
        "link": "https://ruellobo.netlify.app/",
        "image": portfolioV1,
        "technologies": [
            "HTML",
            "CSS",
            "Bootstrap",
            "Javascript",
            "Canva"
        ]
      }
    ],

}