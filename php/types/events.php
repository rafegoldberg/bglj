<?if(! function_exists('event_custom_post_type') ){ # register post type

	function event_custom_post_type(){
		$labels = array(
			'name'                  => _x( 'Events', 'Post Type General Name', 'event_cpt' ),
			'singular_name'         => _x( 'Event', 'Post Type Singular Name', 'event_cpt' ),
			'menu_name'             => __( 'Events', 'event_cpt' ),
			'name_admin_bar'        => __( 'Events', 'event_cpt' ),
			'archives'              => __( 'Event Archives', 'event_cpt' ),
			'attributes'            => __( 'Event Attributes', 'event_cpt' ),
			'parent_item_colon'     => __( 'Root Event:', 'event_cpt' ),
			'all_items'             => __( 'All Events', 'event_cpt' ),
			'add_new_item'          => __( 'Add an Event', 'event_cpt' ),
			'add_new'               => __( 'Schedule new Event', 'event_cpt' ),
			'new_item'              => __( 'New', 'event_cpt' ),
			'edit_item'             => __( 'Edit your event.', 'event_cpt' ),
			'update_item'           => __( 'Update', 'event_cpt' ),
			'view_item'             => __( 'View', 'event_cpt' ),
			'view_items'            => __( 'View All', 'event_cpt' ),
			'search_items'          => __( 'Search', 'event_cpt' ),
			'not_found'             => __( 'No events', 'event_cpt' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'event_cpt' ),
			'featured_image'        => __( 'Featured Image', 'event_cpt' ),
			'set_featured_image'    => __( 'Set featured image', 'event_cpt' ),
			'remove_featured_image' => __( 'Remove featured image', 'event_cpt' ),
			'use_featured_image'    => __( 'Use as featured image', 'event_cpt' ),
			'insert_into_item'      => __( 'Insert into event', 'event_cpt' ),
			'uploaded_to_this_item' => __( 'Uploaded to this event', 'event_cpt' ),
			'items_list'            => __( 'Event calendar', 'event_cpt' ),
			'items_list_navigation' => __( 'Event navigation', 'event_cpt' ),
			'filter_items_list'     => __( 'Filter events', 'event_cpt' ),
		);
		$args = array(
			'public'                => true,
			'label'                 => __( 'Event', 'event_cpt' ),
			'description'           => __( 'Create and manage events', 'event_cpt' ),
			'labels'                => $labels,
			'supports'              => array( 'title', 'thumbnail', 'custom-fields', 'excerpt', 'revisions' ),
			'hierarchical'          => false,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'menu_position'         => 5,
			'menu_icon'             => 'dashicons-calendar-alt',
			'show_in_admin_bar'     => true,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => true,
			'exclude_from_search'   => false,
			'publicly_queryable'    => true,
			'capability_type'       => 'page',
			'rest_base'             => 'events',
			'show_in_rest'          => true,
			'rewrite'               =>[ 'with_front'=>false ],
		);
		register_post_type( 'events', $args );
	}

	add_action( 'init', 'event_custom_post_type', 0 );
	
}?>