const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 2999;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(express.json());

function ParseOpeningHoursObject(data) {
  const mergeOpeningHours = (hours) => {
    hours.forEach((elem) => {
      const element = buffer.opening_hours.find((item) => item.time === elem.time);
      if (element !== undefined) {
        const index = buffer.opening_hours.indexOf(element);
        buffer.opening_hours[index] = {
          day: element.day + ', ' + elem.day,
          time: element.time,
        };
      } else {
        buffer.opening_hours.push({ day: elem.day, time: elem.time });
      }
    });
  };

  const buffer = { opening_hours: [] };

  if (data.opening_hours_department !== undefined) {
    const departmentHours = data.opening_hours_department;
    mergeOpeningHours(departmentHours);
    data.opening_hours_department = buffer.opening_hours;
  }

  if (data.opening_hours_coordinator !== undefined) {
    const coordinatorHours = data.opening_hours_coordinator;
    buffer.opening_hours = [];
    mergeOpeningHours(coordinatorHours);
    data.opening_hours_coordinator = buffer.opening_hours;
  }

  return data;
}

app.post('/api/post/get_institute', (req, res) => {
  const func = async () => {
    let data;
    switch (req.body.institute) {
      case "iit":
        data = {
          title: 'Информационных технологий',
          contacts_department: [
            {
              contact: 'Кабинет',
              information: 'Пр-т Вернадского, 78, корпус А, А-417',
            },
            {
              contact: 'Телефон',
              information: '+7 (499) 215-65-65 доб.1077, 1042',
            },
          ],
          opening_hours_department: [
            { day: 'ПН', time: '09:00 — 18:00' },
            { day: 'ВТ', time: '09:00 — 18:00' },
            { day: 'СР', time: '09:00 — 18:00' },
            { day: 'ЧТ', time: '09:00 — 18:00' },
            { day: 'ПТ', time: '09:00 — 16:45' },
          ],
          important_information_department:
              'Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий.',
          coordinator: 'Акатьев Ярослав Алексеевич',
          contacts_coordinator: [
            {
              contact: 'Кабинет',
              information: 'Пр-т Вернадского, 78, корпус А, А-420',
            },
            { contact: 'Вконакте', information: 'vk.com/bramind002' },
          ],
          opening_hours_coordinator: [
            { day: 'ПН', time: '12:00 — 18:00' },
            { day: 'ВТ', time: '12:00 — 18:00' },
            { day: 'СР', time: '12:00 — 18:00' },
            { day: 'ЧТ', time: '12:00 — 18:00' },
            { day: 'ПТ', time: '12:00 — 18:00' },
          ],
          important_information_coordinator:
              'В файле представлена таблица Excel с несколькими страницами с информацией о пересдачах. Каждая страница озаглавлена аббревиатурой внутренней кафедры института. На странице кафедры расположены её дисциплины. На вкладке "Внешние кафедры" представлен перечень дисциплин, которые нашим студентам читаются кафедрами, не входящими в состав института ИТ. К внешним кафедрам относятся, например, такие дисциплины как математический анализ, физика, информатика, гуманитарные дисциплины. Пожалуйста, перед просмотром таблицы убедитесь, что вы знаете полное наименование дисциплины, какая кафедра вам ее ведет и ФИО преподавателя. В случае, если вы не нашли нужную дисциплину, воспользуйтесь встроенной в Excel функцией поиска (установите поиск по всем листам книги). При возникновении проблем обращайтесь к ответственному по работе со студентами ИИТ',
          image_institute: "http://localhost:"+PORT+"/ИИТ.png",
        };
        res.status(200).json(ParseOpeningHoursObject(data));
        break;
      default:
        res.status(404);
    }
  }

  func();
})

app.post('/api/post/get_check_institute', (req, res) => {
  const func = async () => {
    const data = { array: [{ institute: 'iit', title: 'ИИТ', image: "http://localhost:"+PORT+"/iit.svg" }] };
    switch (req.body.linkFormat) {
      case true:
        const newData = data.array.map((elem) => {
          return {
            institute: '/' + elem.institute,
            title: elem.title,
            image: elem.image,
          };
        })
        res.status(200).json(newData);
        break;
      default:
        res.status(200).json(data.array);
    }
  }

  func();
})

