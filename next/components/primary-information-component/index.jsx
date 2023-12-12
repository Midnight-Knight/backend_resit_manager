import Style from './primary-information-component.module.scss';
import Information from '@/components/information-focus-module';
import { BlockLoading, BlockLoadingBig } from '@/components/informations-blocks';

export function BigBlockInformationInstitute({
  title,
  blocks_contacts_department,
  blocks_hours_department,
  important_information_department,
  coordinator,
  blocks_contacts_coordinator,
  blocks_hours_coordinator,
  important_information_coordinator,
}) {
  return (
    <div className={Style.mainBlock}>
      {title !== undefined && <Information heading={<h4>Институт</h4>} element={<p>{title}</p>} />}
      {blocks_contacts_department !== undefined && <Information heading={<h4>Контакты УО</h4>} element={blocks_contacts_department} />}
      {blocks_hours_department !== undefined && <Information heading={<h4>Часы работы УО</h4>} element={blocks_hours_department} />}
      {important_information_department !== undefined && (
        <Information heading={<h4>Важная информация</h4>} element={<p>{important_information_department}</p>} />
      )}
      {coordinator !== undefined && <Information heading={<h4>Ответственный по работе со студентами</h4>} element={<p>{coordinator}</p>} />}
      {blocks_contacts_coordinator !== undefined && (
        <Information heading={<h4>Контакты ответственного по работе со студентами</h4>} element={blocks_contacts_coordinator} />
      )}
      {blocks_hours_coordinator !== undefined && <Information heading={<h4>Часы работы</h4>} element={blocks_hours_coordinator} />}
      {important_information_coordinator !== undefined && (
        <Information heading={<h4>Важная информация</h4>} element={<p>{important_information_coordinator}</p>} />
      )}
    </div>
  );
}

export function LoadingBigBlockInformationInstitute() {
  return (
    <div className={Style.mainBlock}>
      <Information heading={<BlockLoading />} element={<BlockLoading />} />
      <Information heading={<BlockLoading />} element={<BlockLoading />} />
      <Information heading={<BlockLoading />} element={<BlockLoading />} />
      <Information heading={<BlockLoading />} element={<BlockLoadingBig />} />
    </div>
  );
}

export function BigBlockInformationDepartment({
  title,
  chief,
  blocks_contacts_department,
  blocks_hours_department,
  important_information,
}) {
  return (
    <div className={Style.mainBlock}>
      {title !== undefined && <Information heading={<h4>Кафедра</h4>} element={<p>{title}</p>} />}
      {chief !== undefined && <Information heading={<h4>Зав. кафедрой</h4>} element={chief} />}
      {blocks_contacts_department !== undefined && <Information heading={<h4>Контакты кафедры</h4>} element={blocks_contacts_department} />}
      {blocks_hours_department !== undefined && (
        <Information heading={<h4>Часы приёма кафедры</h4>} element={<p>{blocks_hours_department}</p>} />
      )}
      {important_information !== undefined && <Information heading={<h4>Важная информация</h4>} element={<p>{important_information}</p>} />}
    </div>
  );
}

export function BigBlockInformationDiscipline({
  title,
  allowance,
  course,
  control,
  groups,
  format,
  important_information
}) {
  return (
      <div className={Style.mainBlock}>
        {title !== undefined && <Information heading={<h4>Дисциплина</h4>} element={<p>{title}</p>} />}
        {allowance !== undefined && <Information heading={<h4>Допуск</h4>} element={<p>{allowance}</p>} />}
        {course !== undefined && <Information heading={<h4>Курс</h4>} element={<p>{course}</p>} />}
        {control !== undefined && <Information heading={<h4>Форма контроля</h4>} element={<p>{control}</p>} />}
        {groups !== undefined && <Information heading={<h4>Направления</h4>} element={<p>{groups.join(', ')}</p>} />}
        {format !== undefined && <Information heading={<h4>Формат сдачи</h4>} element={<p>{format}</p>} />}
        {important_information !== undefined && <Information heading={<h4>Важная информация</h4>} element={<p>{important_information}</p>} />}
      </div>
  );
}
