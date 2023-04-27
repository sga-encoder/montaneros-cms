import { Block } from 'payload/types';


const MapTourOperatorBlock: Block = {
  slug: 'Mapa', 
  fields: [ 
    {
      name: 'iframeDeLaUbicacion',
      type: 'textarea',
      label: 'Se encuentra en el sitio de Google Maps. En la seccion de compartir. Insertar un mapa. Copie el link que esta iframe y peguelo aquí.',
      required: true,
    },
  ],
};

export default MapTourOperatorBlock;