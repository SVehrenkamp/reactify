//Stores
import store from '../stores';
import Utils from 'utils/speech';


module.exports = {
  /*  Speech Recognition Stuff Here  */

  interim_transcript: '',
  final_transcript: '',
  search_term: '',
  initWebSpeech() {
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Voice Search not supported');
    } else {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;


      this.recognition.onstart = () => {
        //Reset values
        this.interim_transcript = '';
        this.final_transcript = '';
        this.search_term = '';

      }
      this.recognition.onresult = (event) => {
        //Dispatch Appropriate Actions

        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            this.final_transcript += event.results[i][0].transcript;

            console.log(this.final_transcript);

          } else {
            this.interim_transcript += event.results[i][0].transcript;
          }
        }
      }
      this.recognition.onerror = (event) => {
        //Dispatch Appropriate Actions
      }
      this.recognition.onend = () => {
        //Dispatch Appropriate Actions
        //this.parseSpeech(this.final_transcript);
        this.parseSpeech("where is the chocolate milk");
      }
    }
  },
  startRecording() {
    this.recognition.start();

  },
  stopRecording() {
    this.recognition.stop();
  },
  parseSpeech(phrase) {
    console.log('PARSING SPEECH', phrase);
    switch(true) {
      //Looking for a Team Member
      case (phrase.indexOf('team member') !== -1) :
      case (phrase.indexOf('worker')      !== -1) :
      case (phrase.indexOf('assistant')   !== -1) :
      case (phrase.indexOf('help')        !== -1) :
      case (phrase.indexOf('manager')     !== -1) : {
        this.findAvailableTeamMember();
      }break;
      //Looking for a Product Location
      case (phrase.indexOf('where') !== -1)     : {
        this.findProductLocations(phrase);
      }break;
      default: {
      //Looking for a Product
        this.fetchProducts(phrase);
      }
    }
  },
  findAvailableTeamMember() {
    console.log('Locating the nearest team member...');
  },
  findProductLocations(phrase) {
    let searchTerm = Utils.discard(phrase);
    searchTerm = searchTerm.join(' ');
    console.log('Finding all '+ searchTerm +' locations...');
  },
  fetchProducts(phrase) {
    let searchTerm = Utils.discard(phrase);
    searchTerm = encodeURIComponent(searchTerm.join(' '));
    store.dispatch({
      type: 'VOICE_SEARCH_QUERY',
      data: searchTerm
    });
  }

};
