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
    console.log(req.header)
    _APIKEY = req.header["APIKEY"]

    if (_APIKEY) {
        if (_APIKEY == APIKEY) {
            res.status(200).send(JSON.stringify({
                SUCCESS: true,
                MESSAGE: [{
                    TEST: "SUCCESSSS"
                }]
            }))
        } else {
            res.status(403).send(JSON.stringify({
                SUCCESS: false,
                MESSAGE: "Permission Denied!"
            }))
        }
    } else {
        res.status(404).send(JSON.stringify({
            SUCCESS: false,
            MESSAGE: "APIKEY Missing!"
        }))
    }
    res.status(404).send(JSON.stringify({
        SUCCESS: false,
        MESSAGE: "Something went wrong!"
    }))
})

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));

