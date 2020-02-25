git add .
git commit -m build
git pull origin master
git push origin master
ng build --optimization
scp dist/Operware/* misha@dev84:~/projects/Operware/Server/public

