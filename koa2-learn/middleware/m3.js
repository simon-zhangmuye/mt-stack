function m3(ctx){
  global.console.log('m3')
}

module.exports=function(){
  return async function(ctx,next){
    global.console.log('m3 start')
    m3(ctx)
    await next()
    global.console.log('m3 end')
  }
}
