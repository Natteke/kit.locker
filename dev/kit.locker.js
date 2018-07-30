import './kit.locker.css';
/**
 * UI Kit Locker v1.0.0
 * Copyright 2017-2019 Andrey Ponomarenko
 * Licensed under  ()
 */

// ======================= MODEL ============================

if	(!document.kit) document.kit = {};
if	(!document.kit.locker) document.kit.locker = {};
window.kit = document.kit;

// == Инициализация ==

// == Опции ==

// == Методы окна ==

// == Глобальные методы ==

// == Коллбеки ==

// == Полезные параметры ==

// =Дополнительное=
// Если у вас есть fixed элементы, нужно повесить класс
//

class KitLocker {
	constructor(id) {
		this.id = id;
		this.active = false;
	}

	lock = () => {if(isScroll()) lockScroll(this)};
	unlock = () => {if(this.active) releaseScroll(this)};
}

document.kit.locker.createLocker = (params) => {
	if(document.kit.locker['instance']) return new Error('Kit Locker already exist');
	const l = new KitLocker('locker');
	document.kit.locker['instance'] = l;
	if(params) Object.assign(l,params);
	l.overlay = createOverlay('kit-locker-overlay');
	l.fixed = document.querySelectorAll('.kit-set-fixed');
	document.kit.locker.lock = l.lock;
	document.kit.locker.unlock = l.unlock;
};

function createOverlay (className) {
	document.body.insertAdjacentHTML('afterbegin','<div class="'+className+' kit-none"></div>');
	return document.querySelector('.'+className);
}

function lockScroll (obj) {
	let width = document.documentElement.offsetWidth;
	document.addEventListener('touchmove', preventDefault,{passive:false});
	document.addEventListener('gesturechange', preventDefault);
	document.addEventListener('keydown', preventKeys.bind(obj));
	document.documentElement.kitAddClass('kit-locker-document');
	obj.overlay.kitAddClass('kit-locker-overlay-scroll');
	obj.overlay.kitRemoveClass('kit-none');
	Object.keys(obj.fixed).forEach((t) => {
		obj.fixed[t].style.paddingRight = (obj.overlay.offsetWidth - width) + 'px';
	});
	obj.active = true;
}

function releaseScroll(obj) {
	document.removeEventListener('touchmove', preventDefault,{passive:false});
	document.removeEventListener('gesturechange', preventDefault);
	document.removeEventListener('keydown', preventKeys.bind(obj));

	Object.keys(obj.fixed).forEach((t) =>obj.fixed[t].style.paddingRight = '');
	document.documentElement.kitRemoveClass('kit-locker-document');
	obj.overlay.kitRemoveClass('kit-locker-overlay-scroll');
	obj.overlay.kitAddClass('kit-none');
	obj.active = false;
}

function preventDefault(e) {
	e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

function isScroll() {
	return parseInt(window.getComputedStyle(document.documentElement ,null).height) >= window.innerHeight;
}
function preventKeys (e) {
	if(this.lockKeys.indexOf(e.keyCode) >= 0) {
		preventDefault(e);
	}
}

Element.prototype.kitAddClass = function (classN) {
	if(!this.kitHasClass(classN)) this.className += " " + classN;
	return this;
};

Element.prototype.kitRemoveClass = function (classN) {
	this.kitHasClass(classN) ? this.className = this.className.replace(new RegExp('[\\s]{0,1}\\b' + classN + '\\b',"g"),"") : false;
	return this;
};

Element.prototype.kitHasClass = function (classN) {
	return this.className.indexOf(classN) >= 0;
};






