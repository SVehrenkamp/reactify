
const initialState = {};

module.exports = (state = initialState, action) => {

  switch (action.type) {
    case 'VOICE_SEARCH': {
      let nextState = Object.assign({}, state);
      nextState.isVoiceActive = !state.isVoiceActive || false;
      nextState.searchTerm = undefined;
      return nextState;
    }break;
    case 'VOICE_SEARCH_QUERY': {
      console.log('VOICE_SEARCH_QUERY CAUGHT BY REDUCER');
      let nextState = Object.assign({}, state);
      if (action.data && action.data !== '') {
        nextState.searchTerm = action.data;
      }
      return nextState;
    }break;
    default: {
      return state;
    }
  }
}
