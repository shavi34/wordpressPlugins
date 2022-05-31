// var registerBlockType = wp.blocks.registerBlockType;
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from "@wordpress/block-editor";

registerBlockType( 'blocks-course/firstblock', {
	edit: function () {
    const blockProps = useBlockProps();	
		return <p {...blockProps}>Save JSX</p>;
  },
	save: function () {
    const blockProps = useBlockProps.save();	
		return <p {...blockProps}>Sa sve JSX</p>;
	},
} );
