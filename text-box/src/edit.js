import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text, alignment, backgroundColor, textColor } = attributes;
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	const onBackgroundColorChange = ( newColor ) => {
		setAttributes( { backgroundColor: newColor } );
	};
	const onTextColorChange = ( newColor ) => {
		setAttributes( { textColor: newColor } );
	};
	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color Settings', 'text-box' ) }
					icon="admin-appearance"
					initialOpen
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: onBackgroundColorChange,
							label: __( 'Background Color', 'text-box' ),
						},
						{
							value: textColor,
							onChange: onTextColorChange,
							label: __( 'Text Color', 'text-box' ),
						},
					] }
				></PanelColorSettings>
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>

			<RichText
				{ ...useBlockProps( {
					className: `text-box-align-${ alignment }`,
					style: {
						backgroundColor,
					},
				} ) }
				onChange={ onChangeText }
				value={ text }
				placeholder={ __( 'your text', 'text-box ' ) }
				tagName="h4"
				allowedFormats={ [ 'core/bold' ] }
			/>
		</>
	);
}
