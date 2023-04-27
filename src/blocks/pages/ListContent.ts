import { Block } from 'payload/types';
import ilustracion from '../../field/media/ilustracion';
import recurso from '../../field/media/recursos';


const ListContentBlock: Block = {
  slug: 'lista-con-contenido', // required
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
      ]
    },
    {
      name: 'titulo',
      type: 'text',
      required: true,
    },
    {
      name: 'puntos',
      type: 'array',
      fields: [
        {
          name: 'numero',
          type: 'number',
          required: true,
        },
        {
          name: 'contenido',
          type: 'textarea',
          required: true,
        },
        {
          name: 'nesecitaIlustracion',
          type: 'checkbox',
          defaultValue: true,
        },
        ilustracion,
        {
          name: 'invertido',
          type: 'checkbox',
          defaultValue: false,
        },
      ]
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
    },
  ]
};

export default ListContentBlock;