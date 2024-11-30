import Portfolio from "../Models/Portfolio.js";

export const addPortfolio = async (req, res) => {
  try {
    const {
      userId,
      categoryId,
      title,
      fullname,
      proficiency,
      about,
      skills,
    } = req.body;

    let image = null;

    if (req.file) {
      image = req.file.path; 
    }

    const newPortfolio = new Portfolio({
      userId,
      categoryId,
      title,
      fullname,
      proficiency,
      about,
      skills,
      image,
    });

    const savedPortfolio = await newPortfolio.save();
    res.status(201).json(savedPortfolio);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create portfolio", details: err.message });
  }
};

////////////////////////////

export const updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Handle image upload
    if (req.file) {
      updates.image = req.file.path;
    }

    // Partial update
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true }
    );

    if (!updatedPortfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }

    res.status(200).json(updatedPortfolio);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update portfolio", details: err.message });
  }
};


////////////////////////////////////////////////

export const getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find(); 

    if (portfolios.length === 0) {
      return res.status(404).json({ message: "No portfolios found" });
    }

    res.status(200).json(portfolios);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch portfolios", details: err.message });
  }
};

/////////////////////////////////

export const deleteById = async (req, res) => {
  const { id } = req.params; 
  try {
    const portfolioToDelete = await Portfolio.findByIdAndDelete(id);

    if (!portfolioToDelete) {
      return res.status(404).json({ message: "No portfolio found" });
    }

    return res.status(200).json({ message: "Portfolio deleted successfully", portfolio: portfolioToDelete });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete portfolio", details: error.message });
  }
};
