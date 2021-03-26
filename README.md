<img src="./src/tackle_box_logo.svg" height="72" style="display: block;
    margin-left: auto;
    margin-right: auto">
<div style="text-align: center">
<h1>
 Tackle Box
</h1>
<i>A <a href="https://cds-hooks.org/">CDS Hooks</a> management tool</i>
</div>


# Getting Started
First, create a `.env` file under the project root with the following:
```
REACT_APP_API_BASE_URL=http://localhost/api
```
## Using docker-compose

Head to the `.devcontainer` folder and run 
```
docker-compose up -d
docker-compose exec web yarn start
```
and then head to [http://localhost/web](http://localhost/web).\
This uses [mockserver](https://www.mock-server.com/) to mock the API and nginx as a reverse proxy. 

## Using vscode devcontainers

The project can be started with the vscode [devcontainer](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension too.\
Select the `open in container` command from the extension in vscode. In the opened container shell run `yarn start` and head to [http://localhost/web](http://localhost/web)

## Using yarn

You will have to provide your own Tackle Box API here.

Run the app in the development mode
```
export REACT_APP_API_BASE_URL=<TACKLE_BOX_API_BASE_URL>
yarn install
yarn start
```
Open [http://localhost:3000/web](http://localhost:3000/web) to view it in the browser.
