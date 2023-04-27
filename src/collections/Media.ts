import { CollectionConfig } from 'payload/types';
import { isEditor } from '../access/isAdmin';

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    pagination: {
      defaultLimit: 25,
    }
  },
  access: {
    create: isEditor,
    read: () => true,
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      type: 'select',
      name: 'clase',
      required: true,
      defaultValue: 'default',
      options: [
        {
          label: 'Imagen',
          value: 'imagen',
        },
        {
          label: 'Ilustracion',
          value: 'ilustracion',
        },
        {
          label: 'Icono',
          value: 'icono',
        },
        {
          label: 'Recurso',
          value: 'recurso',
        },
        {
          label: 'Logo',
          value: 'logo'
        }
      ],
    },
    {
      name: 'alt',
      type: 'text',
    }
  ]
}

export default Media