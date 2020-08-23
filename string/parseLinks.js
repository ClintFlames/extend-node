(text) => {
	text = text.toLowerCase();
	return {
		audio: text.match(/https?:\/\/[^\s]+\.(mp3|ogg|wav)/g),
		video: text.match(/https?:\/\/[^\s]+\.(mp4|ogv|webm)/g),
	image: text.match(/https?:\/\/[^\s]+\.(jpeg|gif|png|apng|svg|bmp)/g)
	};
};
