/*--------------------------------------------------------------------------------------------------
                                            
                                            LAB TEST 1                   

                    COMP 3123 | FULL STACK DEVELOPMENT | KAILIE FIELD | 100627702
                              Submission Date: 3rd October 2024 at 20:00


[ QUESTION 3 ] FILE MODULE:
    -- create a script that will do the following:
    1. REMOVE LOG FILES
        -- remove ALL files from the logsDirectory -- if exists
        -- output the fileName to delete
        -- remove logsDirectory

    2. CREATE LOG FILES
        -- create a logsDirectory -- if it does not exist
        -- change the process to the new logsDirectory
        -- create 10 log files and write some text into the file
        -- output the fileNames to the console
    HINT: use the fs module and path module, and the process current working directory to build 
    directory path. It is acceptable to have a remove.js script and separate add.js script

--------------------------------------------------------------------------------------------------*/ 
//------ [ ANSWER 3(1) -- REMOVE LOG FILES ]:

// *** No error handling added with try-catch potential
// *** made skeleton -- did not modify to make async didnt have time -- couldnt remember

// Re: hint -- using fs and path modules
const fileSystem = require('fs');
const filePath = require('path');

// Re: create logsDirectory
const logsDirectory = filePath.join(__dirname, 'Logs');

// Re: create log files
function removeLogFiles(){

    // Re: if directory exists, fs module with logsDirectory to read
    if(fileSystem.existsSync(logsDirectory)){

        // Re: Reading all fileNames by reading directory log files with fileSystem
        const readingFiles = fileSystem.readdirSync(logsDirectory);

        // Re: condition -- if files exist -- output the fileName being deleted until done
        readingFiles.forEach(fileName => {

            // combining fileName and logsDirectory into single path
            // direction to unlink to delete specific file -- move to next log until empty
            fileSystem.unlink(filePath.join(logsDirectory, fileName));
            console.log(`delete files...${fileName}`);


        });

        // RE: remove the logsDirectory
        fileSystem.rmdirSync(logsDirectory);
        // Update : logsDirectory deleted -- inform user
        console.log("UPDATED : logsDirectory -- deleted.")
        
    }else{

        // Update: logsDirectory does not exist -- inform user
        console.log("UPDATE : logsDirectory -- not exist.")
    }
}

removeLogFiles();