Original Build:
===

Jake's Challenge:
---
```
Reading will only get you so far - build this:
Use create-react-app (https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) to make a github repo viewer. In es6.

1. should hit this endpoint: `https://api.github.com/users/jforaker/repos` to a show a list of user repos 
2. should have an Input to type a github username
3. should have local/component state and use props  (not redux! .. yet)
4. must have at least 3 React components

Helpful links: 
https://facebook.github.io/react/docs/thinking-in-react.html
https://facebook.github.io/react/docs/forms.html
https://daveceddia.com/ajax-requests-in-react/
```

Q: Can I create a virtual env for react project (isolate npm / node)
A: 

Notes:
$ which npm
/usr/local/bin/npm
$ which node
/usr/local/bin/node


Create Github Repo:
---
Created github repo (with Node .gitignore file):
  https://github.com/JamieCzuy/repo-list.git
  


Set up Virtual Environment:
---
Used my script to create a virutal env: repo-list



Working in the virtual environment:
---

```
# Change to root of Virtual Env
cd ${VIRTUAL_ENV}
npm install create-react-app
ln -s `pwd`/node_modules/create-react-app/index.js ./bin/create-react-app
# Change to root of repo
cd work
create-react-app repo-list
```

```
# Change to root of app
cd repo-list
```
```
# Run tests
CI=true npm test
```
See 1 Test Passed

```
# Run Dev server:
npm start
```
See the *Welcome to React* at http://localhost:3000

```
# Build app for deployment
npm run build
```
See Compiled successfully

```
# Install serve package
# Change to root of Virtual Env
cd ${VIRTUAL_ENV}
npm install serve
# Note: there will be npm warnings about package not existing
#       and attributes missing
ln -s `pwd`/node_modules/serve/bin/serve.js ./bin/serve
```

```
# Change to root of repo
cd work
# Change to root of app
cd repo-list
```

```
# Run the built app
serve -s build
# Open a browser and go to: open http://localhost:5000
```

See the *Welcome to React* at http://localhost:5000


Commit changes so far:
---
```
# Change to root of repo
cd ${VIRTUAL_ENV}/work
git add .
git status
# Note: repo-list files
git commit -m "[Add] Initial creation (create_react_app)  of repo-list app"
git push
```
