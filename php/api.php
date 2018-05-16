<?function API_EnableCrossOrigin(){
    if (!did_action('rest_api_init') && $_SERVER['REQUEST_METHOD'] == 'HEAD') {
      header('Access-Control-Allow-Origin: *');
      header('Access-Control-Expose-Headers: Link');
      header('Access-Control-Allow-Methods: HEAD');
      }
    };
  add_action( 'send_headers', 'API_EnableCrossOrigin' )
  ?>

<?function API_EnableMetaQuery($valid_vars){
    $valid_vars = array_merge( $valid_vars, array('meta_key','meta_value','meta_query') );
    return $valid_vars;
  }
  add_filter( 'rest_query_vars', 'API_EnableMetaQuery' );
  ?>

<?#=link ui script & styles=>
  #
  // function WpUi(){
  //   $BUNDLE = get_template_directory_uri() . "/dist/bglj";

  //   // wp_enqueue_style('WpUi',"$BUNDLE.css",[],false,true); // because css.extract = false in vue.config.js
  //   wp_enqueue_script('WpUi',"$BUNDLE.umd.js",[],false,true);
    
  //   wp_localize_script('WpUi','WP_API_Settings',[
  //     'endpoint' => esc_url_raw(rest_url()),
  //     'nonce' => wp_create_nonce('wp_rest')
  //     ]);
  //   }
  // add_action( 'wp_enqueue_scripts', 'WpUi' );
  ?>