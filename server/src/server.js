//Imports our configured Express app
import app from "./app.js";

//Port used by the backend API
const PORT = 3000;

//Starts the Express server
app.listen(PORT, () => {
    console.log(`Spotlight API is running on http://localhost:${PORT}`);
});