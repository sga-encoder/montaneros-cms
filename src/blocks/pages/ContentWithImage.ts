import { Block } from 'payload/types';


const ContentWithImageBlock: Block = {
  slug: 'contenido-con-imagen', // required
  fields: [ // required
    {
      name: 'tipoDeLayout',
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
    {
      name: 'imagen',
      type: 'upload', 
      relationTo: 'media',
      filterOptions: {
        or: [
          {
            clase: {
              equals: 'imagen',
            }
          }
        ]
      },
      required: true,
    },
    {
      name: 'tieneIlustracion',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'ilustracion',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        or: [
          {
            clase: {
              equals: 'recurso',
            }
          }
        ]
      },
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
    },
  ]
};

export default ContentWithImageBlock;