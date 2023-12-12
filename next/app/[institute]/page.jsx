import UnitedStyle from '@/style/style_united.module.scss';
import Image from 'next/image';
import My_Api from '@/my_api';
import { BigBlockInformationInstitute } from '@/components/primary-information-component';
import { CardDepartment } from '@/components/cards';
import { PanelTableInstitute } from '@/components/table-control-panel';
import renderBlocks from '@/common-tools';

export default async function Institute({ params }) {
  const dataInstitute = await My_Api.getInstitute(params.institute);

  let blocks_contacts_department = undefined,
    blocks_hours_department = undefined;
  if (dataInstitute.contacts_department !== undefined) {
    blocks_contacts_department = renderBlocks(dataInstitute.contacts_department, 'contacts_department');
  }
  if (dataInstitute.opening_hours_department !== undefined) {
    blocks_hours_department = renderBlocks(dataInstitute.opening_hours_department, 'opening_hours_department');
  }

  let blocks_contacts_coordinator = undefined,
    blocks_hours_coordinator = undefined;
  if (dataInstitute.contacts_coordinator !== undefined) {
    blocks_contacts_coordinator = renderBlocks(dataInstitute.contacts_coordinator, 'contacts_coordinator');
  }
  if (dataInstitute.opening_hours_coordinator !== undefined) {
    blocks_hours_coordinator = renderBlocks(dataInstitute.opening_hours_coordinator, 'opening_hours_coordinator');
  }

  const dataDepartmentsInternal = await My_Api.getDepartmentsInternal(params.institute),
    dataDepartmentsExternal = await My_Api.getDepartmentsExternal(params.institute);


  return (
    <>
      <Image src={dataInstitute.image_institute} alt="Институт" className={UnitedStyle.image} width={1000} height={1000} />
      <section className={UnitedStyle.background}>
        <BigBlockInformationInstitute
          title={dataInstitute.title}
          blocks_contacts_department={blocks_contacts_department}
          blocks_hours_department={blocks_hours_department}
          important_information_department={dataInstitute.important_information_department}
          coordinator={dataInstitute.coordinator}
          blocks_contacts_coordinator={blocks_contacts_coordinator}
          blocks_hours_coordinator={blocks_hours_coordinator}
          important_information_coordinator={dataInstitute.important_information_coordinator}
        />
        <PanelTableInstitute
          internal={dataDepartmentsInternal.map((elem) => (
            <CardDepartment
              key={'CardDepartmentInternal' + elem.department}
              title={elem.title}
              href={'/' + params.institute + '/' + elem.department}
              image={elem.image}
            />
          ))}
          external={dataDepartmentsExternal.map((elem) => (
            <CardDepartment
              key={'CardDepartmentInternal' + elem.department}
              title={elem.title}
              href={'/' + params.institute + '/' + elem.department}
              image={elem.image}
            />
          ))}
        />
      </section>
    </>
  );
}
