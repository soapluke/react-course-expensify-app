const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        /* resolve('This is my resolved data'); */
        reject('Error')
    }, 1500);
});

promise.then((data) => {
    console.log(data);
}).catch(error);