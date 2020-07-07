#!/bin/bash
printf "Auto Structure (Format: MVC)... \n" 
echo "What is the name of your project?\n"
read name
mkdir $name
cd $name
git init
touch README.md
touch .gitignore
echo "node_modules" > .gitignore
echo "(New Project)" > README.md
touch server.js
npm init -y
npm i mongoose express cors
npm i -D nodemon
mkdir views/layouts routes models public
touch routes/home.js
echo "Paste your databse link (Optional):"
read database
export DB=$database
echo "(Enviroment Variable)-> DB="$database
echo "Set port value (Optional):"
read port
export PORT=$port
echo "(Enviroment variable)-> PORT="$port
git add -A
git commit -m "Initial Commit"
git checkout -b "Name me"
printf "To rename branch:\n 'git checkout -m <branch name>'\n\n"
printf "Auto Structuring Complete. (Done)"

