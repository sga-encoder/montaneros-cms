import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Media from './collections/Media';
import Paginas from './collections/Pages';
import TourOperadora from './collections/TourOperator';

export default buildConfig({
  serverURL: 'http://localhost:8000',
  admin: {
    user: Users.slug,
  },
  collections: [
    TourOperadora,
    Paginas,
    Users,
    Media
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
