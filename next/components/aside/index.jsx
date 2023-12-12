'use client';
import Style from './aside.module.scss';
import { NavLink } from '@/components/button-and-link';
import FileHomeImage from '@/public/home.svg';
import FileSettingsImage from '@/public/settings.svg';
import FileResitImage from '@/public/resit.svg';
import { usePathname } from 'next/navigation';

export default function Aside({ instituteLink }) {
  const path = usePathname();

  return (
    <div className={Style.nav}>
      <h4>Меню</h4>
      <ul>
        <NavLink active={path === '/'} key={'NavLink_' + 'Home'} href={'/'} title={'Главная'} image={FileHomeImage} />
        <NavLink active={path === '/settings'} key={'NavLink_' + 'Settings'} href={'/'} title={'Настройки'} image={FileSettingsImage} />
        <NavLink active={path === '/my_resit'} key={'NavLink_' + 'My_Resit'} href={'/'} title={'Избранное'} image={FileResitImage} />
      </ul>
      <h4>Институты</h4>
      <ul>
        {instituteLink.map((elem) => (
          <NavLink
            active={path.includes(elem.institute)}
            key={'NavLink_' + elem.institute.slice(1)}
            href={elem.institute}
            title={elem.title}
            image={elem.image}
          />
        ))}
      </ul>
    </div>
  );
}