app.post('/api/post/get_departments_internal', (req, res) => {
  const func = async () => {
    const data = [
      { department: 'ippo', title: 'ИиППО', image: "http://localhost:"+PORT+"/ippo.png" },
      { department: 'mosit', title: 'МОСИТ', image: "http://localhost:"+PORT+"/mosit.png" },
      { department: 'ppi', title: 'ППИ', image: "http://localhost:"+PORT+"/ppi.png" },
      { department: 'dt', title: 'ЦТ', image: "http://localhost:"+PORT+"/dt.png" },
      { department: 'vt', title: 'ВТ', image: "http://localhost:"+PORT+"/vt.png" },
      { department: 'itae', title: 'ИТАЭ', image: "http://localhost:"+PORT+"/itae.png" },
      { department: 'kus', title: 'КИС', image: "http://localhost:"+PORT+"/kus.png" },
      { department: 'pm', title: 'ПМ', image: "http://localhost:"+PORT+"/pm.png" },
      { department: '231', title: 'БК № 231', image: undefined },
      { department: '234', title: 'БК № 234', image: undefined },
      { department: '239', title: 'БК № 239', image: undefined },
      { department: '244', title: 'БК № 244', image: undefined },
      { department: '250', title: 'БК № 250', image: undefined },
    ];
    switch (req.body.institute) {
      case 'iit':
        res.status(200).json(data);
        break;
      default:
        res.status(404);
    }
  }

  func();
})

app.post('/api/post/get_departments_external', (req, res) => {
  const func = async () => {
    const data = [
      { department: '1', title: '1', image: undefined },
      { department: '2', title: '2', image: undefined },
      { department: '3', title: '3', image: undefined },
      { department: '4', title: '4', image: undefined },
      { department: '5', title: '5', image: undefined },
      { department: '6', title: '6', image: undefined },
      { department: '7', title: '7', image: undefined },
      { department: '8', title: '8', image: undefined },
      { department: '9', title: '9', image: undefined },
      { department: '10', title: '10', image: undefined },
    ];
    switch (req.body.institute) {
      case 'iit':
        res.status(200).json(data);
        break;
      default:
        res.status(404);
    }
  }

  func();
})

app.get('/api/get/get_check_departments', (req, res) => {
  const func = async () => {
    const data = [
      { institute: 'iit', department: 'ippo' },
      { institute: 'iit', department: 'mosit' },
      { institute: 'iit', department: 'ppi' },
      { institute: 'iit', department: 'dt' },
      { institute: 'iit', department: 'vt' },
      { institute: 'iit', department: 'itae' },
      { institute: 'iit', department: 'kus' },
      { institute: 'iit', department: 'pm' },
      { institute: 'iit', department: '231' },
      { institute: 'iit', department: '234' },
      { institute: 'iit', department: '239' },
      { institute: 'iit', department: '244' },
      { institute: 'iit', department: '250' },
    ];
    res.status(200).json(data);
  }

  func();
})

app.post('/api/post/get_department', (req, res) => {
  const func = async () => {
    switch (req.body.department) {
      case 'ippo':
        const data = {
          title: 'ИиППО',
          chief: 'Болбаков Роман Геннадьевич',
          contacts_department: [
            { contact: 'Кабинет', information: 'Пр-т Вернадского, 78, корпус Г, ауд. Г-227' },
            { contact: 'Телефон', information: '+7 499 215-65-65 доб. 4047' },
            { contact: 'E-mail', information: 'bolbakov@mirea.ru' },
            { contact: 'Вконтакте', information: 'https://vk.com/ippo_it' },
          ],
          opening_hours_department: [
            { day: 'ПН', time: '14:00 — 16:00' },
            { day: 'ВТ', time: '14:00 — 16:00' },
            { day: 'СР', time: '14:00 — 16:00' },
          ],
          important_information:
              'Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий.',
          image_department: "http://localhost:"+PORT+"/ippo_2.png",
        };
        res.status(200).json(ParseOpeningHoursObject(data));
        break;
      default:
        res.status(200).json({title: req.body.department});
    }
  }

  func();
})

