import Image from 'next/image';
import FileImage from '@/public/NoImageCard.png';
import {
  ButtonLink,
  ButtonLinkFavourites,
  ButtonLinkSDO,
} from '@/components/button-and-link';
import classNames from 'classnames';
import Style from './cards.module.scss';
import Link from 'next/link';

/*
image - изображение
title - название
href - ссылка
*/
export function CardDepartment({ image, title, href }) {
  return (
    <div className={classNames(Style.card, Style.department)}>
      <div>
        {image !== undefined ? (
          <Image src={image} alt={title} className={Style.image} width={1000} height={1000} />
        ) : (
          <Image src={FileImage} alt={'NoImageCard'} className={Style.image} width={1000} height={1000} />
        )}
        <div>
          <h5>Кафедра</h5>
          <h3>{title}</h3>
        </div>
      </div>
      <ButtonLink href={href} />
    </div>
  );
}

/*
image - изображение
title - название
href - ссылка
course - курс и семестр
control - формат оценивания (экз, зачёт, диф зачёт, курсач)
groups - группы или поток (направление в основном)
*/
export function CardDisciplines({ image, title, course, control, groups, href }) {
  console.log(href);
  return (
      <div className={classNames(Style.card, Style.disciplines)}>
        <div>
          {image !== undefined ? (
              <Image src={image} alt={title} className={Style.image} width={1000} height={1000} />
          ) : (
              <Image src={FileImage} alt={'NoImageCard'} className={Style.image} width={1000} height={1000} />
          )}
          <div>
            <h5>Дисциплина</h5>
            <h3>{title}</h3>
          </div>
        </div>
        <div>
          <div>
            <p>Курс: {course}</p>
            <p>Форма контроля: {control}</p>
            <p>Группы: {groups.join(', ')}</p>
          </div>
          <ButtonLink href={href} />
        </div>
      </div>
  );
}

export function CardRetake({ day, time, classroom, examiner, href, type }) {
  return (
      <div className={classNames(Style.card, Style.retake)}>
        <div>
          <div>
            <h5>Пересдача</h5>
            {
              type === "test" ? <>
                <h3>Дата: {day}</h3>
              </> : (type === "online" ? <>
                <h3>Дата: {day}</h3>
                <h3>Время: {time}</h3>
                <h3>Преподаватель: {examiner}</h3>
              </> : <>
                <h3>Дата: {day}</h3>
                <h3>Время: {time}</h3>
                <h3>Кабинет: {classroom}</h3>
                <h3>Преподаватель: {examiner}</h3>
              </>)
            }
          </div>
        </div>
        <div>
          {(type === "online" || type === "test") ? <div>
            <h5>Ссылка на дисциплину в СДО</h5>
            <Link href={href}>{href}</Link>
          </div> : <></>
          }
          {
            type === "online" ? <div>
              <ButtonLinkSDO href={href} />
              <ButtonLinkFavourites />
            </div> : (
                type === "test" ? <>
                  <ButtonLinkSDO href={href} />
                </> : <ButtonLinkFavourites/>)
          }
        </div>
      </div>
  );
}
