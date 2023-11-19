import Post from '../model/post.js'



export const createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        post.save();
        response.status(200).json({ msg: 'Post saved successfully' });
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getPosts = async (request, response) => {
    let username = request.query.username;
    let posts;
    try {
        posts = await Post.find({})
        response.status(200).json(posts)
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id)
        response.status(200).json(post)
    } catch (error) {
        response.status(500).json(error)
    }
}






// export const getPosts = async (request, response) => {
//     let posts;
//     try {
//         posts = await Post.find({});
//         response.status(200).json(posts);
//     } catch (error) {
//         response.status(500).json(error);
//     }
// }


// export const getPost = async (request, response) => {
//     try {
//         const post = await Post.findById(request.params.id);
//         response.status(200).json(post);
//     } catch (error) {
//         response.status(500).json(error)
//     }
// }