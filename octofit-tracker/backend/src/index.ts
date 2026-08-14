import app from './server';
import './config/database';

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Octofit Tracker API server running on port ${PORT}`);
});
