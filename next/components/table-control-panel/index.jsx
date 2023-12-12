'use client';
import Table from '@/components/adaptive-grid-table-card';
import { useState } from 'react';
import Style from './table-control-panel.module.scss';
import classNames from 'classnames';
import {CardDisciplines, CardRetake} from '@/components/cards';

export function PanelTableInstitute({ internal, external }) {
  const [selector, setSelector] = useState('internal');
  const array = { internal: internal, external: external };

  return (
    <section className={Style.Section}>
      <div className={Style.Selector}>
        <button className={classNames(Style.Button, selector === 'internal' && Style.ButtonActive)} onClick={() => setSelector('internal')}>
          Кафедры института
        </button>
        <button className={classNames(Style.Button, selector === 'external' && Style.ButtonActive)} onClick={() => setSelector('external')}>
          Внешние кафедры
        </button>
      </div>
      <Table array={array[selector]} />
    </section>
  );
}

export function PanelTableDepartment({ baccalaureate, magistracy, specialty }) {
  const [selector, setSelector] = useState(
    baccalaureate !== undefined
      ? 'baccalaureate'
      : magistracy !== undefined
      ? 'magistracy'
      : specialty !== undefined
      ? 'specialty'
      : undefined
  );

  const array = {
    baccalaureate:
      Array.isArray(baccalaureate) &&
      baccalaureate.map((elem, index) => (
        <CardDisciplines
          key={'baccalaureate_' + index}
          title={elem.title}
          href={elem.href}
          control={elem.control}
          course={elem.course}
          image={elem.image}
          groups={elem.groups}
        />
      )),
    magistracy:
      Array.isArray(magistracy) &&
      magistracy.map((elem, index) => (
        <CardDisciplines
          key={'magistracy' + index}
          title={elem.title}
          href={elem.href}
          control={elem.control}
          course={elem.course}
          image={elem.image}
          groups={elem.groups}
        />
      )),
    specialty:
      Array.isArray(specialty) &&
      specialty.map((elem, index) => (
        <CardDisciplines
          key={'specialty' + index}
          title={elem.title}
          href={elem.href}
          control={elem.control}
          course={elem.course}
          image={elem.image}
          groups={elem.groups}
        />
      )),
  };

  if (selector === undefined) {
    return <></>;
  } else {
    return (
      <section className={Style.Section}>
        <div className={Style.Selector}>
          {baccalaureate !== undefined && (
            <button
              className={classNames(Style.Button, selector === 'baccalaureate' && Style.ButtonActive)}
              onClick={() => setSelector('baccalaureate')}>
              Бакалавр
            </button>
          )}
          {magistracy !== undefined && (
            <button
              className={classNames(Style.Button, selector === 'magistracy' && Style.ButtonActive)}
              onClick={() => setSelector('magistracy')}>
              Магистратура
            </button>
          )}
          {specialty !== undefined && (
            <button
              className={classNames(Style.Button, selector === 'specialty' && Style.ButtonActive)}
              onClick={() => setSelector('specialty')}>
              Специалитет
            </button>
          )}
        </div>
        <Table array={array[selector]} />
      </section>
    );
  }
}

export function PanelTableRetake({ retakes }) {
  const [selector, setSelector] = useState('list');
  console.log(retakes);
  const array = Array.isArray(retakes) &&
      retakes.map((elem, index) => (
          <CardRetake
              key={'retake' + index}
              day={elem.day}
              href={elem.href}
              time={elem.time}
              classroom={elem.classroom}
              type={elem.type}
              examiner={elem.examiner}
          />
      ))

  return (
      <section className={Style.Section}>
        <div className={Style.Selector}>
          <button className={classNames(Style.Button, selector === 'list' && Style.ButtonActive)} onClick={() => setSelector('list')}>
            Список пересдач
          </button>
        </div>
        <Table array={array} />
      </section>
  );
}
