"use strict"
function initKeyboardEvent( type, bubbles, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode){
	return new KeyboardEvent( type, {
		view: view,
		ctrlKey: ctrlKey,
		altKey: altKey,
		shiftKey: shiftKey,
		metaKey: metaKey,
		key: keyCode,
		code: charCode})
}
if( typeof(module)!== "undefined"&& !!module.exports){
	module.exports= initKeyboardEvent
}