app.post('/api/post/get_departments_baccalaureate', (req, res) => {
  const func = async () => {
    const data = [
      {
        title: 'Программирование на языка джава',
        image: 'http://localhost:'+PORT+'/java.png',
        href: '/iit/ippo/java',
        course: '2 курс 3 семестр',
        control: 'Экзамен',
        groups: ['ИКБО', 'ИНБО', 'ИВБО', 'ИМБО'],
      },
      {
        title: 'Дизайн мобильных приложений',
        image: 'http://localhost:'+PORT+'/design.png',
        href: '/iit/ippo/design',
        course: '2 курс 4 семестр',
        control: 'Курсовая работа',
        groups: ['ИКБО-03-21', 'ИКБО-13-21', 'ИКБО-33-21'],
      },
      {
        title: 'Моделирование сред и разработка приложений виртуальной и дополненной реальности',
        image: 'http://localhost:'+PORT+'/3d.png',
        href: '/iit/ippo/3d',
        course: '3 курс 5 семестр',
        control: 'Зачёт',
        groups: ['ИКБО-20-21'],
      },
      {
        title: 'Разработка серверных частей интернет ресурсов',
        image: 'http://localhost:'+PORT+'/backend.png',
        href: '/iit/ippo/backend',
        course: '3 курс 5 семестр',
        control: 'Экзамен',
        groups: [
          'ИКБО-01-21',
          'ИКБО-10-21',
          'ИКБО-16-21',
          'ИКБО-20-21',
          'ИКБО-24-21',
          'ИКБО-30-21',
          'ИКБО-32-21',
          'ИКБО-02-21',
          'ИКБО-03-21',
          'ИКБО-13-21',
          'ИКБО-33-21',
        ],
      },
    ];
    switch (req.body.department) {
      case "ippo":
        res.status(200).json(data);
        break;
      default:
        res.status(200).json({});
    }
  }

  func();
})

app.post('/api/post/get_departments_magistracy', (req, res) => {
  const func = async () => {
    const data = [
      {
        title: 'Разработка клиент-серверных приложений',
        image: 'http://localhost:'+PORT+'/fullstack.png',
        href: '/iit/ippo/fullstack',
        course: '1 курс 2 семестр',
        control: 'Экзамен',
        groups: ['ИКМО', 'ИНМО', 'ИВМО', 'ИММО'],
      },
      {
        title: 'Системы захвата движения и отслеживания объектов',
        image: 'http://localhost:'+PORT+'/mocap.png',
        href: '/iit/ippo/motioncapture',
        course: '1 курс 2 семестр',
        control: 'Экзамен',
        groups: ['ИКМО', 'ИНМО', 'ИВМО', 'ИММО'],
      },
      {
        title: 'Настройка и администрирование сервисного программного обеспечения',
        image: 'http://localhost:'+PORT+'/adm.png',
        href: '/iit/ippo/adm',
        course: '1 курс 2 семестр',
        control: 'Зачёт',
        groups: ['ИКМО', 'ИНМО', 'ИВМО', 'ИММО'],
      },
    ];
    switch (req.body.department) {
      case "ippo":
        res.status(200).json(data);
        break;
      default:
        res.status(200).json({});
    }
  }

  func();
})

app.post('/api/post/get_departments_specialty', (req, res) => {
  const func = async () => {
    switch (req.body.department) {
      default:
        res.status(200).json({});
    }
  }

  func();
})

app.get('/api/get/get_check_discipline', (req, res) => {
  const func = async () => {
    const data = [
      { discipline: 'java' },
      { discipline: 'design' },
      { discipline: '3d' },
      { discipline: 'backend' },
      { discipline: 'fullstack' },
      { discipline: 'motioncapture' },
      { discipline: 'adm' },
    ];
    res.status(200).json(data);
  }

  func();
})

