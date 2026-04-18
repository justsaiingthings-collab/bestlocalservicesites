#!/bin/bash
set -e

echo "=> Preparing unified Netlify deployment artifact..."

mkdir -p _site

echo "=> Copying landing page..."
cp -r apps/landing/out/. _site/

for demo in cleaning hvac landscaping painting plumbing roofing
do
  echo "=> Copying demo site: $demo..."
  mkdir -p _site/$demo
  cp -r apps/demo-$demo/out/. _site/$demo/
done

echo "=> DONE! Built and unified 7 architectures."
