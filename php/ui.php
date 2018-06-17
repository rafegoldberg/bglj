<?/**
   * Link UI Scripts & Styles
   */
  function LinkUiAssets(){

    #=YARN BUNDLE=>
    # --target=app
    #
    // $PATH = get_template_directory_uri() . "/dist";
    // wp_enqueue_script( 'UiBundle', "$PATH/js/app.bundle.js", [], false, true );
    // wp_enqueue_script( 'UiVendor', "$PATH/js/chunk-vendors.js", [], false, true );
    // $CSS = get_template_directory()."/dist/css/app.*.css";
    // $CSS = glob($CSS)[0];
    // $CSS = pathinfo($CSS)['filename'];
    // wp_enqueue_style( 'UiStyles', "$PATH/css/$CSS.css" );
    
    #=YARN BUILD=>
    # --target=lib
    # 
    $PATH = get_template_directory_uri() . "/dist/BGLJ";
    wp_enqueue_style(  'UiStyles', "$PATH.css"  );
    wp_enqueue_script( 'UiScript', "$PATH.umd.min.js", [], false, true );
    
    wp_localize_script('UiScript','WP_API_Settings',[
      'endpoint' => esc_url_raw(rest_url()),
      'nonce' => wp_create_nonce('wp_rest')
      ]);
    }
  add_action( 'wp_enqueue_scripts', 'LinkUiAssets' );
  ?>