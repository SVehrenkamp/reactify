//Stores
import store from '../stores';


module.exports = {
  /*  Speech Recognition Stuff Here  */

  interim_transcript: '',
  final_transcript: '',
  search_term: '',
  initWebSpeech() {
    console.log('Initing web speech...');
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

        console.log('recording....');
      }
      this.recognition.onresult = (event) => {
        //Dispatch Appropriate Actions
        console.log('Results are in....');

        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            this.final_transcript += event.results[i][0].transcript;
            this.search_term = this.final_transcript.split(' ')[1];


            // store.dispatch({
            //   type: 'VOICE_SEARCH',
            //   data: 'shirts'
            // });

          } else {
            this.interim_transcript += event.results[i][0].transcript;
            console.log('INTERIM', this.interim_transcript);
          }
        }
      }
      this.recognition.onerror = (event) => {
        //Dispatch Appropriate Actions
        console.log('Recording Error....', event);
      }
      this.recognition.onend = () => {
        //Dispatch Appropriate Actions
        console.log('FINAL, DISPATCHING ACTION::', this.search_term);
        var searchTerm = this.search_term;
        store.dispatch({
          type: 'VOICE_SEARCH_QUERY',
          data: searchTerm
        });
        console.log('Recording Ended....');
      }
    }
  },
  startRecording() {
    console.log('STARTING TO RECORD>>>>>>>');
    this.recognition.start();

  },
  stopRecording() {
    console.log('<<<<<<<<<< STOP RECORDING');
    this.recognition.stop();
  },
  parseQuery(query){
    console.log('Parsing Query', query);
  }
};
