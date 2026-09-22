import { v2 as cloudinary } from 'cloudinary';
import path from 'path';

// Custom @payloadcms/plugin-cloud-storage adapter for Cloudinary.
// The official plugin only ships S3/Azure/GCS adapters, so this implements
// the same Adapter contract (generateURL, handleUpload, handleDelete,
// staticHandler) against the Cloudinary SDK, which is already a dependency
// of this project.
//
// payload.config.ts (and therefore this file) is bundled into the admin
// panel's browser build too, but the Cloudinary SDK itself uses Node-only
// modules (fs, stream, url, querystring) that don't exist in the browser.
// The SDK is configured lazily (only when an adapter method actually runs,
// which only happens server-side); the webpack fallback that stubs those
// Node builtins out lives in payload.config.ts's admin.webpack, since it
// has to apply unconditionally (this file is always imported there, even
// when Cloudinary isn't configured and this adapter is never called).

interface Args {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
  folder?: string;
}

let configured = false;
const ensureConfigured = ({ cloudName, apiKey, apiSecret }: Args) => {
  if (configured) return;
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });
  configured = true;
};

const stripExtension = (filename: string) => filename.replace(/\.[^/.]+$/, '');

const publicIdFor = (folder: string, prefix: string, filename: string) =>
  path.posix.join(folder, prefix, stripExtension(filename));

export const cloudinaryAdapter = (args: Args) => {
  const { folder = '' } = args;

  return ({ prefix: adapterPrefix = '' }: { collection: any; prefix?: string }) => ({
    generateURL: ({ filename, prefix = adapterPrefix }: { filename: string; prefix?: string }) => {
      ensureConfigured(args);
      return cloudinary.url(publicIdFor(folder, prefix, filename), {
        secure: true,
        resource_type: 'image',
      });
    },

    handleUpload: async ({ data, file }: { data: any; file: { buffer: Buffer; filename: string } }) => {
      ensureConfigured(args);
      const publicId = publicIdFor(folder, data?.prefix || adapterPrefix, file.filename);
      await new Promise<void>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            public_id: publicId,
            overwrite: true,
            resource_type: 'image',
          },
          (err) => (err ? reject(err) : resolve()),
        );
        uploadStream.end(file.buffer);
      });
      return data;
    },

    handleDelete: async ({ doc, filename }: { doc: any; filename: string }) => {
      ensureConfigured(args);
      const publicId = publicIdFor(folder, doc?.prefix || adapterPrefix, filename);
      await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
    },

    staticHandler: async (req: any, res: any, next: any) => {
      try {
        ensureConfigured(args);
        const publicId = publicIdFor(folder, adapterPrefix, req.params.filename);
        return res.redirect(cloudinary.url(publicId, { secure: true, resource_type: 'image' }));
      } catch (err) {
        return next(err);
      }
    },
  });
};
