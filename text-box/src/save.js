import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { text, alignment, backgroundColor, textColor } = attributes;
	return (
		<RichText.Content
			{ ...useBlockProps.save( {
				className: `text-box-align-${ alignment }`, // add this as a param to avoid override useBlockProps css classes
				style: {
					backgroundColor,
					color: textColor,
				},
			} ) }
			tagName="h4"
			value={ text }
		/>
	);
}
