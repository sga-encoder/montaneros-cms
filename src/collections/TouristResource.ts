import { slugField } from './../field/slug';
import { CollectionConfig } from 'payload/types';
import { isEditor } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import imagen from '../field/media/imagen';

const TouristResource: CollectionConfig = {
  slug: 'recurso-turistico',
  admin: {
    useAsTitle: 'titulo',
    disableDuplicate: true,
  },
  versions: {
    drafts: true,
  },
  access: {
    create: isEditor,
    read: publishedOnly,
    readVersions: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  hooks: {
    beforeValidate: [({ data, req, operation }) => { 
      if (operation === 'create') {
        const result = { ...data, _id: data.slug, autor: req.user.id}
        return result
      } else if (operation === 'update') {
        const result = { ...data, _id: data.slug}
        return result
      }
    }],
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      index: true,
      required: true,
    },
    {
      name: 'categoria',
      type: 'select',
      options: [
        { label: 'Cascada', value: 'cascada' },
        { label: 'Mirador', value: 'mirador' },
        { label: 'Laguna', value: 'laguna' },
        { label: 'Sendero', value: 'sendero' },
        { label: 'Sujeto Histórico', value: 'sujeto-historico' },
        { label: 'Otro', value: 'otro' },
      ],
      index: true,
      required: true,
    },
    {
      name: 'descripcion',
      type: 'textarea',
      required: true,
    },
    {
      type: 'collapsible',
      label: 'Imagenes de presentacion',
      fields: [
        {
          name: 'imagenes',
          type: 'array',
          minRows: 1,
          fields: [
            imagen
          ]
        },
      ]
    },
    {
      name: 'ubicacion',
      type: 'textarea',
      label: 'Se encuentra en el sitio de Google Maps. En la seccion de compartir. Insertar un mapa. Copie el link que esta iframe y peguelo aquí.',
      required: true,
    },
    slugField(),
    {
      name: 'autor',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
      access: {
        update: ({ req, siblingData }) => {
          const userId = req.user && req.user.id;
          const userRole = req.user && req.user.roles;
          const authorId =  siblingData?.autor?.id;
          if (userRole.includes('admin')) return true;
          if (userId === authorId) return true
          return false;
        }
      }
    },
    {
      name: 'id',
      type: 'text',
    },
    
  ]
}
export default TouristResource;