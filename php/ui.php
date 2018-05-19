<?/**
   * Link UI Scripts & Styles
   */
  function LinkUiAssets(){
    $BUNDLE = get_template_directory_uri() . "/dist/BGLJ";

    wp_enqueue_style('UiCSS',"$BUNDLE.css");
    wp_enqueue_script('UiJS',"$BUNDLE.umd.js",[],false,true);
    
    wp_localize_script('UiJS','WP_API_Settings',[
      'endpoint' => esc_url_raw(rest_url()),
      'nonce' => wp_create_nonce('wp_rest')
      ]);
    }
  add_action( 'wp_enqueue_scripts', 'LinkUiAssets' );
  ?>