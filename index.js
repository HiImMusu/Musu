const express = require("express");
const https = require("https");
const fs = require("fs");
const port = process.env.PORT || 3000;
const APIKEY = process.env.APIKEY;
const app = express();

app.get("/", (req, res) => {
    res.send(JSON.stringify({
        SUCCESS: true,
        MESSAGE: "Welcome to Halla City!"
    }));
})

app.get("/GetCatalog", (req, res) => {
    _APIKEY = req.header["APIKEY"]

    if (_APIKEY) {
        if (_APIKEY == APIKEY) {
            req.send(JSON.stringify({
                SUCCESS: true,
                MESSAGE: [{
                    TEST: "SUCCESSSS"
                }]
            }))
        } else {
            req.send(JSON.stringify({
                SUCCESS: false,
                MESSAGE: "Permission Denied!"
            }))
        }
    } else {
        req.send(JSON.stringify({
            SUCCESS: false,
            MESSAGE: "APIKEY Missing!"
        }))
    }
})

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));

