/**
 * Module dependencies
 */

var Youtube = require('youtube');
var getId = require('youtube-id');
var events = require('events');
var empty = require('empty');

/**
 * Expose YouTubeCute
 */

module.exports = YouTubeCute;
  
/**
 * YouTubeCute constructor
 * @param {String} src url
 * @param {Element} target element
 */

function YouTubeCute(src, target, options){
  if (!(this instanceof YouTubeCute)) return new YouTubeCute(src);
  this.el = document.createElement('div');
  this.el.className = 'Youtube-cute';
  this.target = target;
  this.w = this.target.clientWidth;
  this.h = this.target.clientHeight;
  this.src = src;
  this.inDOM = false;
  this.options = options || {};
  this.showPlaceholder();
}

/**
 * Show Placeholder
 * @return {YouTubeCute} 
 */

YouTubeCute.prototype.showPlaceholder = function(){
  this.events = events(this.el, this);
  this.events.bind('click', 'playVideo');
  var id = getId(this.src);
  var url = 'http://img.youtube.com/vi/'+ id +'/hqdefault.jpg'
  this.el.style['background-image'] = 'url("'+ url +'")';
  this.target.appendChild(this.el);
  return this;
};

/**
 * Show Video
 * @return {YouTubeCute} 
 */

YouTubeCute.prototype.playVideo = function(){
  this.events.unbind();
  empty(this.el);
  this.el.classList.add('playing');
  this.vid = new Youtube(this.src, this.el, {
    width: this.w,
    height: this.h
  });
  this.vid.play();
  return this;
};