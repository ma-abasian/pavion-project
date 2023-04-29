/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Flex\'">' + entity + '</span>' + html;
	}
	var icons = {
		'flex-left-arrow': '&#xe910;',
		'flex-right-arrow': '&#xe911;',
		'flex-call': '&#xe90f;',
		'flex-instagram': '&#xe90b;',
		'flex-linkedin': '&#xe90c;',
		'flex-twitter': '&#xe90d;',
		'flex-whatsapp': '&#xe90e;',
		'flex-arrow': '&#xe900;',
		'flex-card': '&#xe901;',
		'flex-icons8-key': '&#xe902;',
		'flex-play': '&#xe903;',
		'flex-profile': '&#xe904;',
		'flex-profile-blue': '&#xe905;',
		'flex-search': '&#xe906;',
		'flex-select-arrow': '&#xe907;',
		'flex-time': '&#xe908;',
		'flex-time-gray': '&#xe909;',
		'flex-user': '&#xe90a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/flex-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
