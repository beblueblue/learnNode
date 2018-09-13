module.exports = {
    'GET /webgl-01': async (ctx,next) => {
        ctx.render('webgl-01.html',{
            title: 'WebGL原理-基础原理'
        });
    },
    'GET /webgl-02': async (ctx,next) => {
        ctx.render('webgl-02.html',{
            title: 'WebGL原理-工作原理'
        });
    }
};