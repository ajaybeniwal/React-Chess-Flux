import ChessConstant from './ChessConstant.jsx'
import AppDispatcher from './Dispatcher.jsx'

var ChessBoxAction = {
  updateChessBoxCoordinates: function(coordinates) {
  	AppDispatcher.dispatch({
      actionType: ChessConstant.CHESSBOX_MOVE,
      coordinates:coordinates
    });
  }
}

export default ChessBoxAction;