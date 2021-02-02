function drawLine(x1, y1, x2, y2) {
    let x, y, dx, dy, dx1, dy1, px, py, xe, ye, i;
    dx = x2 - x1;
    dy = y2 - y1;
    dx1 = Math.abs(dx);
    dy1 = Math.abs(dy);
    px = 2 * dy1 - dx1;
    py = 2 * dx1 - dy1;
    if (dy1 <= dx1) {
        if (dx >= 0) {
            x = x1;
            y = y1;
            xe = x2;
        } else {
            x = x2;
            y = y2;
            xe = x1;
        }
        grid[x][y] = 1;
        for (i = 0; x < xe; i++) {
            x = x + 1;
            if (px < 0) {
                px = px + 2 * dy1;
            } else {
                if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                    y = y + 1;
                } else {
                    y = y - 1;
                }
                px = px + 2 * (dy1 - dx1);
            }
            grid[x][y] = 1;
        }
    } else {
        if (dy >= 0) {
            x = x1;
            y = y1;
            ye = y2;
        } else {
            x = x2;
            y = y2;
            ye = y1;
        }
        grid[x][y] = 1;
        for (i = 0; y < ye; i++) {
            y = y + 1;
            if (py <= 0) {
                py = py + 2 * dx1;
            } else {
                if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                    x = x + 1;
                } else {
                    x = x - 1;
                }
                py = py + 2 * (dx1 - dy1);
            }
            grid[x][y] = 1;
        }
    }
}

function drawTriangle(x1, y1, x2, y2, x3, y3) {
    x1 = int(x1);
    y1 = int(y1);
    x2 = int(x2);
    y2 = int(y2);
    x3 = int(x3);
    y3 = int(y3);
    drawLine(x1, y1, x2, y2);
    drawLine(x2, y2, x3, y3);
    drawLine(x3, y3, x1, y1);

}

function drawRect(x, y, wd, he) {
    wd -= 1;
    he -= 1;
    drawLine(x, y, x + he, y);
    drawLine(x + he, y, x + he, y + wd);
    drawLine(x + he, y + wd, x, y + wd);
    drawLine(x, y + wd, x, y);
}
function drawEllipse(y,x,radiusx,radiusy){
    for(let angle=0;angle<=TWO_PI;angle+=TWO_PI/320){
        let xNew= x+radiusx*sin(angle);
        let yNew= y+radiusy*cos(angle);
        if(xNew>0 && yNew>0 && xNew<rows && yNew<cols)grid[int(xNew)][int(yNew)]=1;
    }

}
function drawingStol() {
    for (let factor = 15; factor >= 0; factor -= 3) {
        let offx = cols / 2,
            offy = rows / 2+5;

        drawTriangle(-0.866 * factor + offx, -0.5 * factor + offy,
            0.866 * factor + offx, -0.5 * factor + offy,
            0.0 * factor + offx, 1.0 * factor + offy);
    }
    offx = cols / 2 - 15, offy = rows / 2 - 25;
    for (let factor = 15; factor >= 0; factor -= 3) {

        drawTriangle(-0.866 * factor + offx, -0.5 * factor + offy,
            0.866 * factor + offx, -0.5 * factor + offy,
            0.0 * factor + offx, 1.0 * factor + offy);
    }
        offx = cols / 2 + 15, offy = rows / 2 - 25;
    for (let factor = 15; factor >= 0; factor -= 3) {

        drawTriangle(-0.866 * factor + offx, -0.5 * factor + offy,
            0.866 * factor + offx, -0.5 * factor + offy,
            0.0 * factor + offx, 1.0 * factor + offy);
    }
}