"use strict"
function initKeyboardEvent( type, bubbles, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode){
	return new KeyboardEvent( type, {
		bubbles,
		cancelable,
		view,
		ctrlKey,
		altKey,
		shiftKey,
		metaKey,
		keyCode,
		charCode
	});
}
if( typeof(module)!== "undefined"&& !!module.exports){
	module.exports= initKeyboardEvent
}
