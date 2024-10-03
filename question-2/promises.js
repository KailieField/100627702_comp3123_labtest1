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
const resolvedPromise = () => {

    setTimeout(() => {
    
        return console.log({'Resolved': 'delayed success.'});

    }, 500)
}

const rejectedPromise = () => {
    
    setTimeout(() => {

        const rejectedPromise = 'there has been a Delayed Exception';
        try {
            throw rejectedPromise
        }    
        catch(rejectedPromise) {
            return console.error(`${rejectedPromise}`);          
        }
    }, 500)
}

resolvedPromise()
rejectedPromise()


