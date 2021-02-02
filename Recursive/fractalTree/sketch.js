let angle, tree = [],
    len;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // angle=PI/2;
    // len=400
    len = 300;
    translate(0,-height/2+300)
    angle = PI / 6;
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - len);
    tree.push(new Branch(a, b, 0));
    for (let cnt = 1; cnt <= 10; cnt++) {
        for (let i = tree.length - 1; i >= 0; i--) {
            if (!tree[i].finished) {
                tree.push(tree[i].branchA(cnt));
                tree.push(tree[i].branchB(cnt));
            }
            tree[i].finished = true;
        }
    }
    background(51);
    for (let b of tree) {
        b.show();
    }
}