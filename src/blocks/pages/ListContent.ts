import { Block } from 'payload/types';


const ListContentBlock: Block = {
  slug: 'lists-de-contenido', // required
  fields: [ // required
    {
      name: 'titulo',
      type: 'text',
      required: true,
    },
    {
      name: 'puntos',
      type: 'array',
      admin: {
        condition: (data, siblingData) => siblingData.tipos === 'lista' ? true : false,
      },
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
          name: 'ilustracion',
          type: 'upload', 
          relationTo: 'media',
          required: true,
        },
      ]
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
    },
  ]
};

export default ListContentBlock;