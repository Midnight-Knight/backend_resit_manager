SET NAMES 'utf8mb4';
CREATE DATABASE IF NOT EXISTS appDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON appDB.* TO 'user'@'%';
FLUSH PRIVILEGES;

USE appDB;
CREATE TABLE get_institute (
    id int(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    contacts_department LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    opening_hours_department LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    important_information_department LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    coordinator VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    contacts_coordinator LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    opening_hours_coordinator LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    important_information_coordinator LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    image_institute VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PRIMARY KEY (id)
);

INSERT INTO get_institute(title, contacts_department, opening_hours_department, important_information_department, coordinator, contacts_coordinator, opening_hours_coordinator, important_information_coordinator, image_institute) VALUES ('Информационных технологий','[{"contact": "Кабинет", "information": "Пр-т Вернадского, 78, корпус А, А-417"}, {"contact": "Телефон", "information": "+7 (499) 215-65-65 доб.1077, 1042"}]','[{"day": "ПН", "time": "09:00 — 18:00"}, {"day": "ВТ", "time": "09:00 — 18:00"}, {"day": "СР", "time": "09:00 — 18:00"}, {"day": "ЧТ", "time": "09:00 — 18:00"}, {"day": "ПТ", "time": "09:00 — 16:45"}]','Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий.','Акатьев Ярослав Алексеевич','[{"contact": "Кабинет", "information": "Пр-т Вернадского, 78, корпус А, А-420"}, {"contact": "Вконакте", "information": "vk.com/bramind002"}]','[{"day": "ПН", "time": "12:00 — 18:00"}, {"day": "ВТ", "time": "12:00 — 18:00"}, {"day": "СР", "time": "12:00 — 18:00"}, {"day": "ЧТ", "time": "12:00 — 18:00"}, {"day": "ПТ", "time": "12:00 — 18:00"}]','В файле представлена таблица Excel с несколькими страницами с информацией о пересдачах. Каждая страница озаглавлена аббревиатурой внутренней кафедры института. На странице кафедры расположены её дисциплины. На вкладке \"Внешние кафедры\" представлен перечень дисциплин, которые нашим студентам читаются кафедрами, не входящими в состав института ИТ. К внешним кафедрам относятся, например, такие дисциплины как математический анализ, физика, информатика, гуманитарные дисциплины. Пожалуйста, перед просмотром таблицы убедитесь, что вы знаете полное наименование дисциплины, какая кафедра вам ее ведет и ФИО преподавателя. В случае, если вы не нашли нужную дисциплину, воспользуйтесь встроенной в Excel функцией поиска (установите поиск по всем листам книги). При возникновении проблем обращайтесь к ответственному по работе со студентами ИИТ','/ИИТ.png');

CREATE TABLE get_check_institute (
    id int(10) NOT NULL AUTO_INCREMENT,
    data LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PRIMARY KEY (id)
);

INSERT INTO get_check_institute (data) VALUES ('[{"institute": "iit", "title": "ИИТ", "image": "http://localhost:2999/iit.svg"}]');

CREATE TABLE get_departments_internal (
    id int(10) NOT NULL AUTO_INCREMENT,
    data LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PRIMARY KEY (id)
);

INSERT INTO get_departments_internal (data) VALUES ('[
      { "department": "ippo", "title": "ИиППО", "image": "http://localhost:2999/ippo.png" },
      { "department": "mosit", "title": "МОСИТ", "image": "http://localhost:2999/mosit.png" },
      { "department": "ppi", "title": "ППИ", "image": "http://localhost:2999/ppi.png" },
      { "department": "dt", "title": "ЦТ", "image": "http://localhost:2999/dt.png" },
      { "department": "vt", "title": "ВТ", "image": "http://localhost:2999/vt.png" },
      { "department": "itae", "title": "ИТАЭ", "image": "http://localhost:2999/itae.png" },
      { "department": "kus", "title": "КИС", "image": "http://localhost:2999/kus.png" },
      { "department": "pm", "title": "ПМ", "image": "http://localhost:2999/pm.png" },
      { "department": "231", "title": "БК № 231" },
      { "department": "234", "title": "БК № 234" },
      { "department": "239", "title": "БК № 239" },
      { "department": "244", "title": "БК № 244" },
      { "department": "250", "title": "БК № 250" }
    ]');

CREATE TABLE get_departments_external (
    id int(10) NOT NULL AUTO_INCREMENT,
    data LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PRIMARY KEY (id)
);

INSERT INTO get_departments_external (data) VALUES ('[
      { "department": "1", "title": "1" },
      { "department": "2", "title": "2" },
      { "department": "3", "title": "3" },
      { "department": "4", "title": "4" },
      { "department": "5", "title": "5" },
      { "department": "6", "title": "6" },
      { "department": "7", "title": "7" },
      { "department": "8", "title": "8" },
      { "department": "9", "title": "9" },
      { "department": "10", "title": "10" }
    ]');

CREATE TABLE get_check_departments (
    id int(10) NOT NULL AUTO_INCREMENT,
    data LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PRIMARY KEY (id)
);

INSERT INTO get_check_departments (data) VALUES ('[
      { "institute": "iit", "department": "ippo" },
      { "institute": "iit", "department": "mosit" },
      { "institute": "iit", "department": "ppi" },
      { "institute": "iit", "department": "dt" },
      { "institute": "iit", "department": "vt" },
      { "institute": "iit", "department": "itae" },
      { "institute": "iit", "department": "kus" },
      { "institute": "iit", "department": "pm" },
      { "institute": "iit", "department": "231" },
      { "institute": "iit", "department": "234" },
      { "institute": "iit", "department": "239" },
      { "institute": "iit", "department": "244" },
      { "institute": "iit", "department": "250" }
    ]');

CREATE TABLE get_department (
    id int(10) NOT NULL AUTO_INCREMENT,
    department TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    chief TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    contacts_department LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    opening_hours_department LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    important_information LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    image_department TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PRIMARY KEY (id)
);

INSERT INTO get_department (department, title, chief, contacts_department, opening_hours_department, important_information, image_department) VALUES ('ippo', 'ИиППО', 'Болбаков Роман Геннадьевич', '[
                                                                                                                                                     { "contact": "Кабинет", "information": "Пр-т Вернадского, 78, корпус Г, ауд. Г-227" },
                                                                                                                                                         { "contact": "Телефон", "information": "+7 499 215-65-65 доб. 4047" },
                                                                                                                                                         { "contact": "E-mail", "information": "bolbakov@mirea.ru" },
                                                                                                                                                         { "contact": "Вконтакте", "information": "https://vk.com/ippo_it" }
                                                                                                                                                         ]', '[
                                                                                                                                                     { "day": "ПН", "time": "14:00 — 16:00" },
                                                                                                                                                         { "day": "ВТ", "time": "14:00 — 16:00" },
                                                                                                                                                         { "day": "СР", "time": "14:00 — 16:00" }
                                                                                                                                                         ]', 'Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий.', '/ippo_2.png');

CREATE TABLE get_departments_baccalaureate (
    id int(10) NOT NULL AUTO_INCREMENT,
    department TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    image TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    href TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    course TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    control TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    groups LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PRIMARY KEY (id)
);

INSERT INTO get_departments_baccalaureate (department, title, image, href, course, control, groups) VALUES ('ippo', 'Программирование на языка джава', '/java.png', '/iit/ippo/java', '2 курс 3 семестр', 'Экзамен', '["ИКБО", "ИНБО", "ИВБО", "ИМБО"]'),('ippo', 'Дизайн мобильных приложений', '/design.png', '/iit/ippo/design', '2 курс 4 семестр', 'Курсовая работа', '["ИКБО-03-21", "ИКБО-13-21", "ИКБО-33-21"]'),('ippo', 'Моделирование сред и разработка приложений виртуальной и дополненной реальности', '/3d.png', '/iit/ippo/3d', '3 курс 5 семестр', 'Зачёт', '["ИКБО-20-21"]'),('ippo', 'Разработка серверных частей интернет ресурсов', '/backend.png', '/iit/ippo/backend', '3 курс 5 семестр', 'Экзамен', '[
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "ИКБО-01-21",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "ИКБО-10-21",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "ИКБО-16-21",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "ИКБО-20-21",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "ИКБО-24-21",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "ИКБО-30-21",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "ИКБО-32-21",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "ИКБО-02-21",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "ИКБО-03-21",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "ИКБО-13-21",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "ИКБО-33-21"]');

CREATE TABLE get_departments_magistracy (
    id int(10) NOT NULL AUTO_INCREMENT,
    department TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    image TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    href TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    course TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    control TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    groups LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PRIMARY KEY (id)
);

INSERT INTO get_departments_magistracy (department, title, image, href, course, control, groups) VALUES ('ippo','Разработка клиент-серверных приложений','/fullstack.png','/iit/ippo/fullstack','1 курс 2 семестр','Экзамен','["ИКМО", "ИНМО", "ИВМО", "ИММО"]'),('ippo','Системы захвата движения и отслеживания объектов','/mocap.png','/iit/ippo/motioncapture','1 курс 2 семестр','Экзамен','["ИКМО", "ИНМО", "ИВМО", "ИММО"]'),('ippo','Настройка и администрирование сервисного программного обеспечения','/adm.png','/iit/ippo/adm','1 курс 2 семестр','Зачёт','["ИКМО", "ИНМО", "ИВМО", "ИММО"]');

CREATE TABLE get_departments_specialty (
    id int(10) NOT NULL AUTO_INCREMENT,
    department TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    image TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    href TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    course TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    control TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    groups LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PRIMARY KEY (id)
);

CREATE TABLE discipline (
    id int(10) NOT NULL AUTO_INCREMENT,
    discipline TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    allowance TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    image TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    course TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    control TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    groups LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    format TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    important_information LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    array LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PRIMARY KEY (id)
);

INSERT INTO discipline (discipline,title,allowance, image, course, control, groups, format, important_information, array) VALUES ('java','Программирование на языка джава','Ведомость , получать допуск лично НЕ нужно','/java_long.png','2 курс 3 семестр','Экзамен', '["ИКБО", "ИНБО", "ИВБО", "ИМБО"]', 'Тест в аудитории', 'Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий.', '[{"day": "21.02.24","time": "14:20 — 15:50","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-420","examiner": "Джавин Д.Д. , Котлинова К.К.","type": "offline"},{"day": "28.02.24","time": "14:20 — 15:50","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-420","examiner": "Джавин Д.Д. , Котлинова К.К.","type": "offline"},{"day": "06.03.24","time": "12:40 — 14:10","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-420","examiner": "Джавин Д.Д.","type": "offline"},{"day": "13.03.24","time": "12:40 — 14:10","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-420","examiner": "Джавин Д.Д.","type": "offline"},{"day": "20.03.24","time": "12:40 — 14:10","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-420","examiner": "Джавин Д.Д.","type": "offline"},{"day": "27.03.24","time": "12:40 — 14:10","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-420","examiner": "Джавин Д.Д.","type": "offline"},{"day": "03.05.23","time": "14:20 — 15:50","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-439","examiner": "Котлинова К.К.","type": "offline"}]'),
                                                                                    ('design','Дизайн мобильных приложений','Ведомость , получать допуск лично НЕ нужно','/design_long.png','2 курс 4 семестр','Курсовая работа','["ИКБО-03-21", "ИКБО-13-21", "ИКБО-33-21"]', 'Тест в аудитории', 'Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий.', '[{"day": "20.02.24","time": "16:20 — 17:50","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-421","examiner": "Дизаинов Д.Д.","type": "offline"},{"day": "05.03.24","time": "16:20 — 17:50","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-421","examiner": "Дизаинов Д.Д.","type": "offline"},{"day": "19.03.24","time": "16:20 — 17:50","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-421","examiner": "Дизаинов Д.Д.","type": "offline"},{"day": "02.05.23","time": "16:20 — 17:50","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-421","examiner": "Дизаинов Д.Д.","type": "offline"}]'),
                                                                                    ('3d','Моделирование сред и разработка приложений виртуальной и дополненной реальности','Ведомость , получать допуск лично НЕ нужно','/3d_long.png','3 курс 5 семестр','Зачёт','["ИКБО-20-21"]', 'Онлайн', 'Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий.', '[{"day": "20.02.24","time": "18:00 — 19:30","href": "https://online-edu.mirea.ru/my/","examiner": "Графикова Г.Г.","type": "online"},{"day": "27.02.24","time": "18:00 — 19:30","href": "https://online-edu.mirea.ru/my/","examiner": "Аниматов А.А.","type": "online"},{"day": "05.03.24","time": "18:00 — 19:30","href": "https://online-edu.mirea.ru/my/","examiner": "Текстуров Т.Т.","type": "online"},{"day": "12.03.24","time": "18:00 — 19:30","href": "https://online-edu.mirea.ru/my/","examiner": "Светов С.С.","type": "online"},{"day": "19.03.24","time": "18:00 — 19:30","href": "https://online-edu.mirea.ru/my/","examiner": "Тенев Т.Т.","type": "online"},{"day": "26.03.24","time": "18:00 — 19:30","href": "https://online-edu.mirea.ru/my/","examiner": "Рендеров Р.Р.","type": "online"},{"day": "02.05.23","time": "18:00 — 19:30","href": "https://online-edu.mirea.ru/my/","examiner": "Графикова Г.Г.","type": "online"}]'),
                                                                                    ('backend','Разработка серверных частей интернет ресурсов','Ведомость , получать допуск лично НЕ нужно','/backend_long.png','3 курс 5 семестр','Экзамен','["ИКБО-01-21","ИКБО-10-21","ИКБО-16-21","ИКБО-20-21","ИКБО-24-21","ИКБО-30-21","ИКБО-32-21","ИКБО-02-21","ИКБО-03-21","ИКБО-13-21","ИКБО-33-21"]', 'Тест в СДО', 'Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий.', '[{"day": "до 31.06.24","href": "https://online-edu.mirea.ru/my/","type": "test"}]'),
                                                                                    ('fullstack','Разработка клиент-серверных приложений','Ведомость , получать допуск лично НЕ нужно','/fullstack_long.png','1 курс 2 семестр','Экзамен', '["ИКМО", "ИНМО", "ИВМО", "ИММО"]', 'Тест в аудитории', 'Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий.', '[{"day": "23.02.24","time": "18:00 — 19:30","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-421","examiner": "Фуллстековна Ф.Ф.","type": "offline"},{"day": "08.03.24","time": "18:00 — 19:30","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-421","examiner": "Фуллстековна Ф.Ф.","type": "offline"},{"day": "22.03.24","time": "18:00 — 19:30","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-421","examiner": "Фуллстековна Ф.Ф.","type": "offline"},{"day": "05.05.23","time": "18:00 — 19:30","classroom": "Пр-т Вернадского, 78, корпус А, ауд. А-421","examiner": "Фуллстековна Ф.Ф.","type": "offline"}]'),
                                                                                    ('motioncapture','Системы захвата движения и отслеживания объектов','Ведомость , получать допуск лично НЕ нужно','/mocap_long.png','1 курс 2 семестр','Экзамен', '["ИКМО", "ИНМО", "ИВМО", "ИММО"]', 'Тест в СДО', 'Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий.', '[{"day": "до 31.06.24","href": "https://online-edu.mirea.ru/my/","type": "test"}]'),
                                                                                    ('adm','Настройка и администрирование сервисного программного обеспечения','Ведомость , получать допуск лично НЕ нужно','/adm_long.png','1 курс 2 семестр','Зачёт', '["ИКМО", "ИНМО", "ИВМО", "ИММО"]', 'Онлайн', 'Институт информационных технологий — структурное подразделение МИРЭА — Российского технологического университета, осуществляющее подготовку бакалавров и магистров по приоритетным направлениям: программная инженерия, прикладная информатика, информатика и вычислительная техника, прикладная математика. В рамках данных направлений реализуется широкий спектр профилей бакалавриата и магистерских программ, охватывающий все возможные сферы интересов и области трудоустройства современных и перспективных профессионалов в вопросах информационно-коммуникационных технологий.', '[{"day": "27.02.24","time": "18:00 — 19:30","href": "https://online-edu.mirea.ru/my/","examiner": "Админов А.А.","type": "online"},{"day": "12.03.24","time": "18:00 — 19:30","href": "https://online-edu.mirea.ru/my/","examiner": "Админов А.А.","type": "online"},{"day": "26.03.24","time": "18:00 — 19:30","href": "https://online-edu.mirea.ru/my/","examiner": "Админов А.А.","type": "online"}]');