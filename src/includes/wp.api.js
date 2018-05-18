import WpRest from 'wpapi'


const
URI = typeof WP_API_Settings == 'object'
  ? WP_API_Settings.endpoint.split('wp-json/')[0]
  : '//192.168.64.2/clients/BGLJ/',
API = WpRest.discover(URI)


/**
 * API Authorization
 */
if( typeof WP_API_Settings=='object' )
  API.then(WP=> WP.auth({
    nonce: WP_API_Settings.nonce
  }))
/** else if( process.env.NODE_ENV=='development' )
    API.then(WP=> WP.auth({
      username: "amyew",
      password: "",
    }))
 */
// TODO fix WP auth breakage in headless environments


/**
 * Cache Transport
 */
let cache = []

API.then(WP=> WP.transport({
  // Overwrite the GET behavior to inject a caching layer
    get: function (wpreq, cb) {
      var result = cache[wpreq]
      // If a cache hit is found, return it via the same callback/promise
      // signature as the default transport method
      if (result) {
        if (cb && typeof cb === 'function')
          cb(null, result)
        return Promise.resolve(result)
      }
      // Delegate to default transport if no cached data was found
      return WpRest.transport.get(wpreq, cb).then(function (result) {
        cache[wpreq] = result
        return result
      })
    }
  })
)


/**
 * Export & Alias
 */
export default API

if (window)
  API.then(wp => (window.API = wp))
