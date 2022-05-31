// var registerBlockType = wp.blocks.registerBlockType;
import { registerBlockType } from '@wordpress/blocks';
import Save from "./save";
import Edit from "./edit";
import "./style.scss";
import edit from './edit';

registerBlockType( 'blocks-course/firstblock', {
	edit: Edit,
	save: Save,
});
