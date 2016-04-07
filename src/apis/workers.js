//actions
import actions from '../actions/actions';
const { api: {findTeamMember} } = actions;

//Stores
import store from '../stores';

module.exports = {
  getTeamMember(searchTerm) {
    let tms = [
      {name:"Tom", title: "LOD", img: require('images/employee1.jpg')},
      {name:"Sarah", title: "STL", img: require('images/employee2.jpg')},
      {name:"Jen", title: "Logistics", img: require('images/employee3.jpg')},
      {name:"Nick", title: "Electronics", img: require('images/employee4.jpg')},
    ];
    const randomTM = Math.floor(Math.random() * 4);
    store.dispatch(findTeamMember({teamMemberNeeded: false, teamMember: tms[randomTM]}));

  }

};
