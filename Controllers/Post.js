import Post from "../Models/Post.js";
import Portfolio from "../Models/Portfolio.js";

export const createPost = async(req,res)=>{
    try{
    const {portfolioId, title, description}= req.body;
    const imageFiles = req.files

    if (!imageFiles || imageFiles.length === 0) {
        return res.status(400).json({ error: "At least one image is required" });
      }
      
      const imagePaths = imageFiles.map((file)=>file.path);

      const newPost = new Post({
        portfolioId,
        title,
        description,
        images:imagePaths
      })
      const savedPost = await newPost.save()

      res.status(201).json(savedPost)
    }catch(err){
        res.status(500).json({ error: "Failed to create post", details: err.message })
    }
}

///////////////////////////////////

export const getPostByPortfolioId = async (req,res) =>{
    const { id } = req.params
    try {
        const portfolio = await Portfolio.findById(id)
        if(!portfolio){
            return res.status(404).json({ error: "Portfolio not found" });
        }
        const getPost = await Post.find({portfolioId: id});
        if(getPost){
            res.status(200).json(getPost)
        }
        else{
            res.status(404).json("Post not found")
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to get post", details: err.message })
    }
}

//////////////////////////////////

export const deletePostID = async(req, res)=>{
    const {id} = req.params;
    try {
        const post = await Post.findByIdAndDelete(id);
        if(post){
            res.status(200).json(post)
        }else{
            res.status(404).json("Post not found")
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete post", details: err.message })
    }
}