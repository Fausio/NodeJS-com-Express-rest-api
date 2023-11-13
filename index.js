const express = require("express");
const app = express();
const port = 3000;

app.listen(3000, (error) => {
    if (error) {
        console.log("error");
        return;
    }
    console.log("unning");
});