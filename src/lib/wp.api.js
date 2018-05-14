
import WPAPI from 'wpapi'

let API = WPAPI.discover('//192.168.64.2/BGLJ/')
export default API

if( window ) API.then( WP=> window.API = WP )