# My personal blog

Deploy with http://nodejs.org/dist/v0.11.12/node-v0.11.12-linux-x64.tar.gz

Set up node/npm in /usr/local/bin

  iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000

  cp mikemaccana.com.service /etc/systemd/system

  systemctl enable mikemaccana.com.service

  systemctl start mikemaccana.com.service