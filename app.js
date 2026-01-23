import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());




import contactRoutes from"./app/routes/contact.route.js";

app.use("/api/contacts", contactRoutes);

export default app;