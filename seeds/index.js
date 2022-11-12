

const { User, Post, Comment} = require('../models');

const users = [
    {
        username: 'Damian',
        password: '1234567890'
    },
    {
        username: 'Claudia',
        password: 'retract'
    },
    {
        username: 'Leonel',
        password: '123coding'
    },
]

const posts = [
    {
        title: 'why cooking is sexy',
        content: 'beacuse it is',
        user_id:'1'
    },
    {
        title: 'why futbol is sexy',
        content: 'the world cup',
        user_id:'2'
    },
    {
        title: 'why topochico is sexy',
        content: 'the water is brilliant',
        user_id:'3'
    },
]

const comments = [
    
    {
        content: 'this are great topics',
        user_id: '1',
        post_id: 3
    },
    {
        content: 'I need a coffe break',
        user_id: '2',
        post_id: 3
    },
    {
        content: 'I need a drink',
        user_id: '23',
        post_id: 3
    },
]

const dataDummy = async () => {


    await User.bulkCreate(users, { individualHooks: true });
    await Post.bulkCreate(posts);
    await Comment.bulkCreate(comments);

}

dataDummy();