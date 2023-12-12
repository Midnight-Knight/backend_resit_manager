'use client';
import Style from './adaptive-grid-table-card.module.scss';

export default function Table({ array }) {
  return <div className={Style.table}>{array}</div>;
}
