function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;

    this.push = function (data) {

        let root = this.root;

        if (root === null) {
            this.root = new Node(data);
            return this;
        }

        let current = root;
        let newNode = new Node(data);

        while (current) {
            if (data === current.data) {
                return;
            }

            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    break;
                } else {
                    current = current.left;
                }
            }

            if (data > current.data) {
                if (current.right === null) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
    };
    
    this.getData = function (data) {
        if (this.root === null){
            return null;
        }
        let current = this.root;
        
        while (current){
            if (data === current.data){
                return current.data;
            }
            if (data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    };
    
    this.minElem = function () {
        if (this.root === null){
            return null;
        }
        let current = this.root;
        while (current.left){
            current = current.left;
        }
        return current.data;
    };

    this.maxElem = function () {
        if (this.root === null){
            return null;
        }
        let current = this.root;
        while (current.right){
            current = current.right;
        }
        return current.data;
    };
}

