import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'create-block/text-box', {
	icon: {
		src: 'text-page',
		background: '#f03',
		foreground: '#fff',
	},
	edit: Edit,
	save,
} );
