"use strict";
/****************************************************
 *                   Module
 ***************************************************/
const User = require('../models/user.js');
const Projects = require('../models/projects.js');
const Education = require('../models/education.js');
const WorkExperience = require('../models/workExperience.js');

new Promise((resolve, reject) => {

    new User({
        id: 'GF-0981-4284-4487-JKH6'
        , name: {
            'en': 'Mihail'
            , 'ru': 'Михаил'
        }
        , surname: {
            'en': 'Martyniuk'
            , 'ru': 'Мартынюк'
        }
        , location: {
            'en': 'Ukraine, Odessa'
            , 'ru': 'Украина, Одесса'
        }
        , phone: '+380680232016'
        , email: 'mishanudpsu@gmail.com'
        , objective: {
            'en': 'Obtain a position of Node.js Developer, where I can utilize my knowledges, contribute to the project and company success.For me it is important to contribute to the project and team success and to see the result of my work. I would like to have complicated and interesting tasks and to be a part of professional motivated team.'
            ,
            'ru': 'Получить должность разработчика Node.js, где я смогу использовать свои знания, способствовать успеху проекта и компании. Для меня важно внести свой вклад в успех проекта и команды и увидеть результат моей работы. Я хотел бы иметь сложные и интересные задания и быть частью профессиональной мотивированной команды.'
        }
        , social_links: {
            facebook: 'https://www.facebook.com/profile.php?id=100009995074561'
            , linkedin: 'https://www.linkedin.com/in/mihailmartyniuk'
            , skype: 'misha1994lubar'
            , github: 'https://github.com/Lon03'
        }
        , skills: [
            {
                name: 'JavaScript'
                , level: '75'
            }
            , {
                name: 'Node.js'
                , level: '75'
            }
            , {
                name: 'Express.js'
                , level: '75'
            }
            , {
                name: 'Angular.js'
                , level: '75'
            }
            , {
                name: 'Ionic Framework'
                , level: '70'
            }
            , {
                name: 'PostgreSQL'
                , level: '60'
            }
            , {
                name: 'SQL'
                , level: '60'
            }
            , {
                name: 'MongoDB'
                , level: '75'
            }
            , {
                name: 'OOP'
                , level: '80'
            }
            , {
                name: 'MVC'
                , level: '80'
            }
            , {
                name: 'HTML'
                , level: '75'
            }
            , {
                name: 'CSS'
                , level: '50'
            }
            , {
                name: 'Git'
                , level: '75'
            }
            , {
                name: 'JSON'
                , level: '85'
            }
            , {
                name: 'AJAX'
                , level: '80'
            }
            , {
                name: 'Windows'
                , level: '75'
            }
            , {
                name: 'Linux'
                , level: '75'
            }
            , {
                name: 'MacOS'
                , level: '75'
            }
        ]
    }).save()
        .then(resolve)
        .catch(reject)
});

new Promise((resolve, reject) => {

    new Projects({
        id: 'GF-0981-4284-4487-PPP'
        ,
        userID: 'GF-0981-4284-4487-JKH6'
        ,
        name: {
            'en': 'Gusto'
            , 'ru': 'Густо'
        }
        ,
        image: 'https://lh3.googleusercontent.com/llr8ON5MqJUD5kpI5M1ntT8vWGuZKnuSxv_kbKAq0_fy9dLqTcLsdvN6IP_AOl9naeib=w300-rw'
        ,
        receiptDate: {
            'en': 'Jan. 2017'
            , 'ru': 'Январь 2017 г.'
        }
        ,
        expirationDate: {
            'en': 'present time'
            , 'ru': 'настоящее время'
        }
        ,
        role: {
            'en': 'Team Member (Developer)'
            , 'ru': 'Член команды (разработчик)'
        }
        ,
        description: {
            'en': 'Gusto is a mobile app. With the help of Gusto app you can book a table in a restaurant very easy and absolutely for free.'
            ,
            'ru': 'Gusto - мобильное приложение. С помощью приложения Gusto вы можете заказать столик в ресторане очень просто и абсолютно бесплатно.'
        }
        ,
        technologies: 'Node.js, Express.js, Angular.js, Mongoose, Ionic Framework.'
        ,
        projectLinks: {
            playGoogle: 'https://play.google.com/store/apps/details?id=md.StarsoftEastSRL.gusto&hl=ru'
            ,
            itunesApple: 'https://itunes.apple.com/us/app/gusto-find-and-reserve-restaurants-and-bars/id1033528256?l=ru&ls=1&mt=8'
        }
    }).save()
        .then(resolve)
        .catch(reject)
});

