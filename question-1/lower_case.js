/*--------------------------------------------------------------------------------------------------
                                            
                                            LAB TEST 1                   

                    COMP 3123 | FULL STACK DEVELOPMENT | KAILIE FIELD | 100627702
                              Submission Date: 3rd October 2024 at 20:00


[ QUESTION 1 ] ES6 FEATURES:
    -- create a script with a function named lowerCaseWords that takes a mixed array as input
    -- function must:
                -- return a promise that is resolved or rejected
                -- filter the non-strings and lower case the remaining words

[ INPUT ]:
 cost mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

[ OUTPUT ]:
['pizza', 'wings']
--------------------------------------------------------------------------------------------------*/ 
//------ [ ANSWER ]:

// Creating Promise -- resolve/reject to pass to main method
const lowerCaseWords = (promise) => {
    return promise
        .then(mixedArray => {
        if(!Array.isArray(mixedArray)) {
            return Promise.reject(new Error("----- FAILED:: NOT AN ARRAY!"));
        }
        return mixedArray
            .filter(element => typeof element == 'string')
            .map(element => element.toLowerCase());
    });

};

// MAIN METHOD
const question1 = () => {

    // Testing Output for Question1 deliverable
    const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
    const promise = Promise.resolve(mixedArray);

    lowerCaseWords(promise)
        .then(mixedArrayFiltered => {
        console.log(mixedArrayFiltered);
    })
    .catch(error => {
        console.error(error.message);
    });

    // Testing Promise Rejection
    const testPromise = Promise.resolve("Kailie"); 
    lowerCaseWords(testPromise)
        .then(mixedArrayFiltered => {
        console.log(mixedArrayFiltered);
    })
        .catch(error => {
        console.error(error.message);
    });
};


question1();


