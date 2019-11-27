class CellsField {
    cells=[];

    constructor() {
        for (let i = 0; i < 36; i++) {
            this.cells.push({id: i, flag: false});
        }
    }

    showCells = () => {
        return this.cells;
    };
}

export default CellsField;