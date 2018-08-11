var store = {};
store.posts = [];

module.exports = {
    expStore : store,

    getPosts(req, res) {
        res.status(200).send(store.posts);
    },
    addPost(req, res) {
        store.posts.push(req.body);
        res.status(201).send('Added post');
    },
    updatePost(req, res) {
        let index = req.params.postID;
        Object.assign(store.posts[index],req.body);
        res.status(200).send('Updated posts');
    },
    removePost(req, res) {
        let index = req.params.postID;
        if(!store.posts[index]){
            return res.status(400).send("No such post")
        }
        store.posts.splice(index, 1);
        res.status(204).send();
    }
  }