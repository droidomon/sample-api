const app = require("./app");
require("dotenv").config();

// Use PORT from environment variables, defaults to 3333
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
