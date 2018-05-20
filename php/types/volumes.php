<?if( !function_exists('volumes_custom_post_type') ){ # register post type

	function volumes_custom_post_type(){
		$labels = array(
			'name'                  => _x( 'Volumes Library', 'Post Type General Name', 'volume_cpt' ),
			'singular_name'         => _x( 'Volume', 'Post Type Singular Name', 'volume_cpt' ),
			'menu_name'             => __( 'Volumes', 'volume_cpt' ),
			'name_admin_bar'        => __( 'Volumes', 'volume_cpt' ),
			'archives'              => __( 'Volume Archives', 'volume_cpt' ),
			'attributes'            => __( 'Volume Attributes', 'volume_cpt' ),
			'parent_item_colon'     => __( 'Root Volume:', 'volume_cpt' ),
			'all_items'             => __( 'All Volumes', 'volume_cpt' ),
			'add_new_item'          => __( 'Add a new volume...', 'volume_cpt' ),
			'add_new'               => __( 'New Volume', 'volume_cpt' ),
			'new_item'              => __( 'New', 'volume_cpt' ),
			'edit_item'             => __( 'Edit', 'volume_cpt' ),
			'update_item'           => __( 'Update', 'volume_cpt' ),
			'view_item'             => __( 'View', 'volume_cpt' ),
			'view_items'            => __( 'View All', 'volume_cpt' ),
			'search_items'          => __( 'Search', 'volume_cpt' ),
			'not_found'             => __( 'No volumes', 'volume_cpt' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'volume_cpt' ),
			'featured_image'        => __( 'Featured Image', 'volume_cpt' ),
			'set_featured_image'    => __( 'Set featured image', 'volume_cpt' ),
			'remove_featured_image' => __( 'Remove featured image', 'volume_cpt' ),
			'use_featured_image'    => __( 'Use as featured image', 'volume_cpt' ),
			'insert_into_item'      => __( 'Insert into volume', 'volume_cpt' ),
			'uploaded_to_this_item' => __( 'Uploaded to this volume', 'volume_cpt' ),
			'items_list'            => __( 'Volume calendar', 'volume_cpt' ),
			'items_list_navigation' => __( 'Volume navigation', 'volume_cpt' ),
			'filter_items_list'     => __( 'Filter volumes', 'volume_cpt' ),
		);
		$args = array(
			'public'                => true,
			'label'                 => __( 'Volume', 'volume_cpt' ),
			'description'           => __( 'Create and manage volumes', 'volume_cpt' ),
			'labels'                => $labels,
			'supports'              => array( 'title', 'thumbnail', 'custom-fields', 'post-formats' ),
			'hierarchical'          => false,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'menu_position'         => 5,
			'menu_icon'             => 'dashicons-archive',
			'show_in_admin_bar'     => true,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => true,
			'exclude_from_search'   => false,
			'publicly_queryable'    => true,
			'capability_type'       => 'page',
			'show_in_rest'          => true,
			'rewrite'               =>[ 'with_front'=>false ],
		);
		register_post_type( 'volumes', $args );
	}

	add_action( 'init', 'volumes_custom_post_type', 0 );
	
}?>