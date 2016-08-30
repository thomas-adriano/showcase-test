var getset = {
    msg: 'bla',
    get () {
        console.log('runned get!');
        return this.msg;
    },
    set (val) {
        console.log('runned set!');
        this.msg = val;
    }
}

console.log(getset.msg);

getset.msg = 'dadada';

console.log(getset.msg);