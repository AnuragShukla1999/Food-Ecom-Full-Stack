import mongoose from "mongoose";
const { ObjectId } = mongoose;

const cartSchema = new mongoose.Schema({
    _id: {
        type: ObjectId
    },
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true,
    },
    brand: {
        type: String,
        trim: true,
    },
    image: {
        type: Array,
        trim: true
    },
    actualPrice: {
        type: Number,
        trim: true,
    },
    sellPrice: {
        type: Number,
        trim: true,
    },
    qty: {
        type: Number,
        trim: true,
    },
    totalQty: {
        type: Number,
        trim: true,
    },
    totalPrice: {
        type: Number,
        trim: true
    },
});


const userSchema = new mongoose.Schema({
    fistName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        trim: true,
    },
    image: String,
    cartItem: [cartSchema],
    token : String,
},
{
    timestamps: true
})


const User = mongoose.model('User', userSchema);

export default User;