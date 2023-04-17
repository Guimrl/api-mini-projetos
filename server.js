import "dotenv/config";
import app from './src/main.js';

const port = process.env.PORT  || 3000;

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});
