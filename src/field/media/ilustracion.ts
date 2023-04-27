import { Field } from "payload/types";
import translateX from "../translateX";
import translateY from "../translateY";
import rotate from "../rotate";

const ilustracion: Field = {
  label: 'Ilustracion',
  type: 'collapsible',
  admin: {
    condition: (data, siblingData) => siblingData.nesecitaIlustracion ? true : false,
  },
  fields: [{
    name: 'ilustracion',
    type: 'group',
    fields: [
      {
        name: 'ilustracion',
        type: 'upload',
        relationTo: 'media',
        filterOptions: {
          or: [{
            clase: {
              equals: 'ilustracion',
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

export default ilustracion;