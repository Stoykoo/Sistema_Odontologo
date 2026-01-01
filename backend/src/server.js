import app from "./app.js";
import "./config/env.js";
import pool, { testDbConnection } from "./config/db.js";

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await testDbConnection();
    app.listen(PORT, () => {
      console.log(`Servidor backend corriendo en puerto ${PORT}`);
    });
  } catch (err) {
    console.error("Error conectando a PostgreSQL", err);
    process.exit(1);
  }
})();
