import Style from './information-focus-module.module.scss';

export default function Information({ heading, element }) {
  return (
    <div className={Style.information}>
      {heading}
      <hr />
      {element}
    </div>
  );
}
