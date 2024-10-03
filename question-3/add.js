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

    HINT: use the fs module and path module, and the process 'current working directory' to build 
    directory path. It is acceptable to have a remove.js script and separate add.js script

--------------------------------------------------------------------------------------------------*/ 
//------ [ ANSWER 3(2) -- CREATE LOG FILES]:

// *** No error handling added with try-catch potential
// *** made skeleton -- did not modify to make async didnt have time -- couldnt remember


// Re: hint -- using fs and path modules
const fileSystem = require('fs').promises;
const filePath = require('path');

// Re: create logsDirectory
const logsDirectory = filePath.join(__dirname, 'Logs');

// Re: create log files
function createLogFiles(){

    // Re: create logsDirectory 
    // *** all exists, mkdir, writeFile are depricated on my system, have to use Sync to run
    if(!fileSystem.existsSync(logsDirectory)){
        fileSystem.mkdirSync(logsDirectory);
        console.log('[ Adding Logs Directory ]');
    }

    // Re: change process -- current working directory
    process.chdir(logsDirectory);

    // Re: 10 log files with text
    // -- iterate until 10 logs are added to current working directory
    for(let i = 1; i <= 10; i++){
        const fileName = `log${i}.txt`;
        const logsAdded = filePath.join(logsDirectory, fileName);
        fileSystem.writeFileSync(logsAdded, `${i}`);
        console.log(`${fileName}`);

    }
            console.log('UPDATE: 10 Log Files -- created.')
}


createLogFiles();

