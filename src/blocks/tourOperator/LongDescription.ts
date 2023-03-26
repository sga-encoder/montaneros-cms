import { Block } from 'payload/types';

const LongDescriptionTourOperatorsBlock: Block = {
  slug: 'descripcion-larga',
  fields: [
    {
      name: 'descripcion',
      type: 'textarea',
      required: true,
    },
  ]
};


export default LongDescriptionTourOperatorsBlock