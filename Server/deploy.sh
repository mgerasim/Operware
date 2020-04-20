git add .
git commit -m deploy
git pull origin master
git push origin master
cd ~/apps/Integrity/Server
git reset --hard
git pull origin master
npm i axios --save
npm i
npm run build

sudo systemctl stop Integrity.service
sudo systemctl start Integrity.service
sudo systemctl status Integrity.service