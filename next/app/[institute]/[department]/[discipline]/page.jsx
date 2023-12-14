import My_Api from '@/my_api';
import Image from 'next/image';
import NoImage from '@/public/NoImage.png';
import UnitedStyle from '@/style/style_united.module.scss';
import {
   BigBlockInformationDiscipline,
} from '@/components/primary-information-component';
import {
  PanelTableRetake,
} from '@/components/table-control-panel';


export default async function Discipline({ params }) {
  const dataDiscipline = await My_Api.getDisciplineInfo(params.discipline);

  const dataRetakes = await My_Api.getRetakesDiscipline(params.discipline);
  console.log("1", dataRetakes);


  return (
      <>
        <Image
            src={dataDiscipline.image !== undefined ? dataDiscipline.image : NoImage}
            alt="Дисциплина"
            className={UnitedStyle.image}
            width={1000}
            height={1000}
        />
        <section className={UnitedStyle.background}>
          <BigBlockInformationDiscipline
            title={dataDiscipline.title}
            allowance={dataDiscipline.allowance}
            course={dataDiscipline.course}
            control={dataDiscipline.control}
            groups={dataDiscipline.groups}
            format={dataDiscipline.format}
            important_information={dataDiscipline.important_information}
          />
          <PanelTableRetake retakes={(dataRetakes === undefined || dataRetakes.array === undefined) ? [] : dataRetakes.array}/>
        </section>
      </>
  );
}