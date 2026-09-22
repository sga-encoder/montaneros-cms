// Browser-only stand-in for the `cloudinary` package.
//
// cloudinary's own top-level module code (cloudinary.js) branches on
// `process.version.split('.')` to pick between its `lib` and `lib-es5`
// builds. `process.version` doesn't exist in a webpack browser bundle, so
// merely importing the real package there throws at module-evaluation
// time -- before any of our code even runs. payload.config.ts's admin
// webpack config aliases the `cloudinary` package to this file for the
// browser build; cloudinaryAdapter.ts's methods that actually call into it
// (handleUpload/handleDelete/generateURL/staticHandler) only ever run
// server-side, so this mock never needs to do anything real.
export const v2 = {
  config: () => {},
  url: () => '',
  uploader: {
    upload_stream: () => ({ end: () => {} }),
    destroy: () => Promise.resolve(),
  },
};
