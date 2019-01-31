"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
// initialize configuration
dotenv_1.default.config();
const app = express_1.default(); // we define our app using express
const port = process.env.SERVER_PORT; // Port 3010 used on localhost
// We now set up body parser
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// ROUTES FOR ANORAK PROXY
// ==========================================
// First we get an instance of the express Router
const router = express_1.default.Router();
// define a route handler for the default home page
router.get("/", (req, res) => {
    res.json({ message: "The Anorak API is running" });
});
// We now need to register the routes to get everything running. At the same time
// we prefix all routes with /api to make the url looking good.
app.use("/api", router);
// start the Anorak Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Anorak started at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map