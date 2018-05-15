import WpRest from 'wpapi'
const API = WpRest.discover('//192.168.64.2/BGLJ/')

if( window ){
  window.WP  = WpRest
  window.API = API
  }
if( typeof WP_API_Settings == 'object' )
  API.then( site=> site.auth({
    nonce: WP_API_Settings.nonce
  }) )

export default API