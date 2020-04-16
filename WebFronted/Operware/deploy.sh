git add .
git commit -m build
git pull origin master
git push origin master
ng build --optimization
scp dist/Integrity/* misha@dev84:~/projects/Integrity/Server/public

