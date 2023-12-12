import Style from './informations-blocks.module.scss';
import classNames from 'classnames';

export function BlockInfo({ heading, text }) {
  return (
    <div className={classNames(Style.block, Style.block_info)}>
      <p>{heading}</p>
      <hr />
      <p>{text}</p>
    </div>
  );
}

export function BlockLoading() {
  return (
    <div className={classNames(Style.block, Style.block_loading)}>
      <div className={Style.loading_wave} />
    </div>
  );
}

export function BlockLoadingBig() {
  return (
    <div className={classNames(Style.block, Style.block_loading_big)}>
      <div className={Style.loading_wave} />
    </div>
  );
}
