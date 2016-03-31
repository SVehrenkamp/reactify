//Stores
import store from '../stores';


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

            if (this.final_transcript.split(' ').length  > 1) {
              this.search_term = this.final_transcript.split(' ')[1];
            } else {
              this.search_term = this.final_transcript;
            }
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
        var searchTerm = this.search_term;
        store.dispatch({
          type: 'VOICE_SEARCH_QUERY',
          data: searchTerm
        });
      }
    }
  },
  startRecording() {
    this.recognition.start();

  },
  stopRecording() {
    this.recognition.stop();
  }
};
