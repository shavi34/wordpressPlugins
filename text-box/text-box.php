<?php
function create_block_btext_box_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_btext_box_block_init' );
