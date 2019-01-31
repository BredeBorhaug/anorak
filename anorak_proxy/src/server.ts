// server.ts
import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

// initialize configuration
dotenv.config();

const app       = express();                    // we define our app using express
const port      = process.env.SERVER_PORT;      // Port 3010 used on localhost

// We now set up body parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// ROUTES FOR ANORAK PROXY
// ==========================================
// First we get an instance of the express Router
const router = express.Router();

// define a route handler for the default home page
router.get( "/", ( req, res ) => {
    res.json({ message: "The Anorak API is running"});
} );

// We now need to register the routes to get everything running. At the same time
// we prefix all routes with /api to make the url looking good.
app.use("/api", router);

// start the Anorak Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `Anorak started at http://localhost:${ port }` );
} );
