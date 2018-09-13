module.exports = {
  'GET /textures': async (ctx,next) => {
      ctx.render('textures.html',{
          title: 'WebGL原理-基础原理'
      });
  }
};