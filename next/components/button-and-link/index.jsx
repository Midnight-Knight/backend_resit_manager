import Link from 'next/link';
import Image from 'next/image';
import Style from './button-and-link.module.scss';
import classNames from 'classnames';
import chevron from '@/public/chevron.svg';
import mini from '@/public/mini.svg';
import outline from "@/public/outline.svg";

export function NavLink({ href, active, image, title }) {
  return (
    <Link href={href} className={active === true ? classNames(Style.buttonNav, Style.buttonNavActive) : Style.buttonNav}>
      <Image src={image} alt={title} className={Style.image} width={100} height={100} />
      <span>{title}</span>
    </Link>
  );
}

export function ButtonLink({ href }) {
  return (
    <Link href={href} className={Style.link}>
      <span>Перейти</span>
      <Image src={chevron} alt={'chevron'} />
    </Link>
  );
}

export function ButtonLinkSDO({ href }) {
  return (
      <Link href={href} className={Style.link}>
        <span>Перейти на СДО</span>
        <Image src={mini} alt={'mini'} />
      </Link>
  );
}

export function ButtonLinkFavourites() {
  return (
      <Link href={"/"} className={Style.link}>
        <span>Добавить в избранное</span>
        <Image src={outline} alt={'outline'} />
      </Link>
  );
}