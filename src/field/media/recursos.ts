import { Field } from "payload/types";
import translateX from "../translateX";
import translateY from "../translateY";
import rotate from "../rotate";

const recurso: Field = {
  label: 'Recurso',
  type: 'collapsible',
  admin: {
    condition: (data, siblingData) => siblingData.nesecitaUnRecurso ? true : false,
  },
  fields: [{
    name: 'recurso',
    type: 'group',
    fields: [
      {
        name: 'recurso',
        type: 'upload', 
        relationTo: 'media',
        filterOptions: {
          or: [{
            clase: {
              equals: 'recurso',
            }
          }]
        },
        required: true,
      },
      {
        name: 'nesecitaTranslate',
        type: 'checkbox',
        defaultValue: false,
      },
      translateY,
      translateX,
      {
        name: 'nesecitaRotacion',
        type: 'checkbox',
        defaultValue: false,
      },
      rotate,
    ]
  }]
}

export default recurso;