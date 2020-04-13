git add .
git commit -m build
git pull origin master
git push origin master
ng build 
scp dist/Operware/* rails@ast12.site:~/projects/Operware/Server/public

