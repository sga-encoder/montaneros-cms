import { Block } from 'payload/types';
import translateX from '../../field/translateX';
import translateY from '../../field/translateY';


const SearchSectionBlock: Block = {
  slug: 'seccion-de-busqueda', // required
  fields: [ // required
    {
      name: 'seccionDeBusquedaDe',
      type: 'select',
      required: true,
      options: [
        {
          label: 'tour Operadora',
          value: 'tour-operadora',
        },
        {
          label: 'Blog',
          value: 'blog',
        }
      ],
    }
  ]
};

export default SearchSectionBlock;