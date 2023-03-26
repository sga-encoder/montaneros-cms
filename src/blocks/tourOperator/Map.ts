import { Block } from 'payload/types';


const MapTourOperatorBlock: Block = {
  slug: 'Mapa', 
  fields: [ 
    {
      name: 'iframeDeLaUbicacion',
      type: 'code',
      label: 'Se encuentra en el sitio de Google Maps. En la seccion de compartir. Insertar un mapa. Copie el iframe y peguelo aquí.',
      admin: {
        language: 'html',
      },
      required: true,
    },
  ],
};

export default MapTourOperatorBlock;