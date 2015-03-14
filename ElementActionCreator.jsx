import ChessConstant from './ChessConstant.jsx'
import AppDispatcher from './Dispatcher.jsx'

var ElementAction = {
  updateElementAction: function( args ) {
  	AppDispatcher.dispatch({
      actionType: ChessConstant.ELEMENT_CLICK,
      identifier: args.identifier,
      x: args.x,
      y: args.y
    });
  }
}

export default ElementAction;