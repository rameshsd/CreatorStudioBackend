require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studioRoutes = require("./routes/studioRoute");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const availabilityRoutes = require("./routes/availabilityRoutes");
const requirementRoutes = require("./routes/requirementRoutes");
const leadRoutes = require("./routes/leadRoutes");
const InfluencerRoutes = require("./routes/influencerRoutes");
const clinetRoutes = require("./routes/clientRoutes");
const planRoutes = require("./routes/planRoutes");
const deliverableRoutes = require("./routes/delivaerableRoutes");
const projectRoutes = require("./routes/projectRoutes");

const { google } = require("googleapis");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*", // Allow requests from any origin (for development)
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// Connect Database
connectDB();

// Routes
app.use("/api/v1/studio", studioRoutes); // Studio routes
app.use("/api/v1/auth", authRoutes); // Auth routes
app.use("/api/v1/bookings", bookingRoutes);
app.use("/api/v1/availability", availabilityRoutes);
app.use("/api/v1/requirements", requirementRoutes);
app.use("/api/v1/leads", leadRoutes);
app.use("/api/v1/influencer", InfluencerRoutes);
app.use("/api/v1/clients", clinetRoutes);
app.use("/api/v1/plans", planRoutes);
app.use("/api/v1/deliverables", deliverableRoutes);
app.use("/api/v1/projects", projectRoutes);

// Google Meet route

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
