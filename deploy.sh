# !/bin/bash
# deploy.sh
# builds and deploys changes automatically

echo "Building..."
webpack
cp -r build/ ../nevilgeorge.github.io
cd ../nevilgeorge.github.io

echo "Deploying..."
git add .
git commit -m "deploying to prod"
git push origin master
