import Style from './search.module.scss';

export default function Search() {
  return (
    <div className={Style.search}>
      <div className={Style.searchInput}>
        <div className={Style.iconSearch} />
        <input type="text" placeholder="Введите запрос" />
      </div>
      <button className={Style.buttonNotification} />
    </div>
  );
}
