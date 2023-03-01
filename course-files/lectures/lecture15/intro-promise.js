// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

const fetchData = async (url) => {
    return new Promise((resolveFunction, rejectFunction) => {
        // inside the promise...
        // something that takes a long time....
        setTimeout(() => {
            console.log('Reviews retrieved for:', url);
            let success = true;
            
            const data = [{
                    "text": "We were extatic to finally try this place. It is well worth a pit stop on Noyes street for their amazing food. They have a wide variety of dishes including...",
                    "rating": 5
                }, {
                  "text": "We ordered tomate for a small corporate gathering tonight and everything was PERFECT! The food was great, the delivery was on time, everything was labeled...",
                  "rating": 5
                }];
            if (success) {
                console.log("SHOW-DATA!!!");
                resolveFunction(data);
            } else {
                rejectFunction('Detailed error message + code');
            }
        }, 2000);
    });
}

const successFunction = async () => {
    try {
        const data = await fetchData('https://my-request.com?a=123');
        console.log('SUCCESS! Do something with the data: ', data);
    } catch (e) {
        console.error('The promise threw an error:', e);
    }
}

const failFunction = err => {
    console.log('FAIL! Handle the error: ', err);
}


successFunction();