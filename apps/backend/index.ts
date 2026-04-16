import { Elysia } from "elysia";
import { appConfig } from "./config";

const app = new Elysia().get("/", () => "Hello World!").listen(appConfig.port);

console.log(`Server is running on port ${appConfig.port}`);
