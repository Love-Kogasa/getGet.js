function getGet( href ){
    let valStrArrs = href.split( "?" )[1].split( "&" )
    let ret = {}
    for( valStr of valStrArrs ){
        eval( `ret.${valStr.split("=")[0]} = \`${valStr.split("=")[1]}\`` )
    }
    return ret
}
function getProtocol( href ){
    return href.split( "://" )[0]
}
function getPath( href ){
    return ( function(){
      let pathNow = href.split( "/" ).slice( 3 ).join( "/" ).split( "?" )[0]
      if( pathNow.indexOf( "." ) == -1 ){
        pathNow += ".html"
      }
      return pathNow
    })() || "/index.html"
}
function toGet( data ){
    let ret = ""
    for( let tdt of Object.keys( data) ){
        ret += tdt + "=" + data[tdt] + "&"
    }
    return ret.slice( 0, -1 )
}
function setGet( data ){
    let dt = toGet( data )
    window.location.href = window.location.href.split( "?" )[0] + "?" + dt
}
function setPath( path ){
    window.location.href = window.location.href.replace( $PTC, path )
}
function setURL( option ){
    let set = {
        host : option.host,
        protocol : option.protocol || "",
        path : option.path || "/",
        GET : toGet(option.data) || ""
    }
    window.location.href = set.protocol + set.host + "?" + set.path + set.GET
}

var $GET = getGet( window.location.href )
var $PTC = getProtocol( window.location.href )
var $PAT = getPath( window.location.href )
var $URL = window.location.href