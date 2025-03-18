// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://mongodb:27017/cruddb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ItemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', ItemSchema);

// Create
app.post('/items', async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.status(201).send(item);
});

// Read
app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

// Update
app.put('/items/:id', async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(item);
});

// Delete
app.delete('/items/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.send({ message: 'Item deleted' });
});

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;
