import { Block } from 'payload/types';
import ContentBlock from './Content';
import ContentWithImageBlock from './ContentWithImage';
import translateX from '../../field/translateX';
import translateY from '../../field/translateY';
import ilustracion from '../../field/media/ilustracion';


const ContentWithTourOperatorsBlock: Block = {
  slug: 'contenido-con-tour-operadoras', // required
  fields: [ // required
    {
      name: 'tipoDeContenido',
      type: 'blocks',
      maxRows: 1,
      minRows: 1,
      blocks: [
        ContentBlock,
        ContentWithImageBlock
      ]
    },
    {
      name: 'nesecitaIlustracion',
      type: 'checkbox',
      defaultValue: false,
    },
    ilustracion,
    {
      name: 'tourOperadoras',
      type: 'array',
      fields: [
        {
          name: 'tourOperadora',
          type: 'relationship',
          relationTo: 'tour-operadora',
          required: true
        }
      ]
    },
    

  ]
};

export default ContentWithTourOperatorsBlock;