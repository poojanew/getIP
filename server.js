var express = require("express");
var app = express();
app.listen(3200, () => {
    console.log("Server running on port 3200");
});

app.get("/url", (req, res, next) => {
    res.json({ip:req.connection.remoteAddress});
});