const post = require('./posts');

var store = post.expStore;
var postNum = store.posts;

module.exports = {
    getComments(req, res) {
        let index = req.params.postID;
        if(!postNum[index].comments){
            res.send("No comments on this post");
        }
        else{
            res.status(200).send(postNum[index].comments);
        }
    }, 
    addComment(req, res) {
        let index = req.params.postID;
        if(!postNum[index]){
            res.send("The post doesnt exist");
        }
        else{
            if(postNum[index].comments){
                postNum[index].comments.push(req.body);
                res.status(201).send('New comment added');
            }
            else{
                let comments = [];
                comments.push(req.body);
                postNum[index]['comments'] = comments;
                res.status(201).send('New comment added');
            }
        }
    },
    updateComment(req, res) {
        let index = req.params.postID;
        let comment = req.params.commentID;
        if(!postNum[index].comments || !postNum[index].comments[comment]){
            return res.send("Comment unavailable")
        }
        Object.assign(postNum[index].comments[comment],req.body);
        res.status(200).send('Updated comment');
    },
    removeComment(req, res) {
        let index = req.params.postID;
        let comment = req.params.commentID;
        if(!postNum[index].comments || !postNum[index].comments[comment]){
            return res.send("Comment unavailable")
        }
        postNum[index].comments.splice(comment, 1);
        res.status(204).send();
    }  
}