'use strict';

import ChessConstant from './ChessConstant.jsx'
import AppDispatcher from './Dispatcher.jsx'
var {EventEmitter} = require('events');
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var _initialState={x:0,y:0,isDisplayed:false}

var MaskElementStore = assign({}, EventEmitter.prototype, {

  getMaskState:()=>{
  	
  	return _initialState;
  },

  emitChange: function() {
  this.emit(CHANGE_EVENT);
  },
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});
// Register callback to handle all updates
MaskElementStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.actionType) {
  	
 	case ChessConstant.ELEMENT_CLICK:
 	_initialState.isDisplayed=true;
 	_initialState.x=action.x;
 	_initialState.y=action.y;
 	MaskElementStore.emitChange();
    break;
    case ChessConstant.CHESSBOX_MOVE:
    _initialState.isDisplayed=false;
    MaskElementStore.emitChange();
     
    break;


    default:
      // no op
  }
});



export default MaskElementStore;