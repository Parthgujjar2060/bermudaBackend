const express = require('express');
const cors = require('cors');
const apiRoutes = require('./src/routes/apiRoutes');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});