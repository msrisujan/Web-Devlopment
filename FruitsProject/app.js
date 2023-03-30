// const { MongoClient } = require("mongodb");

// //Connection URI
// const uri = "mongodb://127.0.0.1:27017";

// const dbName = "FruitsDB";

// //Create a new MongoClient
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();

//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// async function run() {
//   try {
//     const database = client.db(dbName);
//     const fruits = database.collection("fruits");
//     create an array of documents to insert
//     const docs = [
//         {
//             name: "Apple",
//             score: 8,
//             review: "Great fruit",
//         },
//         {
//             name: "Orange",
//             score: 6,
//             review: "Kinda sour",
//         },
//         {
//             name: "Banana",
//             score: 9,
//             review: "Great stuff!",
//         },
//     ];
//     // this option prevents additional documents from being inserted if one fails
//     const options = { ordered: true };
//     const result = await fruits.insertMany(docs, options);
//     console.log(`${result.insertedCount} documents were inserted`);

//     const cursor = fruits.find();
//     // print a message if no documents were found
    
//     // replace console.dir with your callback to access individual elements
//     await cursor.forEach(console.dir);


//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"],
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit.",
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//     name: "Pineapple",
//     score: 9,
//     review: "Great fruit.",
// });

const mango = new Fruit({
    name: "Mango",
    score: 6,
    review: "Decent fruit.",
});

mango.save();

Person.updateOne({ name: "John" }, { favoriteFruit: mango }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Succesfully updated the document");
    }
});



// pineapple.save();

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favoriteFruit: pineapple,
// });

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!",
});

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too sour for me",
});

const banana = new Fruit({
    name: "Banana",
    score: 3,
    review: "Weird texture",
});

// Fruit.insertMany([kiwi, orange, banana])
//     .then(() => {
//         console.log("Succesfully saved all the fruits to fruitsDB");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

Fruit.find().then((fruits) => {
    fruits.forEach((fruit) => {
        console.log(fruit.name);
    });
}).catch((err) => {
    console.log(err);
});

// Fruit.updateOne({ _id: "5f9e1b9b9b9b9b9b9b9b9b9b" }, { name: "Peach" })
// .then(() => {
//     console.log("Succesfully updated the document");
// }).catch((err) => {
//     console.log(err);
// });

Fruit.deleteOne({ name: "Peach" })
.then(() => {
    console.log("Succesfully deleted the document");
}).catch((err) => {
    console.log(err);
});

Person.deleteMany({ name: "John" })
.then(() => {
    console.log("Succesfully deleted all the documents");
}).catch((err) => {
    console.log(err);
});

