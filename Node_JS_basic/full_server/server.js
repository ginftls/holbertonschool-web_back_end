import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

// Capture database path from command-line arguments
const databasePath = process.argv[2];
if (!databasePath) {
  console.error('Error: Database file path is required as an argument');
  process.exit(1);
}

// Store database path in app.locals for controllers to access
app.locals.databasePath = databasePath;

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
