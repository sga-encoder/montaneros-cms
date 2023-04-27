import { CollectionConfig } from 'payload/types';
import { isEditor } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import { slugField } from '../field/slug';
import autor from '../field/autor';
import imagen from '../field/media/imagen';

const Blog: CollectionConfig = {
  slug: 'blog',
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
      required: true,
    },
    {
      name: 'categoria',
      type: 'select',
      options: [
        { label: 'Aventura', value: 'aventura' },
        { label: 'Cultural', value: 'cultural' },
        { label: 'Ecoturismo', value: 'ecoturismo' },
        { label: 'Gastronomia', value: 'gastronomia' },
        { label: 'Naturaleza', value: 'naturaleza' },
        { label: 'Religioso', value: 'religioso' },
        { label: 'Rural', value: 'rural' },
        { label: 'Salud', value: 'salud' },
        { label: 'Sol y playa', value: 'sol-y-playa' },
      ],
      required: true,
    },
    {
      name: 'imagenes',
      type: 'array',
      fields: [
        imagen
      ],
      required: true,
      minRows: 1,
      maxRows: 1
    },
    {
      name: 'contenido',
      type: 'richText',
      required: true
    },
    slugField(),
    autor,
    {
      name: 'id',
      type: 'text',
    },
    
  ]
}
export default Blog;
