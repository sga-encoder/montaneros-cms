import { CollectionConfig } from 'payload/types';
import { isEditor } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import ContentBlock from '../blocks/pages/Content';
import ContentWithImageBlock from '../blocks/pages/ContentWithImage';
import ContentWithTourOperatorsBlock from '../blocks/pages/ContentWithTourOperators';
import ListContentBlock from '../blocks/pages/ListContent';
import { slugField } from '../field/slug';
import recurso from '../field/media/recursos';
import imagen from '../field/media/imagen';
import SearchSectionBlock from '../blocks/pages/SearchSection';
import User from '../blocks/pages/User';

const Paginas: CollectionConfig = {
  slug: 'paginas',
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
      type: 'tabs',
      tabs: [
        {
          label: 'Encabezado',
          fields: [
            {
              type: 'collapsible',
              label: 'Encabezado',
              fields: [
                {
                  name: 'encabezado',
                  type: 'group',
                  fields: [
                    {
                      name: 'estiloDeCabecera',
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
                        {
                          label: 'Tres',
                          value: 'tres',
                        },
                      ]
                    },
                    {
                      name: 'imagenes',
                      type: 'array',
                      minRows: 3,
                      maxRows: 5,
                      fields: [
                        imagen,
                      ]
                    },
                    recurso,
                  ]
                },
                
              ]
            },

          ]
        },
        {
          label: 'Contenido',
          fields: [
            {
              name: 'contenido',
              type: 'group',
              fields: [
                {
                  name: 'secciones',
                  type: 'blocks',
                  minRows: 1,
                  blocks: [
                    ContentBlock,
                    ContentWithImageBlock,
                    ContentWithTourOperatorsBlock,
                    ListContentBlock,
                    SearchSectionBlock,
                    User
                  ],
                },
              ]
            },
          ]
        }
      ]
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
    {
      name: 'nesecitaUnRecurso',
      type: 'checkbox',
      defaultValue: true,
    },
    
  ]
}
export default Paginas;
