import "reflect-metadata";
import express from "express";
import logger from "morgan";
import cors from "cors";

import { connectionDB } from "./infra/database";

import UserRouters from "./routers/StudentRouters";
import TeacherRouter from "./routers/TeacherRoutes";
import PostRouters from "./routers/PostRoutes";
import CoordinatorRouters from "./routers/CoordinatorRouters";
import AdvisorRouters from "./routers/AdvisorRouters";
import EmailRoutes from "./routers/EmailRoutes";
export const app = express();
/** */
app.use(cors());
/** */
app.use(express.json());
/** */
app.use(logger("dev"));
/** */
connectionDB();
/** */
app.use("/student", UserRouters);
app.use("/post", PostRouters);
app.use("/teacher", TeacherRouter);
app.use("/coordinator", CoordinatorRouters);
app.use("/advisor", AdvisorRouters);
app.use("/email", EmailRoutes);
/** */
