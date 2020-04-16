git add .
git commit -m deploy
git pull origin master
git push origin master
sudo systemctl stop Integrity.service
sequelize db:migrate --env production
sudo cp Integrity.service /etc/systemd/system/
sudo service systemd-resolved restart
sudo systemctl enable Integrity.service
sudo systemctl start Integrity.service
sudo systemctl status Integrity.service