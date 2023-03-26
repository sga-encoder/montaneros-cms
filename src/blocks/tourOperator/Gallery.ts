import { Block } from 'payload/types';


const GalleryTourOperatorBlock: Block = {
  slug: 'galeria', 
  fields: [ 
    {
      name: 'galeria',
      type: 'array',
      minRows: 2,
      fields: [
        {
          name: 'imagen',
          type: 'upload',
          relationTo: 'media',
          filterOptions: {
            or: [
              {
                clase: {
                  equals: 'imagen',
                }
              }
            ]
          },
          required: true,
        },
      ]
    },
  ]
};

export default GalleryTourOperatorBlock;