/*--------------------------------------------------------------------------------------------------
                                            
                                            LAB TEST 1                   

                    COMP 3123 | FULL STACK DEVELOPMENT | KAILIE FIELD | 100627702
                              Submission Date: 3rd October 2024 at 20:00


[ QUESTION 2 ] PROMISES:
    -- given the script file callbacks.js, write a script that does the following:
        -- create a method resolvedPromise that is similar to 'delayedSuccess' and
           resolves a message after a timeout of 500ms.
        -- create a method rejectedPromise that is similar to 'delayedException' and
           resolves an error message after a timeout of 500ms
        -- call BOTH promises separately and handle the resolved and reject results
           and then output to the console.
--------------------------------------------------------------------------------------------------*/ 
//------ [ ANSWER ]:

// Re: Resolved Promise
const resolvedPromise = () => {

    setTimeout(() => {
        
        // return formatted message to console as per deliverable request
        return console.log({'message' : 'delayed success.'});

    }, 500) // <-- kept 500 ms
}

// Re: Rejected Promise
const rejectedPromise = () => {
    
    setTimeout(() => {

        // setting constant rejectedPromise message
        const rejectedPromise = {'error' : 'delayed exception!'}

        // try-catch block
        try 
        {
            throw rejectedPromise
        }    
        catch(rejectedPromise) 
        {
            // return formatted message to console as per deliverable request
            return console.error(`${rejectedPromise}`);          
        }

    }, 500) // <-- kept 500ms
}


resolvedPromise()
rejectedPromise()


