<?/**
   * Link UI Scripts & Styles
   */
  function UI_LinkAssets(){
    $BUNDLE = get_template_directory_uri() . "/dist/bglj";

    // wp_enqueue_style('UI',"$BUNDLE.css",[],false,true); // because css.extract = false in vue.config.js
    wp_enqueue_script('UI',"$BUNDLE.umd.js",[],false,true);
    
    wp_localize_script('UI','WP_API_Settings',[
      'endpoint' => esc_url_raw(rest_url()),
      'nonce' => wp_create_nonce('wp_rest')
      ]);
    }
  add_action( 'wp_enqueue_scripts', 'UI_LinkAssets' );
  ?>