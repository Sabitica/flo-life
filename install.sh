# Update Packages
apt-get update

# Basic Linux Stuff
apt-get install -y git

# Apache
apt-get install -y apache2

# Enable Apache Mods
a2enmod rewrite

# Restart Apache
service apache2 restart

# Install npm
apt-get install npm
npm config set strict-ssl false

# install and setup nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

service apache2 restart

# installing node
nvm install --lts

service apache2 restart

# backend plugins 
npm install -g nodemon
npm install -g concurrently

# install mongodb, unfinished
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

# more backend plugins
npm install mongoose