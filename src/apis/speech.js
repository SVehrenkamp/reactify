//Stores
import store from '../stores';


module.exports = {
  /*  Speech Recognition Stuff Here  */
  initWebSpeech() {
    console.log('Initing web speech...');
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Voice Search not supported');
    } else {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;


      this.recognition.onstart = function() {
        //Dispatch Appropriate Actions
        console.log('recording....');
      }
      this.recognition.onresult = function(event) {
        //Dispatch Appropriate Actions
        console.log('Results are in....');

        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
            console.log('FINAL', interim_transcript);

            // store.dispatch({
            //   type: 'VOICE_SEARCH',
            //   data: 'shirts'
            // });

          } else {
            interim_transcript += event.results[i][0].transcript;
            console.log('INTERIM', interim_transcript);
          }
        }
      }
      this.recognition.onerror = function(event) {
        //Dispatch Appropriate Actions
        console.log('Recording Error....', event);
      }
      this.recognition.onend = function() {
        //Dispatch Appropriate Actions
        store.dispatch({
          type: 'VOICE_SEARCH_QUERY',
          data: 'chairs'
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
