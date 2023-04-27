import { slugField } from './../field/slug';
import { CollectionConfig } from 'payload/types';
import { isEditor } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import GalleryTourOperatorBlock from '../blocks/tourOperator/Gallery';
import LongDescriptionTourOperatorBlock from '../blocks/tourOperator/LongDescription';
import MapTourOperatorBlock from '../blocks/tourOperator/Map';
import logo from '../field/media/logo';
import imagen from '../field/media/imagen';
import ServicesBlock from '../blocks/tourOperator/Services';

const TourOperadora: CollectionConfig = {
  slug: 'tour-operadora',
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
      type: 'row',
      fields: [
        {
          name: 'nesecitaTelefono',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            width: '25%'
          }
        },
        {
          name: 'nesecitaDireccion',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            width: '25%'
          }
        },
        {
          name: 'nesecitaEmail',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            width: '25%'
          }
        },
        {
          name: 'nesecitaWeb',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            width: '25%'
          }
        },
      ]
    },
    {
      name: 'telefono',
      type: 'text',
      required: true,
      admin: {
        condition: (data, siblingData) => siblingData.nesecitaTelefono ? true : false,
      }
    },
    {
      name: 'direccion',
      type: 'text',
      required: true,
      admin: {
        condition: (data, siblingData) => siblingData.nesecitaDireccion ? true : false,
      }
    },
    {
      name: 'email',
      type: 'text',
      required: true,
      admin: {
        condition: (data, siblingData) => siblingData.nesecitaEmail ? true : false,
      }
    },
    {
      name: 'urlWeb',
      type: 'text',
      required: true,
      admin: {
        condition: (data, siblingData) => siblingData.nesecitaWeb ? true : false,
      }
    },
    {
      name: 'descripcion',
      type: 'textarea',
      required: true,
    },
    logo,
    {
      type: 'collapsible',
      label: 'Imagenes de presentacion',
      fields: [
        {
          name: 'imagenes',
          type: 'array',
          minRows: 3,
          maxRows: 3,
          fields: [
            imagen
          ]
        },
      ]
    },
    {
      name: 'redesSociales',
      type: 'array',
      fields: [
        {
          name: 'tipo',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Youtube', value: 'youtube' },
            { label: 'Whatsapp', value: 'whatsapp' },
          ],
        },
        {
          name: 'url',
          type: 'text',
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
        MapTourOperatorBlock,
        ServicesBlock
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
    
  ]
}
export default TourOperadora;