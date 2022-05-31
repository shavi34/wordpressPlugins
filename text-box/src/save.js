import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { text, alignment } = attributes;
	return (
		<RichText.Content
			{ ...useBlockProps.save( {
				className: `text-box-align-${ alignment }`, // add this as a param to avoid override useBlockProps css classes
			} ) }
			tagName="h4"
			value={ text }
		/>
	);
}
