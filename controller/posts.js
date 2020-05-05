const User = require('../model/user');
const Post = require('../model/post');

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const authorId = req.body.authorId;
    console.log(title);

    const post = new Post(title, content, authorId);

    post
        .save()
        .then(response => {
            res.status(200).json({postId : response.insertedId});
        })
        .catch(error => {
            console.log(error);
        })

}


