import express from 'express';
import payload from 'payload';
// import { createMediaLibrary } from "cloudinary";

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

   // Agregue el código para configurar e instanciar el widget de la biblioteca de medios de Cloudinary aquí
  // const cloudinaryConfig = {
  //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //   api_key: process.env.CLOUDINARY_API_KEY,
  //   insertHandler: (data) => {
  //     // Maneje la inserción de archivos multimedia seleccionados aquí
  //   },
  // };
  // createMediaLibrary(cloudinaryConfig);

  // Add your own express routes here

  app.listen(3000);
}

start();
