import { Block } from 'payload/types';
import recurso from '../../field/media/recursos';


const ContentBlock: Block = {
  slug: 'contenido', // required
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
      name: 'nesecitaUnRecurso',
      type: 'checkbox',
      defaultValue: false,
    },
    recurso,
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