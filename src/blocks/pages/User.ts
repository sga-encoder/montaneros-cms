import { Block } from 'payload/types';
import recurso from '../../field/media/recursos';

const User: Block = {
  slug: 'user-team', // required
  fields: [ // required
    {
      name: 'usuarios',
      label: 'Usuarios',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'usuario',
          label: 'Usuario',
          relationTo: 'users',
          type: 'relationship',
          required: true,
        },
        {
          name: 'cargo',
          label: 'Cargo',
          type: 'text',
          required: true,
        },
        {
          name: 'descripcion',
          label: 'Descripción',
          type: 'textarea',
          required: true,
        },
      ]
    }
  ]
};

export default User;