new Promise((resolve, reject) => {

    new Projects({
        id: 'GF-0981-4284-9820-IRVU'
        ,
        userID: 'GF-0981-4284-4487-JKH6'
        ,
        name: {
            'en': 'Gusto Manager'
            , 'ru': 'Густо Менеджер'
        }
        ,
        image: 'https://lh3.googleusercontent.com/Zo-y7Vh_UyE4RcOjnJX1uMpsSCotNZrltWHVnR4pNOMx9YQC4mvnTHwjTYgnsm8vzg=w300'
        ,
        receiptDate: {
            'en': 'Jan. 2017'
            , 'ru': 'Январь 2017 г.'
        }
        ,
        expirationDate: {
            'en': 'present time'
            , 'ru': 'настоящее время'
        }
        ,
        role: {
            'en': 'Team Member (Developer)'
            , 'ru': 'Член команды (разработчик)'
        }
        ,
        technologies: 'Node.js, Express.js, Angular.js, Mongoose, Ionic Framework.'
        ,
        projectLinks: {
            playGoogle: 'https://play.google.com/store/apps/details?id=md.StarsoftEastSRL.gustomanager&hl=ru'
            , itunesApple: 'https://itunes.apple.com/us/app/gusto-manager/id1047150071?mt=8'
        }
    }).save()
        .then(resolve)
        .catch(reject)
});

new Promise((resolve, reject) => {

    new Education({
        id: 'GF-3333-4284-4487-JKLL'
        , userID: 'GF-0981-4284-4487-JKH6'
        , nameInstitution: {
            'en': 'Kyiv Financial and Economic College of the National Tax Service of Ukraine'
            ,
            'ru': 'Киевский финансово-экономический колледж Национального университета государственной налоговой службы Украины'
        }
        , faculty: {
            'en': 'Legal'
            , 'ru': 'Юридический'
        }
        , receiptDate: '2010'
        , expirationDate: '2014'
    }).save()
        .then(resolve)
        .catch(reject)
});

new Promise((resolve, reject) => {

    new Education({
        id: 'GF-3333-4284-4487-JTES'
        , userID: 'GF-0981-4284-4487-JKH6'
        , nameInstitution: {
            'en': 'Odessa State University of Internal Affairs'
            , 'ru': 'Одесский государственный университет внутренних дел'
        }
        , faculty: {
            'en': 'Legal'
            , 'ru': 'Юридический'
        }
        , receiptDate: '2014'
        , expirationDate: '2016'
    }).save()
        .then(resolve)
        .catch(reject)
});

new Promise((resolve, reject) => {

    new Education({
        id: 'GF-3333-4284-4487-POSF'
        , userID: 'GF-0981-4284-4487-JKH6'
        , nameInstitution: {
            'en': 'Odessa National Polytechnic University'
            , 'ru': 'Одесский национальный политехнический университет'
        }
        , faculty: {
            'en': 'Software Engineering'
            , 'ru': 'Программная инженерия'
        }
        , receiptDate: '2016'
        , expirationDate: '2018'
    }).save()
        .then(resolve)
        .catch(reject)
});


new Promise((resolve, reject) => {

    new WorkExperience({
        id: 'GF-3333-4284-6572-IERV'
        , userID: 'GF-0981-4284-4487-JKH6'
        , companyName: {
            'en': 'Diophant Technologies, OU'
            , 'ru': 'Diophant Technologies, OU'
        }
        , position: {
            'en': 'Node.js Developer'
            , 'ru': 'Node.js Developer'
        }
        , receiptDate: {
            'en': 'Oct. 2016'
            , 'ru': 'окт. 2016 г.'
        }
        , expirationDate: {
            'en': 'Dec. 2016'
            , 'ru': 'дек. 2016 г.'
        }
    }).save()
        .then(resolve)
        .catch(reject)
});

new Promise((resolve, reject) => {

    new WorkExperience({
        id: 'GF-3333-4284-6789-FRAH'
        , userID: 'GF-0981-4284-4487-JKH6'
        , companyName: {
            'en': 'Sellerfox Europe LTD'
            , 'ru': 'Sellerfox Europe LTD'
        }
        , duties: {
            '0': 'Node JS, sequelize, postgresql, mongoDB, bluebird.'
            , '1': 'Angular.js, Ionic.'
            , '2': 'Microservice (async /await ).'
            , '3': 'Coding and bugfixing.'
        }
        , position: {
            'en': 'Full-stack Developer'
            , 'ru': 'Full-stack Developer'
        }
        , receiptDate: {
            'en': 'Jan. 2017'
            , 'ru': 'янв. 2017 г.'
        }
        , expirationDate: {
            'en': 'present time'
            , 'ru': 'настоящее время'
        }
    }).save()
        .then(resolve)
        .catch(reject)
});
