create table reception_time
(
    id_reception_time int auto_increment
        primary key,
    weekday           int not null,
    time_start        int not null,
    time_end          int not null
);

create table information_data
(
    id_information_data int auto_increment
        primary key,
    office              text not null,
    telephone           text null,
    email               text null,
    social_network      text null,
    informative_data    text null
);

create table reception_time_has_informative_data
(
    id_information_data int not null,
    id_reception_time   int not null,
    constraint reception_time_has_informative_data_ibfk_1
        foreign key (id_information_data) references information_data (id_information_data)
            on update cascade,
    constraint reception_time_has_informative_data_ibfk_2
        foreign key (id_reception_time) references reception_time (id_reception_time)
            on update cascade
);

create table post
(
    id_post    int auto_increment
        primary key,
    title_post text not null
);

create table employee
(
    id_employee int auto_increment
        primary key,
    surname     text not null,
    name        text not null,
    patronymic  text not null,
    id_post     int  not null,
    constraint employee_ibfk_1
        foreign key (id_post) references post (id_post)
            on update cascade
);

create table important_employee
(
    id_employee         int not null
        primary key,
    id_informative_data int not null,
    constraint important_employee_ibfk_1
        foreign key (id_employee) references employee (id_employee)
            on update cascade,
    constraint important_employee_ibfk_2
        foreign key (id_informative_data) references information_data (id_information_data)
            on update cascade
);

create table department
(
    id_department         int auto_increment
        primary key,
    title_department      text not null,
    important_employee_id int  null,
    info                  text null,
    constraint department_ibfk_1
        foreign key (important_employee_id) references important_employee (id_employee)
            on update cascade
);

create table structural_division
(
    id_structural_division int auto_increment
        primary key,
    bool_institute         tinyint(1) not null,
    title                  text       not null,
    informative_data       int        null,
    important_employee_id  int        null,
    constraint structural_division_ibfk_1
        foreign key (informative_data) references information_data (id_information_data)
            on update cascade,
    constraint structural_division_ibfk_2
        foreign key (important_employee_id) references important_employee (id_employee)
            on update cascade
);

create table department_has_structural_division
(
    id_structural_division int        not null,
    id_department          int        not null,
    inside                 tinyint(1) not null,
    constraint department_has_structural_division_ibfk_1
        foreign key (id_structural_division) references structural_division (id_structural_division)
            on update cascade,
    constraint department_has_structural_division_ibfk_2
        foreign key (id_department) references department (id_department)
            on update cascade
);

create table discipline
(
    id_discipline    int auto_increment
        primary key,
    title_discipline text not null,
    allowance        int  not null,
    term             int  not null,
    assessment       int  not null,
    delivery         int  not null,
    id_department    int  not null,
    constraint discipline_ibfk_1
        foreign key (id_department) references department (id_department)
            on update cascade
);

create table group_student
(
    id_group  int auto_increment
        primary key,
    direction int not null,
    number    int not null,
    year      int not null
);

create table discipline_has_group
(
    id_group      int not null,
    id_discipline int not null,
    constraint discipline_has_group_ibfk_1
        foreign key (id_group) references group_student (id_group)
            on update cascade,
    constraint discipline_has_group_ibfk_2
        foreign key (id_discipline) references discipline (id_discipline)
            on update cascade
);

create table retake
(
    id_retake         int auto_increment
        primary key,
    day_retake        int  not null,
    time_retake       int  not null,
    classroom_or_link text not null,
    id_discipline     int  not null,
    constraint retake_ibfk_1
        foreign key (id_discipline) references discipline (id_discipline)
            on update cascade
);

create table retake_has_employee
(
    id_retake   int not null,
    id_employee int not null,
    constraint retake_has_employee_ibfk_1
        foreign key (id_retake) references retake (id_retake)
            on update cascade,
    constraint retake_has_employee_ibfk_2
        foreign key (id_employee) references employee (id_employee)
            on update cascade
);