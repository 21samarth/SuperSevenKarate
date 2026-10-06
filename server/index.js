import app, { initializeDatabase } from './app.js';

const port = process.env.PORT || 5000;

initializeDatabase()
  .then(() => app.listen(port, () => console.log(`API running on ${port}`)))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
