import WpRest from 'wpapi'

const
URI = typeof WP_API_Settings == 'object' ? WP_API_Settings.endpoint.split('wp-json/')[0] : '//192.168.64.2/BGLJ/',
API = WpRest.discover(URI),
cache = []

// wpapi auth
if( typeof WP_API_Settings == 'object' )
  API.then(site=> site.auth({
    nonce: WP_API_Settings.nonce
  }))
  
// wpapi cache
API.then( site=> site.transport({
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

export default API

// window alias
if (window) API.then(wp => (window.API = wp))
