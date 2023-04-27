import { Field } from "payload/types";

const autor: Field = {
  name: 'autor',
  type: 'relationship',
  relationTo: 'users',
  admin: {
    position: 'sidebar',
  },
  access: {
    update: ({ req, siblingData }) => {
      const userId = req.user && req.user.id;
      const userRole = req.user && req.user.roles;
      const authorId =  siblingData?.autor?.id;
      if (userRole.includes('admin')) return true;
      if (userId === authorId) return true
      return false;
    }
  }
}

export default autor;