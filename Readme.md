## Hackathon_MarvelKestra
<ul> 
  <li>
  MarvelKestra is a website which allows the users to play a game based on the interest of the super heroes they like in marvel.
</li>
<li>
  It makes interesting to play by adding new character to game. 
</li>
<li>
  Game stats can seen in the game.
</li>
<li>
  This is a project for the hackathon called HackFrost.
</li>
</ul>

##  Demo of the project


### Tech Used in this project
<ul>
  <li>Kestra</li>
  <li>Html</li>
  <li>Tailwind CSS</li>
  <li>Javascript</li>
  <li>Nodejs</li>
  <li>Docker</li>
</ul>

### File structure
``` bash
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── docker-compose.yaml
├── Dockerfile
├── index.js
├── kestra
│   └── flow
│       ├── demo.yml
│       ├── example.yml
│       └── slack.yml
├── node_modules
│   └── mz
│       └── index.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── Readme.md
├── script.sh
├── src
│   ├── app.js
│   ├── index.html
│   └── styles.css
└── tailwind.config.js

```
  ### Configure the project in the Local
  
  <h4>Clone the repo</h4>

  ``` bash
  git clone https://github.com/Aditya-NV-06/Hackathon_MarvelKestra
  ```
<h4>Install the packages</h4>

``` bash
npm install
```
<h4>Env to load</h4>

``` bash
PORT=<your_port_number>
SITE_URL=<your_site_url>
```
<h4>Run the project</h4>

``` bash
npm run start
```
### Start Kestra 
<h4>Change the permission</h4>

``` bash
chmod +x script.sh
```
<h4>Run the script</h4>

``` bash
.\script.sh
```
### Ngrok for the server url

``` bash
ngrok http 8080
```

