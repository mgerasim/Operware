git add .
git commit -m build
git push origin master
ng build --optimization
scp dist/Operware/* misha@dev84:~/projects/Operware/public/

