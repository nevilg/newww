# !/bin/bash
# deploy.sh
# builds and deploys changes automatically

webpack
cp -r build/ ../nevilgeorge.github.io
cd ../nevilgeorge.github.io
git add .
git commit -m "deploying"
git push origin master
