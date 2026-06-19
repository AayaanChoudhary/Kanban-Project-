import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import boardRoutes from "./routes/boardRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import columnRoutes from "./routes/columnRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use(
    "/api/boards",
    boardRoutes
);
app.use(
    "/api/columns",
    columnRoutes
);
app.use(
    "/api/tasks",
    taskRoutes
);

export default app;
