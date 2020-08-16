
import Timer from 'timerpromise';

// ( new Timer(5) ).start
// .then(  ()=> console.log('1) 5 sec') || (new Timer(2)).start )
// .then(  ()=> console.log('2) 2 sec'))
// ;

(async () => {
    console.time('5s');
    console.time('3s');
    await (new Timer(3)).start;
    console.log('Прошло 3 секунды');
    console.timeEnd('3s');
    console.time('2s');
    await (new Timer(2)).start;
    console.log('Прошло 2 секунды');
    console.timeEnd('2s');
    console.timeEnd('5s');
})();