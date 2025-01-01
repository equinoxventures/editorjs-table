import { default as Toolbox } from './toolbox';
/**
 * @typedef {object} TableConfig - object with the data transferred to form a table
 * @property {boolean} [withHeadings] - setting to use cells of the first row as headings
 * @property {string[]} [presetColors] - array of preset colors
 * @property {(string|TableCell)[][]} content - two-dimensional array which contains table content
 */
/**
 * @typedef {object} TableCell
 * @description Data per table cell
 * @property {string} content - string content for table
 * @property {string} backgroundColor - color of the cell
 * @property {float} width - relative width of the cell ( 1 == 1fr)
 */
/**
 * @typedef {object} TableData - configuration that the user can set for the table
 * @property {boolean} withHeadings - whether the table has header rows
 * @property {boolean} stretched - whether the table is stretched to full width
 * @property {(string|TableCell)[][]} content - two-dimensional array of table content
 */
/**
 * Generates and manages table contents.
 */
export default class Table {
    /**
     * Creates
     *
     * @constructor
     * @param {boolean} readOnly - read-only mode flag
     * @param {object} api - Editor.js API
     * @param {TableData} data - Editor.js API
     * @param {TableConfig} config - Editor.js API
     */
    constructor(readOnly: boolean, api: object, data: TableData, config: TableConfig);
    readOnly: boolean;
    api: any;
    data: TableData;
    config: TableConfig;
    /**
     * DOM nodes
     */
    wrapper: Element;
    table: Element;
    /**
     * Toolbox for managing of columns
     */
    toolboxColumn: Toolbox;
    toolboxRow: Toolbox;
    toolboxCell: Toolbox;
    cellColorPicker: Element;
    hoveredRow: number;
    hoveredColumn: number;
    selectedRow: number;
    selectedColumn: number;
    tunes: {
        withHeadings: boolean;
    };
    /**
     * The cell in which the focus is currently located, if 0 and 0 then there is no focus
     * Uses to switch between cells with buttons
     */
    focusedCell: {
        row: number;
        column: number;
    };
    /**
     * Global click listener allows to delegate clicks on some elements
     */
    documentClicked: (event: any) => void;
    /**
     * Returns the rendered table wrapper
     *
     * @returns {Element}
     */
    getWrapper(): Element;
    /**
     * Hangs the necessary handlers to events
     */
    bindEvents(): void;
    /**
     * Configures and creates the toolbox for manipulating with columns
     *
     * @returns {Toolbox}
     */
    createColumnToolbox(): Toolbox;
    /**
     * Increase the width of the specified columns by 0.1
     * EditorJS represents tables as CSS Grid
     *
     * @param {number} column - column index
     */
    increaseWidth(column: number): void;
    /**
     * Decrease the width of the specified columns by 0.1
     * EditorJS represents tables as CSS Grid
     *
     * @param {number} column - column index
     */
    decreaseWidth(column: number): void;
    setCellWidth({ row, column, adjustedWidth, defaultWidth }: {
        row: any;
        column: any;
        adjustedWidth?: number;
        defaultWidth?: number;
    }): void;
    /**
     * Adjust the widths of all columns in the table to be displayed
     * EditorJS represents tables as CSS Grid, so we need to go through each
     * row and adjust the width of each column
     */
    adjustColumnWidths(): void;
    /**
     * Configures and creates the toolbox for manipulating with cells
     *
     * @returns {Toolbox}
     */
    createCellToolbox(): Toolbox;
    /**
     * Configures and creates the toolbox for manipulating with rows
     *
     * @returns {Toolbox}
     */
    createRowToolbox(): Toolbox;
    /**
     * When you press enter it moves the cursor down to the next row
     * or creates it if the click occurred on the last one
     */
    moveCursorToNextRow(): void;
    /**
     * Get table cell by row and col index
     *
     * @param {number} row - cell row coordinate
     * @param {number} column - cell column coordinate
     * @returns {HTMLElement}
     */
    getCell(row: number, column: number): HTMLElement;
    /**
     * Get table row by index
     *
     * @param {number} row - row coordinate
     * @returns {HTMLElement}
     */
    getRow(row: number): HTMLElement;
    /**
     * The parent of the cell which is the row
     *
     * @param {HTMLElement} cell - cell element
     * @returns {HTMLElement}
     */
    getRowByCell(cell: HTMLElement): HTMLElement;
    /**
     * Ger row's first cell
     *
     * @param {Element} row - row to find its first cell
     * @returns {Element}
     */
    getRowFirstCell(row: Element): Element;
    /**
     * Set the sell's content by row and column numbers
     *
     * @param {number} row - cell row coordinate
     * @param {number} column - cell column coordinate
     * @param {string} content - cell HTML content
     */
    setCellContent(row: number, column: number, content: string): void;
    setCellBackgroundColor(row: any, column: any, color: any): void;
    /**
     * Add column in table on index place
     * Add cells in each row
     *
     * @param {number} columnIndex - number in the array of columns, where new column to insert, -1 if insert at the end
     * @param {boolean} [setFocus] - pass true to focus the first cell
     */
    addColumn(columnIndex?: number, setFocus?: boolean): void;
    /**
     * Add row in table on index place
     *
     * @param {number} index - number in the array of rows, where new column to insert, -1 if insert at the end
     * @param {boolean} [setFocus] - pass true to focus the inserted row
     * @returns {HTMLElement} row
     */
    addRow(index?: number, setFocus?: boolean): HTMLElement;
    /**
     * Copy the width of the columns from the blueprint row to the target row
     *
     * @param {HTMLElement} blueprintRow - the row to copy the width from
     * @param {HTMLElement} targetRow - the row to copy the width to
     */
    copyColumnWidthsFromBlueprint(blueprintRow: HTMLElement, targetRow: HTMLElement): void;
    /**
     * Delete a column by index
     *
     * @param {number} index
     */
    deleteColumn(index: number): void;
    /**
     * Delete a row by index
     *
     * @param {number} index
     */
    deleteRow(index: number): void;
    /**
     * Create a wrapper containing a table, toolboxes
     * and buttons for adding rows and columns
     *
     * @returns {HTMLElement} wrapper - where all buttons for a table and the table itself will be
     */
    createTableWrapper(): HTMLElement;
    /**
     * Returns the size of the table based on initial data or config "size" property
     *
     * @return {{rows: number, cols: number}} - number of cols and rows
     */
    computeInitialSize(): {
        rows: number;
        cols: number;
    };
    /**
     * Resize table to match config size or transmitted data size
     *
     * @return {{rows: number, cols: number}} - number of cols and rows
     */
    resize(): {
        rows: number;
        cols: number;
    };
    /**
     * Fills the table with data passed to the constructor
     *
     * @returns {void}
     */
    fill(): void;
    /**
     * Fills a row with cells
     *
     * @param {HTMLElement} row - row to fill
     * @param {number} numberOfColumns - how many cells should be in a row
     * @param {number} rowIndex - index of the row
     */
    fillRow(row: HTMLElement, numberOfColumns: number, rowIndex: number): void;
    /**
     * Creating a cell element
     *
     * @return {Element}
     */
    createCell(): Element;
    /**
     * Get number of rows in the table
     */
    get numberOfRows(): number;
    /**
     * Get number of columns in the table
     */
    get numberOfColumns(): number;
    /**
     * Is the column toolbox menu displayed or not
     *
     * @returns {boolean}
     */
    get isColumnMenuShowing(): boolean;
    /**
     * Is the row toolbox menu displayed or not
     *
     * @returns {boolean}
     */
    get isRowMenuShowing(): boolean;
    get isCellMenuShowing(): HTMLElement;
    /**
     * Recalculate position of toolbox icons
     *
     * @param {Event} event - mouse move event
     */
    onMouseMoveInTable(event: Event): void;
    /**
     * Prevents default Enter behaviors
     * Adds Shift+Enter processing
     *
     * @param {KeyboardEvent} event - keypress event
     */
    onKeyPressListener(event: KeyboardEvent): boolean;
    /**
     * Prevents tab keydown event from bubbling
     * so that it only works inside the table
     *
     * @param {KeyboardEvent} event - keydown event
     */
    onKeyDownListener(event: KeyboardEvent): void;
    /**
     * Set the coordinates of the cell that the focus has moved to
     *
     * @param {FocusEvent} event - focusin event
     */
    focusInTableListener(event: FocusEvent): void;
    /**
     * Unselect row/column
     * Close toolbox menu
     * Hide toolboxes
     *
     * @returns {void}
     */
    hideToolboxes(): void;
    /**
     * Unselect row, close toolbox
     *
     * @returns {void}
     */
    hideRowToolbox(): void;
    /**
     * Unselect column, close toolbox
     *
     * @returns {void}
     */
    hideColumnToolbox(): void;
    /**
     * close cellToolbox
     */
    hideCellToolbox(): void;
    /**
     * Set the cursor focus to the focused cell
     *
     * @returns {void}
     */
    focusCell(): void;
    /**
     * Get current focused element
     *
     * @returns {HTMLElement} - focused cell
     */
    get focusedCellElem(): HTMLElement;
    /**
     * Update toolboxes position, this is used to display the controls at column/row/cell level
     *
     * @param {number} row - hovered row
     * @param {number} column - hovered column
     */
    updateToolboxesPosition(row?: number, column?: number): void;
    /**
     * Makes the first row headings
     *
     * @param {boolean} withHeadings - use headings row or not
     */
    setHeadingsSetting(withHeadings: boolean): void;
    /**
     * Adds an attribute for displaying the placeholder in the cell
     */
    addHeadingAttrToFirstRow(): void;
    /**
     * Removes an attribute for displaying the placeholder in the cell
     */
    removeHeadingAttrFromFirstRow(): void;
    /**
     * Add effect of a selected row
     *
     * @param {number} index
     */
    selectRow(index: number): void;
    /**
     * Remove effect of a selected row
     */
    unselectRow(): void;
    /**
     * Add effect of a selected column
     *
     * @param {number} index
     */
    selectColumn(index: number): void;
    /**
     * Remove effect of a selected column
     */
    unselectColumn(): void;
    /**
     * Calculates the row and column that the cursor is currently hovering over
     * The search was optimized from O(n) to O (log n) via bin search to reduce the number of calculations
     *
     * @param {Event} event - mousemove event
     * @returns hovered cell coordinates as an integer row and column
     */
    getHoveredCell(event: Event): {
        row: number;
        column: number;
    };
    /**
     * Looks for the index of the cell the mouse is hovering over.
     * Cells can be represented as ordered intervals with left and
     * right (upper and lower for rows) borders inside the table, if the mouse enters it, then this is our index
     *
     * @param {number} numberOfCells - upper bound of binary search
     * @param {function} getCell - function to take the currently viewed cell
     * @param {function} beforeTheLeftBorder - determines the cursor position, to the left of the cell or not
     * @param {function} afterTheRightBorder - determines the cursor position, to the right of the cell or not
     * @returns {number}
     */
    binSearch(numberOfCells: number, getCell: Function, beforeTheLeftBorder: Function, afterTheRightBorder: Function): number;
    /**
     * Collects data from cells into a two-dimensional array
     *
     * @returns {string[][]}
     */
    getData(): string[][];
    /**
     * Remove listeners on the document
     */
    destroy(): void;
}
/**
 * - object with the data transferred to form a table
 */
export type TableConfig = {
    /**
     * - setting to use cells of the first row as headings
     */
    /**
     * - setting to use cells of the first row as headings
     */
    withHeadings?: boolean;
    /**
     * - array of preset colors
     */
    /**
     * - array of preset colors
     */
    presetColors?: string[];
    /**
     * - two-dimensional array which contains table content
     */
    /**
     * - two-dimensional array which contains table content
     */
    content: (string | TableCell)[][];
};
export type TableCell = object;
/**
 * - configuration that the user can set for the table
 */
export type TableData = {
    /**
     * - whether the table has header rows
     */
    /**
     * - whether the table has header rows
     */
    withHeadings: boolean;
    /**
     * - whether the table is stretched to full width
     */
    /**
     * - whether the table is stretched to full width
     */
    stretched: boolean;
    /**
     * - two-dimensional array of table content
     */
    /**
     * - two-dimensional array of table content
     */
    content: (string | TableCell)[][];
};
