import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';
// import reload from 'livereload';
// import connectReload from 'connect-livereload';

const app = express();

const PORT = process.env.PORT || 3000;

// Add some auto-reloading to our server
// const liveReloadServer = reload.createServer();
// liveReloadServer.watch(path.join(__dirname, staticFolder));

// // Configure express
// if (process.env.CONTEXT === 'development') {
//   app.use(connectReload());
// }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);

async function bootServer() {
  try {
    const mysql = await db.sequelizeDB;
    await mysql.sync();
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

if (process.env.CONTEXT === 'development') {
  liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
      liveReloadServer.refresh('/');
    }, 100);
  });
}

bootServer();
