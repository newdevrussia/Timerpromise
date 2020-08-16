
const Timer = require('timerpromise');

(async () => {
	console.time('one');
	console.time('all');
	await ( new Timer(3) ).start;
	console.timeEnd('one');
	console.time('two');
	await ( new Timer(2) ).start;
	console.timeEnd('two');
	console.timeEnd('all');
})();
