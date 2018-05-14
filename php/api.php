<?
add_filter('allowed_http_origin', function () {
  return true;
});

add_action('send_headers', function () {
  if (!did_action('rest_api_init') && $_SERVER['REQUEST_METHOD'] == 'HEAD') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Expose-Headers: Link');
    header('Access-Control-Allow-Methods: HEAD');
  }
});

function WpUi(){
  $BUNDLE = get_template_directory_uri() . "/dist/bglj";
  wp_enqueue_style('WpUi',"$BUNDLE.css",[],false,true);
  wp_enqueue_script('WpUi',"$BUNDLE.umd.js",[],false,true);
  wp_localize_script('WpUi','WP_API_Settings',array(
    'endpoint' => esc_url_raw(rest_url()),
    'nonce' => wp_create_nonce('wp_rest')
  ));
}

add_action('wp_enqueue_scripts','WpUi');
?>