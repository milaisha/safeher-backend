const userRoutes = require('./routes/userRoutes');
const emergencyContactRoutes = require('./routes/emergencyContactRoutes');
const safetyAlertRoutes = require('./routes/safetyAlertRoutes');

// Routes
app.use('/api/users', userRoutes);
app.use('/api/contacts', emergencyContactRoutes);
app.use('/api/alerts', safetyAlertRoutes);

