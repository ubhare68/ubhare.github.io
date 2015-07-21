// <![CDATA[
var elements_heading_font_style = '.logo, h1, h2, h3, h4, h5, h6, .menu,.social-text,.cs-title, .label_skitter p,.cs-title,.cs-prev,.cs-next,.camera_caption,.slideDiv div.title,.cp-title,.showcase-thumbnail-caption,.showcase-thumbnail-content,.caption-head,.creative_layer,.caption_green,.caption_blue,.caption_black,.caption_red,.caption_white,.caption_orange,.cr-titles h3 span',
	header_google_font='PT+Sans',     //google name of font('Trebuchet+MS')
	header_font_style='PT Sans';       //full name of font  ('Trebuchet MS')

function get_header_html_text() {
	var html_text = '<link href="http://fonts.googleapis.com/css?family='+header_google_font+'" type="text/css" rel="stylesheet">'+
	'\n<style>'+ 
	'\n'+elements_heading_font_style+' { font-family:"'+header_font_style+'", "Lato", "Trebuchet MS", Arial, "Helvetica CY", "Nimbus Sans L", sans-serif; }'+
	'\n</style>';
	
	return (html_text);
}

document.writeln(get_header_html_text());

// ]]>

