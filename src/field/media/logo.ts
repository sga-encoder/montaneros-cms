import { Field } from "payload/types";
import translateX from "../translateX";
import translateY from "../translateY";

const logo: Field = {
  label: 'Logo',
  type: 'collapsible',
  fields: [
      {
        name: 'logo',
        type: 'upload',
        relationTo: 'media',
        filterOptions: {
          or: [{
            clase: {
              equals: 'logo',
            }
          }]
        },
        required: true,
      },
    ]
  
}

export default logo;