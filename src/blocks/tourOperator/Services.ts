import { Block } from 'payload/types';
import imagen from '../../field/media/imagen';
import { slugField } from '../../field/slug';

const ServicesBlock: Block = {
  slug: 'servicios',
  fields: [
    {
      label: 'servicios',
      type: 'collapsible',
      fields: [

        {
          name: 'servicio',
          type: 'array',
          required: true,
          minRows: 1,
          fields: [
            {
              name: 'titulo',
              type: 'text',
              required: true,
            },
            {
              name: 'categoria',
              type: 'select',
              required: true,
              options: [
                { label: 'Pasa Dia', value: 'pasa-dia' },
                { label: 'Senderismo', value: 'senderismo' },
                { label: 'Camping', value: 'camping' },
                { label: 'Caminata', value: 'caminata' },
                { label: 'City Tour', value: 'city-tour' },
                { label: 'Paquete', value: 'paquete' },
              ]
            },
            slugField(),
            {
              name: 'descripcion',
              type: 'textarea',
              required: true,
            },
            {
              name: 'imagenes',
              type: 'array',
              required: true,
              minRows: 1,
              fields: [
                imagen
              ]
            },
            {
              name: 'precio',
              type: 'text',
              required: true,
            },
            {
              name: 'duracion',
              type: 'text',
              required: true,
            },
            {
              name: 'incluye',
              type: 'array',
              required: true,
              minRows: 1,
              fields: [
                {
                  name: 'esCuantitativo',
                  type: 'checkbox',
                  required: true,
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
                  name: 'contenido',
                  type: 'text',
                  required: true,
                }   
              ]
            },
            {
              name: 'link',
              type: 'text',
              required: true,
            },
            {
              name: 'id',
              type: 'text',
              required: true,
            }
          ]
        },
      ]
    }
  ]
};


export default ServicesBlock