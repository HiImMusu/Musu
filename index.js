app.get("/GetShirts", (req, res) => {
    const url = "https://catalog.roblox.com/v2/search/items/details?Category=3&Subcategory=56&salesTypeFilter=1&&Keyword=Shirt&Limit=30";

    https.get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on("end", () => {
            const results = JSON.parse(data);
            res.status(200).send(JSON.stringify({
                SUCCESS: true,
                MESSAGE: results
            }));
        });
    }).on("error", (error) => {
        res.status(500).send(JSON.stringify({
            SUCCESS: false,
            MESSAGE: "Failed to fetch shirts"
        }));
    });
});

app.get("/GetHairs", (req, res) => {
    const url = "https://catalog.roblox.com/v2/search/items/details?Category=2&Subcategory=2&salesTypeFilter=1&&Keyword=Hair&Limit=30";

    https.get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on("end", () => {
            const results = JSON.parse(data);
            res.status(200).send(JSON.stringify({
                SUCCESS: true,
                MESSAGE: results
            }));
        });
    }).on("error", (error) => {
        res.status(500).send(JSON.stringify({
            SUCCESS: false,
            MESSAGE: "Failed to fetch hairs"
        }));
    });
});

app.get("/GetPants", (req, res) => {
    const url = "https://catalog.roblox.com/v2/search/items/details?Category=3&Subcategory=57&salesTypeFilter=1&&Keyword=Pants&Limit=30";

    https.get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on("end", () => {
            const results = JSON.parse(data);
            res.status(200).send(JSON.stringify({
                SUCCESS: true,
                MESSAGE: results
            }));
        });
    }).on("error", (error) => {
        res.status(500).send(JSON.stringify({
            SUCCESS: false,
            MESSAGE: "Failed to fetch pants"
        }));
    });
});

app.get("/GetFaces", (req, res) => {
    const url = "https://catalog.roblox.com/v2/search/items/details?Category=2&Subcategory=3&salesTypeFilter=1&&Keyword=Face&Limit=30";

    https.get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on("end", () => {
            const results = JSON.parse(data);
            res.status(200).send(JSON.stringify({
                SUCCESS: true,
                MESSAGE: results
            }));
        });
    }).on("error", (error) => {
        res.status(500).send(JSON.stringify({
            SUCCESS: false,
            MESSAGE: "Failed to fetch faces"
        }));
    });
});
