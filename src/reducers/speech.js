
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
      nextState.isVoiceActive = false;
      if (action.data && action.data !== '') {
        nextState.searchTerm = action.data;
      }
      return nextState;
    }break;
    case 'FIND_TEAM_MEMBER': {
      console.log('FIND_TEAM_MEMBER CAUGHT BY REDUCER');
      let nextState = Object.assign({}, state);
      nextState.teamMemberNeeded = action.data.teamMemberNeeded;
      nextState.teamMember = action.data.teamMember;

      console.log('NEXT STATE', nextState);

      return nextState;
    }break;
    default: {
      return state;
    }
  }
}
