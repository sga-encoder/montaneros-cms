import { Block } from 'payload/types';
import ContentBlock from './content';
import ContentWithImageBlock from './ContentWithImage';


const ContentWithTourOperatorsBlock: Block = {
  slug: 'contenido-con-tour-operadoras', // required
  fields: [ // required
    {
      name: 'tipoDeContenido',
      type: 'blocks',
      blocks: [
        ContentBlock,
        ContentWithImageBlock
      ]
    },
    {
      name: 'tourOperadora',
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