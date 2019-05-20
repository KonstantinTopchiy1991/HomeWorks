describe('test Closure', function () {

    let clouser = null;

    before(function () {
        clouser = new Closure();
    });

    const testedData = [
        {
            'expected': 'a = 20, b = 10'
        },
        {
            'expected': 'a = 20, b = 11'
        },
        {
            'expected': 'a = 20, b = 12'
        }
    ];


    for (let testSuit of testedData) {
        it(`test expected ${testSuit['expected']}`, function () {
            const act = clouser;
            assert.equal(act(), testSuit['expected']);
        });
    }

});


describe('test Recursion', function () {

    const testedData = [
        {
            'a': 5,
            'expected': 120
        },
        {
            'a': 8,
            'expected': 40320
        }
    ];


    for (let testSuit of testedData) {
        it(`test value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = factorial(testSuit['a']);
            assert.equal(act, testSuit['expected']);
        });
    }

});

// describe('test BinarySearch', function () {
//
//         it(`value found in list`, function () {
//             assert.equal(7, binarySearch([5, 6, 7, 8, 9, 10], 7));
//         })
//
//     it("error condition",()=>{
//         assert.equal(false,binarySearch([1,2,3,4,5,6,7],23))
//     })
// });

describe('test BinarySearch', function () {

    it(`value found in list`, function () {
        assert.equal(true, BinarySearch([5, 6, 7, 8, 9, 10], 7));
    })

    it("error condition", () => {
        assert.equal(false, BinarySearch([1, 2, 3, 4, 5, 6, 7], 12))
    })
});


describe('test FibonacciNumbers', function () {

    const testedData = [
        {
            'a': 8,
            'expected': [0, 1, 1, 2, 3, 5, 8, 13, 21]
        },
        {
            'a': 12,
            'expected': [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
        }
    ];


    for (let testSuit of testedData) {
        it(`test value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = fibonacci(testSuit['a']);
            assert.deepEqual(act, testSuit['expected']);
        });
    }

});


describe('test BinarySearchTree', function () {

        let tree;

    it(`push new node to the tree`, function () {
        tree = new BinarySearchTree();

        tree.push(5);
        tree.push(3);
        tree.push(2);
        tree.push(4);

        assert.equal(3, tree.root.left.data);
    });

    it('get the data from the tree', function () {
        tree = new BinarySearchTree();

        tree.push(8);
        tree.push(5);
        tree.push(11);
        tree.push(6);
        assert.equal(5, tree.getData(5));
        assert.equal(false, tree.getData(10));
    });

    it('min node in the tree', function () {
        tree = new BinarySearchTree();

        tree.push(8);
        tree.push(5);
        tree.push(11);
        tree.push(6);
        tree.push(10);
        tree.push(7);
        assert.equal(5, tree.minElem());
    });

    it('max node in the tree', function () {
        tree = new BinarySearchTree();

        tree.push(8);
        tree.push(5);
        tree.push(11);
        tree.push(6);
        tree.push(10);
        tree.push(7);
        assert.equal(11, tree.maxElem());
    });
});
