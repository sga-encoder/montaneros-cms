import { Block } from 'payload/types';


const ContentBlock: Block = {
  slug: 'content', // required
  fields: [ // required
    {
      name: 'titulo',
      type: 'text',
      required: true,
    },
    {
      name:  'contenido', 
      type:  'textarea',  
      required: true,
    },
    {
      name: 'nesecitaUrl',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (data, siblingData) => siblingData.nesecitaUrl ? true : false,
      },
      required: true,
    }
  ]
};

export default ContentBlock;