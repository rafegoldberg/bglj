<?

/**
 * Custom Post Type Registration
 */
include "php/wp-types/events.php";
include "php/wp-types/volumes.php";


/**
 * ACF Options Page Registration
 */
include "php/acf-options/sidebar.php";


/**
 * WP Rest API Configuration
 */
include "php/api.php";


/**
 * Link UI Scripts & Styles
 */
function UI_LinkAssets(){
  $BUNDLE = get_template_directory_uri() . "/dist/bglj";

  wp_enqueue_style('WpUi',"$BUNDLE.css",[],false,true); // because css.extract = false in vue.config.js
  wp_enqueue_script('WpUi',"$BUNDLE.umd.js",[],false,true);
  
  wp_localize_script('WpUi','WP_API_Settings',[
    'endpoint' => esc_url_raw(rest_url()),
    'nonce' => wp_create_nonce('wp_rest')
    ]);
  }
add_action( 'wp_enqueue_scripts', 'UI_LinkAssets' );
?>