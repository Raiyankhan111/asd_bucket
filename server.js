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
    let products=await readFile()
    console.log(products);
    res.json(products);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