app.post('/api/post/get_discipline_info', (req, res) => {
  const func = async () => {
    const data = {
      "java": {
        title: 'Программирование на языка джава',
        allowance: "Ведомость , получать допуск лично НЕ нужно",
        image: 'http://localhost:'+PORT+'/java_long.png',
        course: '2 курс 3 семестр',
        control: 'Экзамен',
        groups: ['ИКБО', 'ИНБО', 'ИВБО', 'ИМБО'],
        format: "Тест в аудитории",
        important_information: "Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий."
      },
      "design": {
        title: 'Дизайн мобильных приложений',
        allowance: "Ведомость , получать допуск лично НЕ нужно",
        image: 'http://localhost:'+PORT+'/design_long.png',
        course: '2 курс 4 семестр',
        control: 'Курсовая работа',
        groups: ['ИКБО-03-21', 'ИКБО-13-21', 'ИКБО-33-21'],
        format: "Тест в аудитории",
        important_information: "Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий."
      },
      "3d": {
        title: 'Моделирование сред и разработка приложений виртуальной и дополненной реальности',
        allowance: "Ведомость , получать допуск лично НЕ нужно",
        image: 'http://localhost:'+PORT+'/3d_long.png',
        course: '3 курс 5 семестр',
        control: 'Зачёт',
        groups: ['ИКБО-20-21'],
        format: "Онлайн",
        important_information: "Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий."
      },
      "backend": {
        title: 'Разработка серверных частей интернет ресурсов',
        image: 'http://localhost:'+PORT+'/backend_long.png',
        href: '/backend',
        course: '3 курс 5 семестр',
        control: 'Экзамен',
        groups: [
          'ИКБО-01-21',
          'ИКБО-10-21',
          'ИКБО-16-21',
          'ИКБО-20-21',
          'ИКБО-24-21',
          'ИКБО-30-21',
          'ИКБО-32-21',
          'ИКБО-02-21',
          'ИКБО-03-21',
          'ИКБО-13-21',
          'ИКБО-33-21',
        ],
        allowance: "Ведомость , получать допуск лично НЕ нужно",
        format: "Тест в СДО",
        important_information: "Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий."
      },
      "fullstack": {
        title: 'Разработка клиент-серверных приложений',
        allowance: "Ведомость , получать допуск лично НЕ нужно",
        image: 'http://localhost:'+PORT+'/fullstack_long.png',
        course: '1 курс 2 семестр',
        control: 'Экзамен',
        groups: ['ИКМО', 'ИНМО', 'ИВМО', 'ИММО'],
        format: "Тест в аудитории",
        important_information: "Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий."
      },
      "motioncapture": {
        title: 'Системы захвата движения и отслеживания объектов',
        image: 'http://localhost:'+PORT+'/mocap_long.png',
        course: '1 курс 2 семестр',
        control: 'Экзамен',
        groups: ['ИКМО', 'ИНМО', 'ИВМО', 'ИММО'],
        format: "Тест в СДО",
        important_information: "Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий."
      },
      "adm": {
        title: 'Настройка и администрирование сервисного программного обеспечения',
        image: 'http://localhost:'+PORT+'/adm_long.png',
        course: '1 курс 2 семестр',
        control: 'Зачёт',
        groups: ['ИКМО', 'ИНМО', 'ИВМО', 'ИММО'],
        format: "Онлайн",
        important_information: "Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий."
      },
    };
    switch (req.body.discipline) {
      case "fullstack":
        res.status(200).json(data.fullstack);
        break;
      case "java":
        res.status(200).json(data.java);
        break;
      case "motioncapture":
        res.status(200).json(data.motioncapture);
        break;
      case "design":
        res.status(200).json(data.design);
        break;
      case "adm":
        res.status(200).json(data.adm);
        break;
      case "backend":
        res.status(200).json(data.backend);
        break;
      case "3d":
        res.status(200).json(data["3d"]);
        break;
      default:
        res.status(200).json({});
    }
  }

  func();
})

