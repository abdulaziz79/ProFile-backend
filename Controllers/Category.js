import Category from "../Models/Category.js";

export const addCategory = async (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title is required." });
    }

    try {
        const newCategory = new Category({ title });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/////////////////////////

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch categories." });
    }
};

////////////////////////

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title is required." });
    }

    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { title },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ error: "Category not found." });
        }

        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: "Failed to update category." });
    }
};

//////////////////////////

export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({ error: "Category not found." });
        }

        res.status(200).json({ message: "Category deleted successfully." });
    } catch (error) {
        res.status(500).json({ error:error.message });
    }
};