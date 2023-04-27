import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Media from './collections/Media';
import Paginas from './collections/Pages';
import TourOperadora from './collections/TourOperator';
import Blog from './collections/Blog';
import TouristResource from './collections/TouristResource';
import TouristSite from './collections/TouristSite';
import Nav from './globals/Nav';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_APP_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    TouristResource,
    TouristSite,
    TourOperadora,
    Paginas,
    Users,
    Blog,
    Media
  ],
  globals: [
    Nav
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
