describe('calculate testsSum', () => {

    it('should test value 1 and 2', function () {
        const act = calculateSum(1, 2);
        const exp = 3;

        assert.equal(act, exp);
    });

    const mock1 = [0, 5, 10, 100, 1000, 10500];
    const mock2 = [0, 7, 80, 90, 6000, 10500];

    for (let i = 0; i <= mock1.length - 1; i++){

        const value1 = mock1[i];
        const value2 = mock2[i];

        it(`test value1 ${value1} value2 ${value2}`, function () {
            const act = calculateSum(value1, value2);
            const exp = value1 + value2;

            assert.equal(act, exp);
        });
    }

    it('test value - 1 and 5', function () {
        const act = calculateSum(-1, 5);

        assert.isFalse(act);
    });
});