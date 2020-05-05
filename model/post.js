const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = new mongodb.ObjectID;

class Post {
    constructor(title, content, authorId) {
        this.title = title;
        this.content = content;
        this.authorId = authorId;
        this.comments = [];
    }

    save() {
        const db = getDb();
        return db
                .collection('posts')
                .insertOne(this);
    }

    static delete(postId) {
        const db = getDb();
        return db
                .collection('posts')
                .deleteOne(
                    {
                        _id : ObjectId(postId)
                    }
                );
    }

    static findAll() {
        const db = getDb();
        return db
                .collection('posts')
                .find()
                .toArray();
    }
}

module.exports = Post;
