class UnionSet {
    constructor(size){
        this.set = new Array(size);
        for(var i = this.set.length - 1; i >= 0; i--){
            this.set[i] = -1;
        }
    }

    union(root1, root2){
        this.set[root1] = root2;
    }

    findSet(x){
        while(this.set[x] >= 0){
            x = this.set[x];
        }
        return x;
    }

    sameSet(x, y){
        return this.findSet(x) === this.findSet(y);
    }

    unionElement(x, y){
        this.union(this.findSet(x), this.findSet(y));
    }
}

class Maze{
    constructor(columns, rows, canvas){
        this.columns = columns;
        this.rows = rows;
        this.cells = columns * rows;
        this.linkedMap = {};
        this.unionSets = new UnionSet(this.cells);
        this.canvas = canvas;
    }

    firstLastLinked(){
        return this.unionSets.sameSet(0, this.cells-1);
    }

    generate(){
        while(!this.linkedToFirstCell()){
            var cellPairs = this.pickRandomCellPairs();
            if(!this.unionSets.sameSet(cellPairs[0], cellPairs[1])){
                this.unionSets.unionElement(cellPairs[0], cellPairs[1]);
                this.addLinkedMap(cellPairs[0], cellPairs[1]);
            }
        }
    }

    pickRandomCellPairs(){
        var cell = (Math.random() * this.cells) >> 0;
        var neibourCells = [];
        var row = (cell / this.columns) >> 0,
            column = cell % this.rows;

        //不是第一排有上方相临元素
        if(row !== 0){
            neibourCells.push(cell-this.columns);
        }

        if(row !== this.rows - 1){
            neibourCells.push(cell+this.columns);
        }

        if(column !== 0){
            neibourCells.push(cell-1);
        }

        if(column !== this.columns - 1){
            neibourCells.push(cell + 1);
        }

        var index = (Math.random() * neibourCells.length) >> 0; 
        return [cell, neibourCells[index]];
    }

    addLinkedMap(x, y){
        if(!this.linkedMap[x]) this.linkedMap[x] = [];
        if(!this.linkedMap[y]) this.linkedMap[y] = [];
        if(this.linkedMap[x].indexOf(y) < 0){
            this.linkedMap[x].push(y);
        }
        if(this.linkedMap[y].indexOf(x) < 0){
            this.linkedMap[y].push(x);
        }
    }

    linkedToFirstCell(){
        for(var i = 1; i < this.cells; i++){
            if(!this.unionSets.sameSet(0, i)) 
                return false;
        }   
        return true;
    }

    draw() {
        var linkedMap = this.linkedMap;
        var cellWidth = this.canvas.width/this.columns,
            cellHeight = this.canvas.height / this.rows;
        var ctx = this.canvas.getContext('2d');
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.translate(0.5, 0.5);
        for(var i = 0; i < this.cells; i++){
            var row = i / this.columns >> 0,
                column = i % this.columns;

            if(column !== this.columns -1 && (!linkedMap[i] || linkedMap[i].indexOf(i + 1) < 0)){
                ctx.moveTo((column + 1) * cellWidth >> 0, row * cellHeight >> 0);
                ctx.lineTo((column + 1) * cellWidth >> 0, (row + 1) * cellHeight >> 0);
            }

            if(row !== this.rows - 1 && (!linkedMap[i] || linkedMap[i].indexOf(i + this.columns) < 0)){
                ctx.moveTo(column * cellWidth >> 0, (row + 1) * cellHeight >> 0);
                ctx.lineTo((column + 1) * cellWidth >> 0, (row + 1) * cellHeight >> 0);
            }
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        //this.drawBorder(ctx, this.canvas.width, this.canvas.height);
    }
    drawBorder(ctx, width, height){
        ctx.moveTo(0, 0);
        ctx.lineTo(width, 0);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.lineTo(0, 0);
        ctx.stroke();
    }
    callPath(){
        var pathTable = new Array(this.cells);
        for(var i = 0; i < pathTable.length; i++){
            pathTable[i] = {known: false, prevCell: -1};
        }   
        pathTable[0].known = true;
        var map = this.linkedMap;
        //用一个队列存储当前层的节点，先进队列的结点优先处理
        var unSearchCells = [0];
        var j = 0;
        while(!pathTable[pathTable.length - 1].known){
            while(unSearchCells.length){
                var cell = unSearchCells.pop();
                for(var i = 0; i < map[cell].length; i++){
                    if(pathTable[map[cell][i]].known) continue;
                    pathTable[map[cell][i]].known = true;
                    pathTable[map[cell][i]].prevCell = cell; 
                    unSearchCells.unshift(map[cell][i]);
                    if(pathTable[pathTable.length - 1].known) break;
                }   
            }   
        }   
        var cell = this.cells - 1;
        var path = [cell];
        while(cell !== 0){ 
            var cell = pathTable[cell].prevCell;
            path.push(cell);
        }   
        this.drawPath(path);
    }

    drawPath(path){
        var ctx = this.canvas.getContext('2d');
        ctx.save();
        ctx.beginPath();
        var cellWidth = this.canvas.width / this.columns,
            cellHeight = this.canvas.height / this.rows;
        var basePos = {
            x: cellWidth/2,
            y: cellHeight/2,
        }
        ctx.moveTo(basePos.x, basePos.y);
        for(var i = (path.length - 1); i > 0; i--){
            var cell = path[i];
            var cellRow = cell / this.columns >> 0,
                cellColumn = cell % this.columns;
            var disCell = cell - path[i-1];
            if(disCell === -1){
                basePos.x = basePos.x + cellWidth;
            } else if(disCell === 1) {
                basePos.x = basePos.x - cellWidth;
            } else if(disCell === -this.columns){
                basePos.y = basePos.y + cellHeight;
            } else {
                basePos.y = basePos.y - cellHeight;
            }
            ctx.lineTo(basePos.x, basePos.y);
            
        }
        ctx.strokeStyle="blue";
        ctx.stroke();
        ctx.restore();
    }
}
































