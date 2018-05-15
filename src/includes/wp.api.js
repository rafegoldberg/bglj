import WpRest from 'wpapi'

const
API = WpRest.discover('//192.168.64.2/BGLJ/'),
cache = []

// window alias
if( window ) window.API = API

// wpapi auth
if( typeof WP_API_Settings == 'object' )
  API.then( site=> site.auth({
    nonce: WP_API_Settings.nonce
  }) )
  
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