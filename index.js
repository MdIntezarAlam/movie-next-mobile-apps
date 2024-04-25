import express from "express";
import cors from "cors";
import movieRoute from "./router/movieRoute.js";
import userRoute from "./router/userRouter.js";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { jsonData } from "./controller/jsonData.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config({
  path: "config/.env",
});

app.use("/json", (req, res) => {
  res.send(jsonData);
});
app.get("/", (req, res) => res.send("Welcome Message......."));

app.use("/api/int", movieRoute);
app.use("/api/int/user", userRoute);

app.listen(process.env.LOCAL_PORT, () => {
  console.log(`server is listning on ${process.env.LOCAL_PORT}`);
});

connectDB();

//https://github1s.com/MdIntezarAlam/e-com-MERN-Redux--react-toastifyt-all-user-login-signup-cart-/blob/main/server/server.js#L13
// 2
