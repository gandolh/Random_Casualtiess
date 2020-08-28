class CA {

    constructor(r) {

        this.w = 11;
        this.generation = 0;
        this.ruleset = r;
        this.cols = int(width / this.w);
        this.rows = int(height / this.w);
        this.matrix = new Array(this.cols);
        for (var i = 0; i < this.cols; i++) {
            this.matrix[i] = new Array(this.rows);
        }

    }

    restart(r) {
        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                this.matrix[i][j] = 0;
            }
        }
        this.matrix[int(this.cols / 2)][0] = 1; // We arbitrarily start with just the middle cell having a state of "1"
        this.generation = 0;
        this.ruleset = r;
    }

    generate() {
        for (let i = 0; i < this.cols; i++) {
            let left = this.matrix[(i + this.cols - 1) % this.cols][this.generation % this.rows];
            let me = this.matrix[i][(this.generation % this.rows)];
            let right = this.matrix[(i + 1) % this.cols][this.generation % this.rows];
            this.matrix[i][(this.generation + 1) % this.rows] = this.rules(left, me, right);
        }
        this.generation++;
    }
    /*
   
    */

    rules(a, b, c) {
        if (a == 1 && b == 1 && c == 1) return this.ruleset[7];
        if (a == 1 && b == 1 && c == 0) return this.ruleset[6];
        if (a == 1 && b == 0 && c == 1) return this.ruleset[5];
        if (a == 1 && b == 0 && c == 0) return this.ruleset[4];
        if (a == 0 && b == 1 && c == 1) return this.ruleset[3];
        if (a == 0 && b == 1 && c == 0) return this.ruleset[2];
        if (a == 0 && b == 0 && c == 1) return this.ruleset[1];
        if (a == 0 && b == 0 && c == 0) return this.ruleset[0];
        return 0;
    }
    check(){
        return this.generation <=(height/this.w) - 2 ;
    }
}