app.post('/api/post/get_retakes_discipline', (req, res) => {
  const func = async () => {
    const data = {
      "java": {
        array: [
            {
              day: "21.02.24",
              time: "14:20 — 15:50",
              classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-420",
              examiner: "Джавин Д.Д. , Котлинова К.К.",
              type: "offline",
            },
            {
              day: "28.02.24",
              time: "14:20 — 15:50",
              classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-420",
              examiner: "Джавин Д.Д. , Котлинова К.К.",
              type: "offline",
            },
            {
              day: "06.03.24",
              time: "12:40 — 14:10",
              classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-420",
              examiner: "Джавин Д.Д.",
              type: "offline",
            },
            {
              day: "13.03.24",
              time: "12:40 — 14:10",
              classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-420",
              examiner: "Джавин Д.Д.",
              type: "offline",
            },
            {
              day: "20.03.24",
              time: "12:40 — 14:10",
              classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-420",
              examiner: "Джавин Д.Д.",
              type: "offline",
            },
            {
              day: "27.03.24",
              time: "12:40 — 14:10",
              classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-420",
              examiner: "Джавин Д.Д.",
              type: "offline",
            },
            {
              day: "03.05.23",
              time: "14:20 — 15:50",
              classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-439",
              examiner: "Котлинова К.К.",
              type: "offline",
            }
        ]
        },
      "design": {
        array: [
          {
            day: "20.02.24",
            time: "16:20 — 17:50",
            classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-421",
            examiner: "Дизаинов Д.Д.",
            type: "offline",
          },
          {
            day: "05.03.24",
            time: "16:20 — 17:50",
            classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-421",
            examiner: "Дизаинов Д.Д.",
            type: "offline",
          },
          {
            day: "19.03.24",
            time: "16:20 — 17:50",
            classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-421",
            examiner: "Дизаинов Д.Д.",
            type: "offline",
          },
          {
            day: "02.05.23",
            time: "16:20 — 17:50",
            classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-421",
            examiner: "Дизаинов Д.Д.",
            type: "offline",
          }
        ]
        },
      "3d": {
        array: [
          {
            day: "20.02.24",
            time: "18:00 — 19:30",
            href: "https://online-edu.mirea.ru/my/",
            examiner: "Графикова Г.Г.",
            type: "online",
          },
          {
            day: "27.02.24",
            time: "18:00 — 19:30",
            href: "https://online-edu.mirea.ru/my/",
            examiner: "Аниматов А.А.",
            type: "online",
          },
          {
            day: "05.03.24",
            time: "18:00 — 19:30",
            href: "https://online-edu.mirea.ru/my/",
            examiner: "Текстуров Т.Т.",
            type: "online",
          },
          {
            day: "12.03.24",
            time: "18:00 — 19:30",
            href: "https://online-edu.mirea.ru/my/",
            examiner: "Светов С.С.",
            type: "online",
          },
          {
            day: "19.03.24",
            time: "18:00 — 19:30",
            href: "https://online-edu.mirea.ru/my/",
            examiner: "Тенев Т.Т.",
            type: "online",
          },
          {
            day: "26.03.24",
            time: "18:00 — 19:30",
            href: "https://online-edu.mirea.ru/my/",
            examiner: "Рендеров Р.Р.",
            type: "online",
          },
          {
            day: "02.05.23",
            time: "18:00 — 19:30",
            href: "https://online-edu.mirea.ru/my/",
            examiner: "Графикова Г.Г.",
            type: "online",
          }
        ]
        },
      "backend": {
        array: [
          {
            day: "до 31.06.24",
            href: "https://online-edu.mirea.ru/my/",
            type: "test",
          }
        ]
        },
      "fullstack": {
        array: [
          {
            day: "23.02.24",
            time: "18:00 — 19:30",
            classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-421",
            examiner: "Фуллстековна Ф.Ф.",
            type: "offline",
          },
          {
            day: "08.03.24",
            time: "18:00 — 19:30",
            classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-421",
            examiner: "Фуллстековна Ф.Ф.",
            type: "offline",
          },
          {
            day: "22.03.24",
            time: "18:00 — 19:30",
            classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-421",
            examiner: "Фуллстековна Ф.Ф.",
            type: "offline",
          },
          {
            day: "05.05.23",
            time: "18:00 — 19:30",
            classroom: "Пр-т Вернадского, 78, корпус А, ауд. А-421",
            examiner: "Фуллстековна Ф.Ф.",
            type: "offline",
          }
        ]
        },
      "motioncapture": {
        array: [
          {
            day: "до 31.06.24",
            href: "https://online-edu.mirea.ru/my/",
            type: "test",
          }
        ]
        },
      "adm": {
        array: [
          {
            day: "27.02.24",
            time: "18:00 — 19:30",
            href: "https://online-edu.mirea.ru/my/",
            examiner: "Админов А.А.",
            type: "online",
          },
          {
            day: "12.03.24",
            time: "18:00 — 19:30",
            href: "https://online-edu.mirea.ru/my/",
            examiner: "Админов А.А.",
            type: "online",
          },
          {
            day: "26.03.24",
            time: "18:00 — 19:30",
            href: "https://online-edu.mirea.ru/my/",
            examiner: "Админов А.А.",
            type: "online",
          },
        ]
        },
    };
    switch (req.body.discipline) {
      case "fullstack":
        res.status(200).json(data.fullstack);
        break;
      case "java":
        res.status(200).json(data.java);
        break;
      case "motioncapture":
        res.status(200).json(data.motioncapture);
        break;
      case "design":
        res.status(200).json(data.design);
        break;
      case "adm":
        res.status(200).json(data.adm);
        break;
      case "backend":
        res.status(200).json(data.backend);
        break;
      case "3d":
        res.status(200).json(data["3d"]);
        break;
      default:
        res.status(200).json({});
    }
  }

  func();
})


app.listen(PORT, () => {
  console.log('server start, port '+ PORT)
})