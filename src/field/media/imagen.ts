import { Field } from "payload/types";
import translateX from "../translateX";
import translateY from "../translateY";
import rotate from "../rotate";

const imagen: Field = {
  label: 'Imagen',
  type: 'collapsible',
  fields: [
      {
        name: 'imagen',
        type: 'upload',
        relationTo: 'media',
        filterOptions: {
          or: [{
            clase: {
              equals: 'imagen',
            }
          }]
        },
        required: true,
      },
  ]
}

export default imagen;