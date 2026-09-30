const express = require('express');
const app = express();
const fs=require("fs/promises");
const path=require("path");
const filePath=path.join(__dirname,"db.json");
async function readFile(){
    let data=await fs.readFile(filePath,"utf8");
    return JSON.parse(data);
}

app.get("/products", async (req, res) => {
    try {
        let products=await readFile()
        console.log(products);
        res.json(products);
    } catch (error) {
        console.error(error);
        // res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get("/products/:id", async (req, res) => {
    try {
        let products=await readFile()
        let product=products.find(p => p.id === parseInt(req.params.id));
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        console.log(product);
        res.json(product);
    } catch (error) {
        console.error(error);
        // res.status(500).json({ error: "Internal Server Error" });
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

