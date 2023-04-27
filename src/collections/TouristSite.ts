import { slugField } from './../field/slug';
import { CollectionConfig } from 'payload/types';
import { isEditor } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import logo from '../field/media/logo';
import imagen from '../field/media/imagen';

const TouristSite: CollectionConfig = {
  slug: 'sitio-turistico',
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
        { label: 'Restaurante', value: 'restaurante' },
        { label: 'Restaurante de Comida Típica', value: 'restaurante-de-comida-tipica' },
        { label: 'Hotel', value: 'hotel' },
        { label: 'Glamping', value: 'glamping' },
        { label: 'Sitio de interés Cultural', value: 'sitio-de-interes-cultural' },
        { label: 'Cabaña', value: 'cabaña' },
      ],
      index: true,
      required: true,
    },
    {
      name: 'datosDeContacto',
      type: 'group',
      fields: [
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
          label: 'datos de contacto',
          type: 'collapsible',
          fields: [
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
          ]
        },
      ]
    },
    {
      name: 'descripcion',
      type: 'textarea',
      required: true,
    },
    {
      name: 'tienesLogo',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      label: 'Logo',
      type: 'collapsible',
      admin: {
        condition: (data, siblingData) => siblingData.tienesLogo ? true : false,
      },
      fields: [
        logo,
      ],
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
      name: 'menu',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        condition: (data, siblingData) => data.categoria === 'restaurante' || data.categoria === 'restaurante-de-comida-tipica' ? true : false,
      },
      fields: [
        {
          name: 'nombre',
          type: 'text',
          required: true,
        },
        {
          name: 'nesecitaDescripcion',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'descripcion',
          type: 'textarea',
          admin: {
            condition: (data, siblingData) => siblingData.nesecitaDescripcion ? true : false,
          },
        },
        {
          name: 'precio',
          type: 'text',
          required: true,
        },
        {
          name: 'neseitaImagenes',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'imagenes',
          type: 'array',
          admin: {
            condition: (data, siblingData) => siblingData.neseitaImagenes ? true : false,
          },
          fields: [
            imagen
          ],
        }
      ]
    },
    {
      name: 'ofece',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        condition: (data, siblingData) => data.categoria === 'hotel' || data.categoria === 'glamping' || data.categoria === 'cabaña' ? true : false,
      },
      fields: [
        {
          name: 'nombre',
          label: 'Nombre del la Habitacion',
          type: 'text',
          required: true,
        },
        {
          name: 'camas',
          type: 'array',
          required: true,
          minRows: 1,
          fields: [
            {
              name: 'cantidad',
              type: 'text',
              required: true,
              label: 'Cantidad de Camas',
            },
            {
              name: 'type',
              type: 'select',
              options: [
                { label: 'Cama Matrimonial', value: 'cama-matrimonial' },
                { label: 'Cama Individual', value: 'cama-individual' },
                { label: 'Cama Queen', value: 'cama-queen' },
              ]
            }
          ]
        },
        {
          name: 'nesecitaDescripcion',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'descripcion',
          type: 'textarea',
          admin: {
            condition: (data, siblingData) => siblingData.nesecitaDescripcion ? true : false,
          },
        },
        {
          name: 'cantidad',
          type: 'text',
          required: true,
          admin: {
            condition: (data, siblingData) => siblingData.esCuantitativo ? true : false,
          }
        },
        {
          name: 'neseitaImagenes',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'imagenes',
          type: 'array',
          admin: {
            condition: (data, siblingData) => siblingData.neseitaImagenes ? true : false,
          },
          fields: [
            imagen
          ],
        },
        {
          name: 'precio',
          type: 'text',
          required: true,
        },
      ]
    },
    {
      name: 'ofeceServicios',
      type: 'checkbox',
      label: 'Ofrece servicios',
      defaultValue: false,
    },
    {
      name: 'servicios',
      type: 'array',
      admin: { condition: (data, siblingData) => data.ofeceServicios ? true : false },
      fields: [
        {
          name: 'nombre',
          type: 'text',
          required: true,
        },
        {
          name: 'descripcion',
          type: 'textarea',
          required: true,
        },
        {
          name: 'imagenes',
          type: 'array',
          fields: [
            imagen
          ]
        },
        {
          name: 'precio',
          type: 'text',
          required: true,
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
export default TouristSite;