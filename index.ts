// Import required modules
import express, { Request, Response } from "express";

// Define a class to represent a simple API
class ExpressAPI {
	private app: express.Application;
	private port: number;
	private testt;

	constructor(port: number) {
		this.app = express();
		this.port = port;
		this.setupRoutes();
	}

	// Method to setup API routes
	private setupRoutes(): void {
		this.app.get("/", this.homeRoute.bind(this));
		this.app.get("/hello", this.helloRoute.bind(this));
	}

	// Handler for home route
	private homeRoute(req: Request, res: Response): void {
		res.send("Welcome to Express API!");
	}

	// Handler for /hello route
	private helloRoute(req: Request, res: Response): void {
		res.send("Hello, World!");
	}

	// Method to start the Express server
	public start(): void {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}
}

// Create an instance of the ExpressAPI class
const api = new ExpressAPI(3000);

// Start the server
api.start();
