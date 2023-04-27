import { Field } from "payload/types";
import translateX from "../translateX";
import translateY from "../translateY";

const icono: Field = {
  name: 'icono',
  type: 'group',
  fields: [
    {
      name: 'icono',
      type: 'upload', 
      relationTo: 'media',
      filterOptions: {
        or: [
          {
            clase: {
              equals: 'icono',
            }
          }
        ]
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
  ]
}

export default icono;