import { buildConfig } from 'payload/config';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { cloudinaryAdapter } from './storage/cloudinaryAdapter';
import path from 'path';
import Users from './collections/Users';
import Media from './collections/Media';
import Paginas from './collections/Pages';
import TourOperadora from './collections/TourOperator';
import Blog from './collections/Blog';
import TouristResource from './collections/TouristResource';
import TouristSite from './collections/TouristSite';
import Nav from './globals/Nav';
import 'dotenv'

// Cloudinary storage for the Media collection, so uploads survive backend
// restarts/redeploys instead of living on the container's ephemeral disk.
// Falls back to local disk if Cloudinary isn't configured (e.g. local dev
// without Cloudinary credentials).
const cloudinaryConfigured = Boolean(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
);

const plugins = cloudinaryConfigured
  ? [
      cloudStorage({
        collections: {
          media: {
            adapter: cloudinaryAdapter({
              cloudName: process.env.CLOUDINARY_CLOUD_NAME,
              apiKey: process.env.CLOUDINARY_API_KEY,
              apiSecret: process.env.CLOUDINARY_API_SECRET,
              folder: process.env.CLOUDINARY_FOLDER || 'proyecto_montaneros',
            }),
            disablePayloadAccessControl: true,
          },
        },
      }),
    ]
  : [];

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'https://montaneros-cms-cpmn.onrender.com',
  admin: {
    user: Users.slug,
    // The Cloudinary SDK (imported by ./storage/cloudinaryAdapter, always
    // reachable from this file regardless of whether the plugin below is
    // actually enabled) pulls in Node-only modules that don't exist in the
    // browser. This has to be unconditional: the plugin's own webpack hook
    // only runs when cloudinaryConfigured is true, but the import itself is
    // always bundled into the admin panel.
    webpack: (webpackConfig) => ({
      ...webpackConfig,
      resolve: {
        ...webpackConfig.resolve,
        fallback: {
          ...webpackConfig.resolve?.fallback,
          fs: false,
          stream: false,
          url: false,
          querystring: false,
          http: false,
          https: false,
          crypto: false,
          zlib: false,
          net: false,
          tls: false,
          child_process: false,
        },
      },
    }),
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
  plugins,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
