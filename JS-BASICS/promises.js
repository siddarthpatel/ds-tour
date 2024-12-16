setTimeout(()=> {
    console.log('async callback operation (executed from Task queue)')
}, 3000)

const resolvePromise = new Promise((resolve, reject) => {
    resolve('async Promise RESOLVED (executed from micro-task queue)')
})

const rejectPromise = new Promise((resolve, reject) => {
    reject('async Promise REJECTED (executed from micro-task queue)')
})

const promise3 = Promise.resolve('async Promise 3');


const callPromises = async () => {
    try {
        const resolve = await resolvePromise
        console.log(resolve)
    } catch (error) {
        console.error('Error from resolvePromise:', error);
    }

    try {
        const reject = await rejectPromise;
        console.log(reject);
    } catch (error) {
        console.error('Error from rejectPromise:', error);
    }
}

callPromises()

promise3.then((value) => {
    console.log(value);
});

console.log('Sync operation pushed to JRE stack and executed first (LIF0)')