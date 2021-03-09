import express, { json, urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

// load the enviroment variables
dotenv.config();

// initialize express app
const app = express();

class Server {

    private loadSettings(): void {
        app.set('port', process.env.PORT || 3100);

    }
    
    private loadMidlewares(): void {
        app.use(cors({ origin: '*' })); // accept url request from any origin
        app.use(morgan('dev')); // get development logs
        app.use(json()); // manage json request/responses
        app.use(urlencoded({ extended: false })); // obtain request json
    }

    public runServer(): void {
        this.loadSettings();
        this.loadMidlewares();
        
        const port = app.get('port');

        app.listen(port, () => console.log(`Server on port ${port}`));
    }
}

// Start the server
new Server().runServer();