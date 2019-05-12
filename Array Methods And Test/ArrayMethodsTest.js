describe('test method Pop', function () {

    const testedData = [
        {
            'expected': 2
        },
        {
            'expected': 22
        }
    ];

    let arrlist = null;

    before(function () {
        arrlist = new ArrayList();
    });

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            const act = arrlist.pop();
            assert.equal(act, testSuit['expected']);
        });
    }

});

describe('test method Push', function () {

    let arrList = null;

    before(function () {
        arrList = new ArrayList();
    });

    const testedData = [
        {
            'a': 15,
            'expected': [7, 13, 5, 16, 22, 2, 15]
        },
        {
            'a': 22,
            'expected': [7, 13, 5, 16, 22, 2, 15, 22]
        }
    ];


    for (let testSuit of testedData) {
        it(`test valu1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = arrList.push(testSuit['a']);
            assert.deepEqual(act, testSuit['expected']);
        });
    }
});

describe('test method Shift', function () {

    let arrList = null;

    before(function () {
        arrList = new ArrayList();
    });

    const testedData = [
        {
            'expected': 7
        },
        {
            'expected': 13
        }
    ];


    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            const act = arrList.shift();
            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test method unshift', function () {

    let arrList = null;

    before(function () {
        arrList = new ArrayList();
    });

    const testedData = [
        {
            'a': 6,
            'expected': [6, 7, 13, 5, 16, 22, 2]
        },
        {
            'a': 9,
            'expected': [9, 6, 7, 13, 5, 16, 22, 2]
        }
    ];

    for (let testSuit of testedData) {
        it(`test value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = arrList.unshift(testSuit['a']);
            assert.deepEqual(act, testSuit['expected']);
        });
    }
});

describe('test method Sort', function () {

    let arrList = null;

    before(function () {
        arrList = new ArrayList();
    });

    const testedData = [
        {
            'expected': [2, 5, 7, 13, 16, 22]
        }
    ];

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            const act = arrList.sort();
            assert.deepEqual(act, testSuit['expected']);
        });
    }
});

describe('test method Splice', function () {

    let arrList = null;

    before(function () {
        arrList = new ArrayList();
    });

    const testedData = [
        {
            'a': 2,
            'b': 3,
            'c': [8, 9],
            'expected': [7, 13, 8, 9, 2]
        },
        {
            'a': 1,
            'b': 2,
            'c': [11, 12, 15],
            'expected': [7, 11, 12, 15, 9, 2]
        }
    ];

    for (let testSuit of testedData) {
        it(`test value1 ${testSuit['a']} value2 ${testSuit['b']} expected ${testSuit['expected']}`, function () {
            const act = arrList.splice(testSuit['a'], testSuit['b'], ...testSuit['c']);
            assert.deepEqual(act, testSuit['expected']);
        });
    }
});

describe('test method Remove', function () {

    let arrList = null;

    before(function () {
        arrList = new ArrayList();
    });

    const testedData = [
        {
            'a': 4,
            'expected': [7, 13, 5, 16, 2]
        }
    ];

    for (let testSuit of testedData) {
        it(`test value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = arrList.remove(testSuit['a']);
            assert.deepEqual(act, testSuit['expected']);
        });
    }
});

describe('test method Size', function () {

    let arrList = null;

    before(function () {
        arrList = new ArrayList();
    });

    const testedData = [
        {
            'expected': 6
        }
    ];

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            const act = arrList.size();
            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test method toString', function () {

    let arrList = null;

    before(function () {
        arrList = new ArrayList();
    });

    const testedData = [
        {
            'expected': '713516222'
        }
    ];

    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            const act = arrList.doString();
            assert.equal(act, testSuit['expected']);
        });
    }
});