import { response } from "express";
import CategoryModal from "../model/category.js";


export const createCategory = async (request, response) => {
    try {
        const category = await new CategoryModal(request.body);
        category.save();
        response.status(200).json({ msg: 'Category saved successfully' });
    } catch (error) {
        response.status(500).json(error)
    }
}


export const getCategories = async (request, response) => {
    let category
    try {
        category = await CategoryModal.find({});
        response.status(200).json(category);
    } catch (error) {
        response.status(500).json(error)
    }
}
export const getCategory = async (request, response) => {
    let category
    try {
        category = await CategoryModal.findById(request.params.id);
        response.status(200).json(category);
    } catch (error) {
        response.status(500).json(error)
    }
}