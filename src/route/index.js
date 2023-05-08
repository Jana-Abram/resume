// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
    name: {
      firstname: "Ivan",
      lastname: "Ivanov",
    },
      position: "Junior Fullstack JS Developer",
      salary: "600$ в місяц",
      adress: "Вул Глаицька,2, Івано-Франківськ",
    }
    
var footer = {
        social: {
        email: {
          text: "ivaonv@mail.com",
          href: "mailto:ivanov@mail.com",
        },
        phone: {
          text: "+380670000123",
          href: "tel:+380670000123",
        },
        linkedin: {
          href: "https://www.linkedin.com/in/dmytro-test",
          text: "LinkedIn",
        },
      },
    }

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Summary",
    },

    header,

    main: {
      summary: {
      title:"Summary",
      text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
         work on a new project I learn the domain and try to understand the idea of the project. Good team
         player, every colleague is a friend to me.`,
    },
     experience: {
      title: "Other experience",
      text:`Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
      tournament position, goals etc), analyzing by simple mathematics models and preparing probability
      for such events like: money line - first win / draw / second win, totals etc.`,
     },
    },


    footer,
  })
})

// ================================================================


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Skills",
    },

    header,

    main: {
      skills: [
        {
          name: "HTML",
          point: 10,
          isTop: true,
        },
        {
          name: "Handlebars",
          point: 10,
          isTop: true,
        },
        {
          name: "VS Code",
          point: 8,
           isTop: false,
        },
        {
          name: "Git",
          point: 10,
        },
        {
          name: "Terminal & NPM",
          point: 9,
        },
        {
          name: "React.js",
          point: 0,
        },
        {
          name: "PHP",
          point: null,
        },
      ],
      hobbies: [
      { name: "Sony Vegas Pro", isMain: false },
      { name: "Adobe Photoshop", isMain: false },
      { name: "learn English", isMain: true },
      ],
    },


    footer,
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Education",
    },

    header,

    main: {
      education: [
        {
          name: "Дитячий садок",
          isEnd: true,
        },
        {
          name: "Середня школа",
          isEnd: true,
        },
        {
          name: "Коледж",
          isEnd: false,
        },
      ],
      certificates: [
      { name: "EF SET Certificate", id: 234 },
      { name: "HTML/CSS", id: 675 },
      { name: "CEFR", id: 879 },
      ],
    },

     footer,
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: "big",

    page: {
      title: "Resume | Work",
    },

    header,

    main: {
      works: [
        {
          position: "Junior Fullstack Developer",
          company: {
            name: "IT Brains",
            url: "https://it-brains.com.ua/",
          },
          duration: {
            from: "07.08.2022",
            to: null,
          },

          projectAmount: 1,

          projects: [
            {
              name: "Resume",
              url: "https://resume.com.ua/",
              about: "clothing store app",
              company: {
              name: "IT - Company",
              url: null,
              } ,
              stacks: [
                {
                  name: "React.js",
                },
                {
                  name: "HTML/CSS",
                },
                {
                  name: "Node.js",
                },
              ],
              awards: [
                {
                  name: "Webbt",
                },
                {
                  name: "SEO Optimized pages ",
                },
              ],
              stackAmount: 3,
              awardAmount: 3,
            },
          ],
        },
      ],
    },

     footer,
  })
})



// Підключаємо роутер до бек-енду
module.exports = router
