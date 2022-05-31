import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  // console.log(attributes);
  const { text } = attributes;
	return (
    <RichText {...useBlockProps() } 
      onChange= {(value) => setAttributes({text: value})}
      value={ text }
      placeholder={__("your text", "text-box ")}
      tagName="h4"
      allowedFormats= { ['core/bold'] }
     /> 
	);
}
