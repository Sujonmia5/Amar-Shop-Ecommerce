const express = require('express')
const app = express()
const Port = process.env.PORT || 5500;
require('dotenv').config()
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('server is running')
})

const uri = `${process.env.DB_URL}`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const ProductsData = client.db('Amar-Shop').collection('Products-Data')

        app.get('/products', async (req, res) => {
            const size = parseInt(req.query.size);
            const pageNumber = parseInt(req.query.page);
            const query = {};
            const cursor = ProductsData.find(query);
            const products = await cursor.skip(pageNumber * size).limit(size).toArray();
            const count = await ProductsData.estimatedDocumentCount()
            res.send({ products, count })
        })

        app.get('/single-product', async (req, res) => {
            const id = req.query.id;
            const query = { _id: new ObjectId(id) };
            const cursor = await ProductsData.findOne(query);
            res.send(cursor)
        })

        // app.get('/cart_product', async (req, res) => {
        //     let data = req.query;
        //     const jsonData = JSON.parse(data.data)
        //     // const cart = Object.keys(jsonData)
        //     const query = {}
        //     const cursor = await ProductsData.find(query).toArray();
        //     console.log(cursor);
        //     // cart.map(id => {
        //     //     console.log(id);
        //     //     console.log(cartProduct)
        //     // })
        //     for (const id in jsonData) {
        //         console.log(id);
        //         const cartProduct = cursor.find(product => product._id === id)
        //         console.log(cartProduct);
        //     }
        //     res.send({ hi: 'hi' })
        // })

        app.get('/related-product', async (req, res) => {
            const category = req.query.category;
            const query = {
                category
            }
            const result = await ProductsData.find(query).limit(4).toArray()
            res.send(result)
        })

        app.put('/size', async (req, res) => {
            const query = {};
            const updateData = {
                $set: {
                    Size: ['L', 'XL', 'XS']
                }
            }
            const upSert = {
                upsert: true
            }

            const result = await ProductsData.updateMany(query, updateData, upSert)
            console.log(result);
        })
    }
    finally {

    }
}

run()

app.listen(Port, () => {
    console.log('server running is on', Port);
})