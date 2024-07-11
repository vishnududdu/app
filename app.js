import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";


const app = express();
const port = 3200;

await mongoose.connect('mongodb+srv://duduvishnupkl:password%40123@cluster0.ecop73e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/habitTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Define routes
import router from "./routes/habitRoutes.js";
// const habitRoutes = require('./routes/habitRoutes');
app.use('/', router);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
