import Image from 'next/image';
import FileImage from '@/public/NoImage.png';
import UnitedStyle from '@/style/style_united.module.scss';
import { LoadingBigBlockInformationInstitute } from '@/components/primary-information-component';

export default function Loading() {
  return (
    <>
      <Image src={FileImage} alt="Институт" className={UnitedStyle.image} />
      <section className={UnitedStyle.background}>
        <LoadingBigBlockInformationInstitute />
      </section>
    </>
  );
}
