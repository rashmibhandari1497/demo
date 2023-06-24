const posts = [];
let lastActivityTime = null;
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            resolve();
        },1000)
    })
}
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date().toISOString();
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete.");
            }
        }, 1000);
    });
}

// Create a post and update user's last activity time
createPost({ title: 'Post 1' })
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTime);
    })
    .then(() => deleteLastPost())
    .then((deletedPost) => {
        console.log('Deleted Post:', deletedPost);
        console.log('Updated Posts:', posts);
    })
    .catch((error) => {
        console.log(error);
    });







