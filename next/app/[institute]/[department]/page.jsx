import Image from 'next/image';
import UnitedStyle from '@/style/style_united.module.scss';
import { BigBlockInformationDepartment } from '@/components/primary-information-component';
import NoImage from '@/public/NoImage.png';
import renderBlocks from '@/common-tools';
import My_Api from '@/my_api';
import { PanelTableDepartment } from '@/components/table-control-panel';

export default async function Department({ params }) {
  const dataDepartment = await My_Api.getDepartment(params.department);

  let blocks_contacts_department = undefined,
    blocks_hours_department = undefined;
  if (dataDepartment.contacts_department !== undefined) {
    blocks_contacts_department = renderBlocks(dataDepartment.contacts_department, 'contacts_department');
  }
  if (dataDepartment.opening_hours_department !== undefined) {
    blocks_hours_department = renderBlocks(dataDepartment.opening_hours_department, 'opening_hours_department');
  }

  // пока временно ,потом заменю на метод класса менеджера api
  const dataBaccalaureate = await My_Api.getDepartmentsBaccalaureate(params.department),
    dataMagistracy = await My_Api.getDepartmentsMagistracy(params.department),
    dataSpecialty = await My_Api.getDepartmentsSpecialty(params.department);


  return (
    <>
      <Image
        src={dataDepartment.image_department !== undefined ? dataDepartment.image_department : NoImage}
        alt="Кафедра"
        className={UnitedStyle.image}
        width={1000}
        height={1000}
      />
      <section className={UnitedStyle.background}>
        <BigBlockInformationDepartment
          title={dataDepartment.title}
          chief={dataDepartment.chief}
          blocks_contacts_department={blocks_contacts_department}
          blocks_hours_department={blocks_hours_department}
          important_information={dataDepartment.important_information}
        />
        <PanelTableDepartment baccalaureate={dataBaccalaureate} magistracy={dataMagistracy} specialty={dataSpecialty} />
      </section>
    </>
  );
}
