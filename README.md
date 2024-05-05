## Using front-end Js to obtain web get req
As u see! This is a mini js file to catch the GET req <br>
It is very easy to use, even beginners can easily learn it 

QuickStart!!!
```js
//website On http://localhost:8080/T.html?text=helloWorld
$URL = "http://localhost:8080/T.html?text=helloWorld"
$GET = { text : "helloWorld" }
$PAT = "T.html"
$PAC = "http"
```

In fact
```js
var $GET = getGet( window.location.href )
var $PTC = getProtocol( window.location.href )
var $PAT = getPath( window.location.href )
var $URL = window.location.href
```

This is func getGet, getProtocol, getPath
```js
function getGet( href ){
    let valStrArrs = href.split( "?" )[1].split( "&" )
    let ret = {}
    for( valStr of valStrArrs ){
        eval( `ret.${valStr.split("=")[0]} = \`${valStr.split("=")[1]}\`` )
    }
    return ret
}
//how easy it
function getProtocol( href ){
    return href.split( "://" )[0]
}
function getPath( href ){
    return ( function(){
      let pathNow = href.split( "/" ).slice( 3 ).join( "/" ).split( "?" )[0]
      if( pathNow.indexOf( "." ) == -1 ){
        pathNow += "index.html"
      }
      return pathNow
    })() || "/index.html"
}
```

If you ask me what's the use of this, I will answer that you can pass variables across scopes and files<br>
Not just these on getGet.js

#### we have some func to set the Get too
A func for converting formats
```js
function toGet( data ){
    let ret = ""
    for( let tdt of Object.keys( data) ){
        ret += tdt + "=" + data[tdt] + "&"
    }
    return ret.slice( 0, -1 )
}
```
Next are some funcs for setting URLs
```js
function setGet( data ){
    let dt = toGet( data )
    window.location.href = window.location.href.split( "?" )[0] + "?" + dt
}
//set Get and reload this page
function setPath( path ){
    window.location.href = window.location.href.replace( $PTC, path )
}
//jump to path
function setURL( option ){
    let set = {
        host : option.host,
        protocol : option.protocol || "",
        path : option.path || "/",
        GET : toGet(option.data) || ""
    }
    window.location.href = set.protocol + set.host + "?" + set.path + set.GET
}
//change URL
```
Easy? I think really easy it
I only took half an hour to make it )
***
