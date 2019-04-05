import React from 'react';
import { ReactMic } from 'react-mic';

export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      blob:null
    }
  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop= async(recordedBlob)=> {
    await console.log('recordedBlob is: ', recordedBlob);
    await this.setState({
      blob:recordedBlob.blobURL
    })
  }

  resetBlob=()=>{
    this.setState({
      blob:null
    })
  }

  render() {
    console.log(this.state.blob)
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" /><br/>
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
        <button onClick={this.resetBlob}>delete</button><br/>
        Your recording: <br/>
        <audio ref="audio_tag" src={this.state.blob} controls /><br/>

        Reed's recording!<br/>
        <audio ref='audio_tag' src={'blob:http://localhost:3000/2ef4b587-0819-4c15-b6cb-85a08056a9b3'} controls/>

      </div>
    );
  }
}

export default Test;
