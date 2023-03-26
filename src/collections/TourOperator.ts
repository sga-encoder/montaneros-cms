import { CollectionConfig, Block } from 'payload/types';
import { isAdmin, isEditor } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import GalleryTourOperatorBlock from '../blocks/tourOperator/Gallery';
import LongDescriptionTourOperatorBlock from '../blocks/tourOperator/LongDescription';
import MapTourOperatorBlock from '../blocks/tourOperator/Map';

const TourOperadora: CollectionConfig = {
  slug: 'tour-operadora',
  admin: {
    useAsTitle: 'nombre',
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
      name: 'nombre',
      type: 'text',
      index: true,
      required: true,
    },
    {
      name: 'urlWeb',
      type: 'text',
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
          type: 'row',
          fields: [
            {
              name: 'imagenesDePresentacion01',
              type: 'upload',
              relationTo: 'media',
              required: true,
              filterOptions: {
                or: [
                  {
                    clase: {
                      equals: 'imagen',
                    }
                  }
                ]
              },
              admin: {
                width: '50%',
              }
            },
            {
              name: 'imagenesDePresentacion02',
              type: 'upload',
              relationTo: 'media',
              required: true,
              filterOptions: {
                or: [
                  {
                    clase: {
                      equals: 'imagen',
                    }
                  }
                ]
              },
              admin: {
                width: '50%',
                
              }
            },
          ]
        },
        {
          name: 'imagenesDePresentacion03',
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
      ]
    },
    {
      name: 'secciones',
      type: 'blocks',
      minRows: 1,
      blocks: [
        LongDescriptionTourOperatorBlock,
        GalleryTourOperatorBlock,
        MapTourOperatorBlock
      ]
    }
    
  ]
}
export default TourOperadora;