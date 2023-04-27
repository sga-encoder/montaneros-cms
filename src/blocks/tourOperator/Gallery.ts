import { Block } from 'payload/types';
import imagen from '../../field/media/imagen';


const GalleryTourOperatorBlock: Block = {
  slug: 'galeria', 
  fields: [ 
    {
      name: 'galeria',
      type: 'array',
      minRows: 2,
      fields: [
        imagen
      ]
    },
  ]
};

export default GalleryTourOperatorBlock;