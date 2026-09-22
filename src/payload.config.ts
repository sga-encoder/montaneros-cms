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
//
// This is intentionally NOT conditional on the CLOUDINARY_* env vars being
// present. Render's Docker build stage doesn't see runtime-only env vars
// (see Dockerfile), so a conditional here previously made the webpack-built
// admin bundle disagree with the running server about the Media
// collection's field shape whenever credentials were only set at runtime
// -- the admin panel crashed on load as a result. Cloudinary's own SDK call
// (cloudinary.config()) stays lazy in cloudinaryAdapter.ts and only runs
// server-side, so leaving the plugin always-on is safe even when real
// credentials aren't available (e.g. local dev): uploads just fail loudly
// instead of the whole admin panel breaking.
const plugins = [
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
];

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'https://montaneros-cms-cpmn.onrender.com',
  admin: {
    user: Users.slug,
    // The Cloudinary SDK (imported by ./storage/cloudinaryAdapter, always
    // reachable from this file regardless of whether the plugin below is
    // actually enabled) doesn't just need Node builtins -- its own
    // top-level module code branches on `process.version.split('.')` to
    // pick an internal build variant, which throws immediately when the
    // browser's webpack `process` shim has no `.version`. Aliasing the
    // package to a lightweight mock for the browser build sidesteps that
    // entirely: cloudinaryAdapter's real calls into the SDK only ever run
    // server-side, so the mock never needs to do anything.
    webpack: (webpackConfig) => ({
      ...webpackConfig,
      resolve: {
        ...webpackConfig.resolve,
        alias: {
          ...webpackConfig.resolve?.alias,
          cloudinary$: path.resolve(__dirname, 'storage/cloudinaryMock.ts'),
        },
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
