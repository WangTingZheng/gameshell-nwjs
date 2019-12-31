nw.Window.open('./html/index.html', {}, (win) => {
    var win = nw.Window.get();
    var width = 288;
    var height = 224;
    //设置最大宽高
    win.setMaximumSize(width, height)
    win.setMinimumSize(width, height)
});

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