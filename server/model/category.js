import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
    }
)

const CategoryModal = mongoose.model('post_categories', categorySchema);

export default CategoryModal;