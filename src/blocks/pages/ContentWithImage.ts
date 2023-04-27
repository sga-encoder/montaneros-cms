import { Block } from 'payload/types';
import imagen from '../../field/media/imagen';
import recurso from '../../field/media/recursos';


const ContentWithImageBlock: Block = {
  slug: 'contenido-con-imagen', // required
  fields: [ // required
    {
      name: 'estiloDeContenido',
      type: 'select',
      defaultValue: 'uno',
      options: [
        {
          label: 'Uno',
          value: 'uno',
        },
        {
          label: 'Dos',
          value: 'dos',
        },
      ]
    },
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
    imagen,
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
    },
  ]
};

export default ContentWithImageBlock;