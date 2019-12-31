## Tools:
- [nodejs](https://nodejs.org/en/download/): an asynchronous event-driven JavaScript runtime
- [nwjs](https://nwjs.io/): a framework to build application with nodejs
- [Visual Studio Code](https://code.visualstudio.com/): a powerful editor to code!
## Code
you can use my demo directly:
```
git clone https://github.com/WangTingZheng/gameshell-nwjs.git
```
or create by yourself:
```
mkdir workspace
cd workspace
mkdir gameshell-html
mkdir html
cd gameshell-html
```
### Html
create `index.html` in `./html`
```html
<!DOCTYPE html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>gameshell</title>
</head>
<body>
</body>
```
### Javascript
create `index.js` in project folder

set window size
```javascript
nw.Window.open('./html/index.html', {}, (win) => {
    var win = nw.Window.get();
    var width = 288;
    var height = 224;
    //设置最大宽高
    win.setMaximumSize(width, height)
    win.setMinimumSize(width, height)
});
```
set shortcut and it's function
```javascript
add_shortcut("Escape")

function add_shortcut(key_shortcut){
    var option = {
        key: key_shortcut,
        active: function () {
            nw.App.quit()
        },
        failed: function (msg) {
            console.log(msg);
        }
    };
    var shortcut = new nw.Shortcut(option);
    nw.App.registerGlobalHotKey(shortcut);
}
```
### Json
create `package.json`  in `./`
```json
{
	"name": "helloword",
	"main": "index.js"
}
```
## Run
### run in PC
if your nwjs has been add into your Path, you can just run this:
```
nw ./
```
make sure your terminal are in this project Path
if not, you can run:
```
your_nwjs_path ./
```
**Note**: After the app runing, you must minsize the window by hand to let app display in normal size
### run in Gameshell
