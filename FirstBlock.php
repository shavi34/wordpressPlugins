<?php

/**
 * Plugin Name: First Block
 * Plugin URI: https://shavinda.com/
 * Description: My first block
 * Author: Shavinda silva
 * Author URI: https://shavinda.com/
 */

function blocks_course_firstblock_init() {
    register_block_type_from_metadata( __DIR__ );
}

add_action( "init", "blocks_course_firstblock_init" );