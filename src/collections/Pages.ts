import { CollectionConfig } from 'payload/types';
import { isEditor } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import ContentBlock from '../blocks/pages/content';
import ContentWithImageBlock from '../blocks/pages/ContentWithImage';
import ContentWithTourOperatorsBlock from '../blocks/pages/ContentWithTourOperators';
import ListContentBlock from '../blocks/pages/ListContent';
import { slugField } from '../field/slug';

const Paginas: CollectionConfig = {
  slug: 'paginas',
  admin: {
    useAsTitle: 'titulo',
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
              label: 'Ecabezado',
              fields: [
                {
                  name: 'imagenDeCabecera',
                  type: 'array',
                  minRows: 3,
                  maxRows: 5,
                  fields: [
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
                    }
                  ]
                },
                {
                  name: 'recurso',
                  type: 'group',
                  fields: [
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
                      name: 'nesecitaRotacion',
                      type: 'checkbox',
                      defaultValue: false,
                    },
                    {
                      name: 'rotacion',
                      type: 'select',
                      admin: {
                        condition: (data, siblingData) => siblingData.nesecitaRotacion === true? true : false,
                      },
                      options: [
                        {
                          label: '90°',
                          value: '90',
                        },
                        {
                          label: '180°',
                          value: '180',
                        },
                        {
                          label: '270°',
                          value: '270',
                        }
                      ]
                    }
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
              name: 'secciones',
              type: 'blocks',
              minRows: 1,
              blocks: [
                ContentBlock,
                ContentWithImageBlock,
                ContentWithTourOperatorsBlock,
                ListContentBlock
              ],
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
    }
    
  ]
}
export default Paginas;
