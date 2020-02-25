git add .
git commit -m deploy
git push origin master
git pull origin master
sudo systemctl stop Operware.service
sequelize db:migrate --env production
sudo cp Operware.service /etc/systemd/system/
sudo service systemd-resolved restart
sudo systemctl enable Operware.service
sudo systemctl start Operware.service
sudo systemctl status Operware.service