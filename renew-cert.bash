#!/usr/bin/env bash
cd /etc/letsencrypt/live/mikemaccana.com
systemctl stop haproxy
certbot renew
cat privkey.pem fullchain.pem > combined.pem
systemctl start haproxy
