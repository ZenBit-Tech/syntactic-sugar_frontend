# Syntactic-sugar_frontend template

This template was made with Nx - smart, fast and extensible build system with first class monorepo support and powerful integrations. Please, go throw docs - https://nx.dev/

## To run application locally

1. Make sure you have an LTS version of Node.js installed on your computer. Download and install if it is necessary.
2. Clone this repo.
3. Install the basic project dependencies with the command npm install.
4. Start development mode by running the command npm start.
5. Navigate to the address in your browser http://localhost:4200. This page will automatically reload after saving changes to project files.

##  Deployment

```bash
$ git pull
$ npm run build
```
1. Open S3 storage with your service S3 link (example: http://client-zb5-yoursitename.s3-website.eu-east-4.amazonaws.com/).
2. Open bucket and download build files with Upload button.

## Repositories links

Frontend repo - https://github.com/ZenBit-Tech/syntactic-sugar_frontend

Backend repo - https://github.com/ZenBit-Tech/syntactic-sugar_be


## Clone the repo from command line:

```sh
$ git clone https://github.com/ZenBit-Tech/syntactic-sugar_frontend
$ cd syntactic-sugar_frontend
$ npm i
$ npm start
```
## Extra explanation for use

1. The progect 'freelance' is in apps directory.
2. The components are in libs folder in the root of workspase. 
3. To create a new one you can with command ``` npx nx g @nrwl/react:component component_name --project=components --export```.
4. We use i18next.  Here is docs - https://react.i18next.com.
5. All text must be in translation file (translation folder).
6. Command ``` git commit``` start running test. If everything OK you will be able to make push.
