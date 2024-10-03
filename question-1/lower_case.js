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

// Re: function named lowerCaseWords
//      -- bringing return promise condition into function for ease
const lowerCaseWords = (promise) => {

    return promise
        .then(mixedArray => 
        {

        if(!Array.isArray(mixedArray)) 
        {   
            // Update: rejection error message to user
            return Promise.reject(new Error("----- FAILED:: NOT AN ARRAY!"));

        }
        return mixedArray
            // filtering elements of the mixed array to search for string types
            .filter(element => typeof element == 'string')

            // populating results, transforming strings toLowerCase
            .map(element => element.toLowerCase());
    });

};

// MAIN METHOD 
const question1 = () => {

    // Testing Output -- passing to console
    const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
    const promise = Promise.resolve(mixedArray);

    // calling function, passing the mixedArray in its filtered state
    lowerCaseWords(promise)
        .then(mixedArrayFiltered => {
        console.log("New Filtered Array : ", mixedArrayFiltered);
    });

    // Testing Rejection
    const testPromise = Promise.resolve("Kailie Field's odd way of visualizing content"); 
    lowerCaseWords(testPromise)
        .then(mixedArrayFiltered => {
        console.log(mixedArrayFiltered);
    })
        .catch(Error => {
        console.error(Error.message);
    });
};


question1();




