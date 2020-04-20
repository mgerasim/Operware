git add .
git commit -m build
git pull origin master
git push origin master
ng build
scp dist/Operware/* misha@dev84:~/projects/Integrity/Server/public
