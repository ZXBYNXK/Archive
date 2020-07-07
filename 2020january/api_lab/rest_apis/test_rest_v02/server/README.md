# Rest Test v03
Darius Rain
   
   
   
     
    
     
   
   
        
   Initial steps to start project will take place in the git bash terminal using the commands in the following steps.
   
   
   Steps

    1. Initialize a git repository 
    ~> 'git init' 
   











     
    













    2. Create a README markdown file (this current file) with the first commit as 'Initial Commit'<--A common method/rule to go by.
     ~> 'touch README.md' - if your using VSCode then 'code README.md'
     ~~> Write some text to the README file then add file to the staging area by 
            'git add .' or 'git add <filename>'- in this case it would be README you would use this if you want to add this its own commit.
     ~~~> Now commit the file by






     
    
   



   
    3. Create a branch used for experimenting with the current master branch.
     ~> 'git checkout -b <branchname>' - this command creates a new branch then it swithces/checkout to that branch after. 
        So you dont haft to execute two different commands for example 'git branch <branchname>' then 'git checkout <branchname>'. 
        The '-b' is obviously the cause of the difference.
        
   
   
     
   
   








    3. Create a node package using npm command. 
    
     ~> 'npm init' - this command initalizes a package.json file if executed this way it will go through a brief questionare to manually configure
        your package.json file which you will change over time later on.

     ~~> 'npm install <packagename> ... <packagename>' - if you need any dependencies that you want to add to your package.json file. Find dependencies at [*Node Package Manager*](https://www.npmjs.com) where all the dependencies are located for the public to install and use.
      
     ~~~> 'npm install express mongoose nodemon body-parser dotenv' - In this case i am using these dependcies to build my restful API


   









    4.  Now create a main file you can call it what you want but in most cases it will be called by NPM default 'index.js' but some people use 'server.js' or 'app.js' its all the same thing. This javascript file will be used to import installed modules such as express,
    mongoose, nodemon, and body-parser. 

      ~> Create the file by issuing the following command 
         If VScode 'code app.js' otherwise 'touch app.js' then open it in your prefered text editor.

         ~~>GO TO 'app.js' AND SEE THE CODE, I EXPLAIN IN THE COMMENTS!

    




    5.  Create a directory to hold my external routes in this case 'routes_dynamic/' then create javascript files for each route you 
      wish to handle.

       ~> SEE 'posts.js' I WILL EXPLAIN IN THE COMMENTS



