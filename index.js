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
            res.send(JSON.stringify({
                SUCCESS: true,
                MESSAGE: [{
                    TEST: "SUCCESSSS"
                }]
            }))
        } else {
            res.send(JSON.stringify({
                SUCCESS: false,
                MESSAGE: "Permission Denied!"
            }))
        }
    } else {
        res.send(JSON.stringify({
            SUCCESS: false,
            MESSAGE: "APIKEY Missing!"
        }))
    }
    res.send(JSON.stringify({
        SUCCESS: false,
        MESSAGE: "Something went wrong!"
    }))
})

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));

