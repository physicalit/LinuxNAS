#!/bin/bash
#Version 1.0
#This is the installer script
#The script is under GPL v2 License
#For now it runs only on a x64 ubuntu 14.04 
#Created by GIUMBAI

#Variables
st2="\033[91;40m"
st="\033[92m"
n="\033[0m"

#Ensuring the OS compatibility
if [ -f /etc/lsb-release ];
then
	$INS
else
echo "You don't have the requerd OS"
fi
#Add the command to start all services
INS=$(
	mv start /usr/bin/start-nas
	#The needed repositories
	#wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -
	#add-apt-repository "deb http://download.virtualbox.org/virtualbox/debian trusty contrib"
	#Update the system and installing necesar things
	apt-get update
	apt-get upgrade -y
	apt-get install -y dkms unzip
	apt-get install -y libapache2-mod-php5
	apt-get install -y sysvbanner
	apt-get install -y apache2
	apt-get install -y php5 php5-cli php5-curl
	apt-get install -y libapache2-mod-php5
	service apache2 restart
	#Installing Samba
	echo "\$st Samba is now installing, please wait\$n"
	source samba.sh
	#Installing  Utorrent
	echo "\$st Utorrent is now installing, please wait\$n"
	source utorrent.sh
	#Installing virtualbox
	#echo "\$st VirtualBox is now installing, please wait\$n"
	#source virtualbox.sh
	#Installing Plex media server
	echo "\$stPlex Media Server is now installing\$n"
	dpkg -i plex.deb
	)