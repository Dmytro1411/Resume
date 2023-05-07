// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'м. Дніпро, вул. Олеся Гончара, 14',
}

var footer = {
  social: {
    email: {
      text: '....@gmail.com',
      href: 'mailto:priv111vid@gmail.com',
    },
    phone: {
      text: '+380..........',
      href: 'tel:+380670000123',
    },
    social: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
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
      title: 'Resume/summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
              tournament position, goals etc), analyzing by simple mathematics models and preparing probability
              for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume/skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: false,
        },
        {
          name: 'Handlebars',
          point: 11,
          isTop: false,
        },
        {
          name: 'VS code & NPM',
          point: 15,
          isTop: true,
        },
        {
          name: 'Terminal & Git',
          point: 15,
          isTop: true,
        },
        {
          name: 'React.js',
          point: 0,
          // isTop: true,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Cooking',
          isMain: false,
        },
        {
          name: 'Games',
          isMain: true,
        },
        {
          name: 'Car restoration',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume/education',
    },

    header,

    main: {
      educations: [
        {
          name: `Днепровская Духовная
           Семинария`,
          isEnd: true,
        },
        {
          name: `Днепровский государственный 
          аграрно-
          экономический университет`,
          isEnd: false,
        },
        {
          name: `Днепровский государственный
           медицинский университет (ДГМУ)`,
          isEnd: true,
        },
        {
          name: `Днепровский государственный 
          технический
           университет (ДГТУ)`,
          isEnd: false,
        },
        {
          name: `Днепровский институт
           медицины 
          и общественного здоровья`,
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: 'Анна',
          id: 545,
        },
        {
          name: 'Оксана',
          id: 747,
        },
        {
          name: 'Юлия',
          id: 353,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',
    page: {
      title: 'Resume/work',
    },

    header,

    main: {
      works: [
        {
          position: 'Repairer',
          company: {
            name: 'Interpipe',
            url: null,
          },
          duration: {
            from: '01.06.2011',
            to: null,
          },
        },
        {
          position: 'Junior fullstack',
          company: {
            name: 'IT-Brains',
            url: 'https://lingua.com/ru/angliyskiy/chteniye/',
          },
          duration: {
            from: '10.10.2022',
            to: '22.03.2025',
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'http://interpipesteel.biz/',
              about: `Complete access to the entire multimedia 
              catalog. Simply create your account to start.`,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              stackAmount: 10,
              awards: [
                {
                  name: `I have two brothers and one sister, and 
                  I was born last.`,
                },
                {
                  name: `My father teaches mathematics, and my mother 
                  is a nurse at a big hospital.`,
                },
              ],
              awardAmount: 15,
            },
          ],
        },
      ],
    },

    footer,
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
