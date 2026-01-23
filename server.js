import app from "./app.js";
import config from "./app/config/index.js";

// Start the server
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});