<?php

if( ! function_exists( 'enque_script_for_' ) ) {
	function enque_script_for_() {
		if ( has_term( 'targeted_tag_name', 'product_tag' ) ) {
			wp_enqueue_style( 'specific-styles', trailingslashit( get_stylesheet_directory_uri() ) . 'specific-styles.css', array(), microtime(), all ); 
			// you have to create a file with the name 'specific-styles.css' in the root directory of the child theme
		}
	}
}

add_action( 'wp_enqueue_scripts', 'enque_script_for_', 11 );