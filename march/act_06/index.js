const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://mongo:27017/crudDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ItemSchema = new mongoose.Schema({
    name: String,
    description: String
});

const Item = mongoose.model("Item", ItemSchema);

app.post("/items", async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
});

app.get("/items", async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

app.get("/items/:id", async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.send(item);
});

app.put("/items/:id", async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(item);
});

app.delete("/items/:id", async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.send({ message: "Item deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
