const Duplex = require('stream').Duplex;

// https://nodejs.org/api/stream.html#stream_implementing_a_duplex_stream
class Stream extends Duplex {
	constructor(){
		super();
	}

 	write(chunk, encoding) {
		if (Buffer.isBuffer(chunk)){
      chunk = chunk.toString();
   		console.log(chunk);
		}
  }
}

module.exports = Stream;
