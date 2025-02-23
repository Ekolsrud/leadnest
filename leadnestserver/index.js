import express from "express";

const port = 3000;
const app = express();

app.get("/test", (req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => console.log("server is listening on port"));

// npm run dev (in a terminal that is CD'd into the server folder)