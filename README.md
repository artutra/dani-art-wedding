# dani-art-wedding
🛠️ Under development.

## Install Hugo
Follow the instructions inside Hugo official docs:

[Open docs](https://gohugo.io/installation/)

## Install Tailwind Standalone CLI
Get the standalone package accordingly with your OS via CURL:

[Get realease URL](https://github.com/tailwindlabs/tailwindcss/releases)

`curl -sLO [releaseURL]`

Make sure it has executable permissions:

`chmod +x [fileName]`

Then change the filename to "tailwind":

`mv [fileName] tailwindcss`

[Learn more](https://tailwindcss.com/blog/standalone-cli)

## Start development server

### Start tailwind CLI:
`./tailwindcss -i static/input.css -o static/main.css --watch`

### Start Hugo server disabling fast render
`sudo hugo server --disableFastRender`
