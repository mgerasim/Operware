git add .
git commit -m deploy
git pull origin master
git push origin master
cd ~/apps/Integrity
git pull origin master
npm run build