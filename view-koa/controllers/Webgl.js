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
    },
    'GET /webgl-03': async (ctx,next) => {
        ctx.render('webgl-03.html',{
            title: 'WebGL原理-图像处理'
        });
    },
    'GET /webgl-04': async (ctx,next) => {
        ctx.render('webgl-04.html',{
            title: 'WebGL原理-进一步处理图像'
        });
    }
};