import Style from './header.module.scss';
import Search from '@/components/search';
import Image from 'next/image';
import MyImage from '@/public/Mirea.svg';

export default function Header() {
  return (
    <header className={Style.header}>
      <div className={Style.blockLogoAndTitle}>
        <Image src={MyImage} alt="МИРЭА" className={Style.image} />
        <h4>Менеджер пересдач РТУ МИРЭА</h4>
      </div>
      <Search />
      <div className={Style.future} />
    </header>
  );
}
