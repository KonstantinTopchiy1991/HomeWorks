function ArrayList() {

    // MyList.call(this);
    //
     this.items = [7, 13, 5, 16, 22, 2];
    //
    // this.pop = function () {
    //     let lastItem = this.items[this.items.length - 1];
    //
    //     let cutItems = [];
    //
    //     for (let i = 0; i < this.items.length - 1; i++) {
    //         cutItems[i] = this.items[i];
    //     }
    //     this.items = cutItems;
    //     return lastItem;
    // };
    //
    // this.push = function (a) {
    //     this.items[this.items.length] = a;
    //     return this.items;
    // };
    //
    // this.shift = function () {
    //     let firstItem = this.items[0];
    //     let cutItem = [];
    //     for (let i = 1; i < this.items.length - 1; i++) {
    //         cutItem[i - 1] = this.items[i];
    //     }
    //     this.items = cutItem;
    //     return firstItem;
    // };
    //
    // this.unshift = function (a) {
    //     for (let i = this.items.length; i > 0; i--) {
    //         this.items[i] = this.items[i - 1];
    //     }
    //     this.items[0] = a;
    //     return this.items;
    // };
    //
    // this.sort = function () {
    //     for (let i = 0; i < this.items.length; i++) {
    //         for (let j = 0; j < this.items.length - 1; j++) {
    //             if (this.items[j] > this.items[j + 1]) {
    //                 let temp = this.items[j];
    //                 this.items[j] = this.items[j + 1];
    //                 this.items[j + 1] = temp;
    //             }
    //         }
    //     }
    //     return (this.items);
    // };
    //
    // this.splice = function (index, value, ...valuesForInserting) {
    //     let arrayBeforeRemoving = [];
    //     for (let i = 0; i < index; i++) {
    //         arrayBeforeRemoving[i] = this.items[i];
    //     }
    //     let arrayAfterRemoving = [];
    //     let k = 0;
    //     if (this.items[index + value]) {
    //         for (let i = index + value; i < this.items.length; i++) {
    //             arrayAfterRemoving[k] = this.items[i];
    //             k++;
    //         }
    //     }
    //     this.items = [...arrayBeforeRemoving, ...valuesForInserting, ...arrayAfterRemoving];
    //
    //     return this.items;
    // };
    //
    // this.remove = function (index) {
    //     for(let i = index; i < this.items.length - 1; i++){
    //         this.items[i]=this.items[i+1];
    //     }
    //     delete this.items[this.items.length - 1];
    //     return this.items;
    // };
    //
    // this.size = function () {
    //     let size = 0;
    //     this.items.forEach(function () {
    //         size++;
    //     })
    //     return size;
    // };
    //
    // this.doString = function () {
    //     let value = '';
    //     for(let i = 0; i < this.items.length; i++){
    //         value = value + String(this.items[i]);
    //     }
    //     return value;
    // };
    //
    // this.newMap = function (a) {
    //     let newArray = [];
    //
    //     for (let i = 0; i < this.items.length; i++){
    //         newArray[i] = this.items[i]*a;
    //     }
    //     this.items = newArray;
    //     return this.items;
    // }
}
    MyList.call(this);
    ArrayList.prototype = Object.create(MyList.prototype);
    ArrayList.prototype.constructor = ArrayList;

    ArrayList.prototype.pop = function () {
        let lastItem = this.items[this.items.length - 1];

        let cutItems = [];

        for (let i = 0; i < this.items.length - 1; i++) {
            cutItems[i] = this.items[i];
        }
        this.items = cutItems;
        return lastItem;
    };

    ArrayList.prototype.push = function (a) {
        this.items[this.items.length] = a;
        return this.items;
    };

    ArrayList.prototype.shift = function () {
        let firstItem = this.items[0];
        let cutItem = [];
        for (let i = 1; i < this.items.length - 1; i++) {
            cutItem[i - 1] = this.items[i];
        }
        this.items = cutItem;
        return firstItem;
    };

    ArrayList.prototype.unshift = function (a) {
        for (let i = this.items.length; i > 0; i--) {
            this.items[i] = this.items[i - 1];
        }
        this.items[0] = a;
        return this.items;
    };

    ArrayList.prototype.sort = function () {
        for (let i = 0; i < this.items.length; i++) {
            for (let j = 0; j < this.items.length - 1; j++) {
                if (this.items[j] > this.items[j + 1]) {
                    let temp = this.items[j];
                    this.items[j] = this.items[j + 1];
                    this.items[j + 1] = temp;
                }
            }
        }
        return (this.items);
    };

    ArrayList.prototype.splice = function (index, value, ...valuesForInserting) {
        let arrayBeforeRemoving = [];
        for (let i = 0; i < index; i++) {
            arrayBeforeRemoving[i] = this.items[i];
        }
        let arrayAfterRemoving = [];
        let k = 0;
        if (this.items[index + value]) {
            for (let i = index + value; i < this.items.length; i++) {
                arrayAfterRemoving[k] = this.items[i];
                k++;
            }
        }
        this.items = [...arrayBeforeRemoving, ...valuesForInserting, ...arrayAfterRemoving];

        return this.items;
    };

    ArrayList.prototype.remove = function (index) {
        for(let i = index; i < this.items.length - 1; i++){
            this.items[i]=this.items[i+1];
        }
        delete this.items[this.items.length - 1];
        return this.items;
    };

    ArrayList.prototype.size = function () {
        let size = 0;
        this.items.forEach(function () {
            size++;
        })
        return size;
    };

    ArrayList.prototype.doString = function () {
        let value = '';
        for(let i = 0; i < this.items.length; i++){
            value = value + String(this.items[i]);
        }
        return value;
    };

    ArrayList.prototype.newMap = function (a) {
        let newArray = [];

        for (let i = 0; i < this.items.length; i++){
            newArray[i] = this.items[i]*a;
        }
        this.items = newArray;
        return this.items;
    }










