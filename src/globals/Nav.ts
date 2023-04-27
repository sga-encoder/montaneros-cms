import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import link from '../field/link'
import logo from '../field/media/logo'

const Nav: GlobalConfig = {
  slug: 'menu',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    logo,
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}

export default Nav
