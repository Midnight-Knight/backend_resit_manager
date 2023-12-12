import { BlockInfo } from '@/components/informations-blocks';

export default function renderBlocks(data, type) {
  return (
    <div>
      {type === 'contacts_department' || type === 'contacts_coordinator'
        ? data.map((elem, index) => <BlockInfo key={type + '_' + index} heading={elem.contact} text={elem.information} />)
        : data.map((elem, index) => <BlockInfo key={type + '_' + index} heading={elem.day} text={elem.time} />)}
    </div>
  );
}
