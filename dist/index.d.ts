import { default as Plugin } from './plugin';
export default Plugin;
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
    withHeadings?: boolean;
    /**
     * - whether the table is stretched to full width
     */
    /**
     * - whether the table is stretched to full width
     */
    stretched?: boolean;
    /**
     * - two-dimensional array of table content
     */
    /**
     * - two-dimensional array of table content
     */
    content: (string | TableCell)[][];
};
/**
 * - setting for the table
 */
export type Tune = {
    /**
     * - tune name
     */
    /**
     * - tune name
     */
    name: string;
    /**
     * - icon for the tune
     */
    /**
     * - icon for the tune
     */
    icon: HTMLElement;
    /**
     * - default state of the tune
     */
    /**
     * - default state of the tune
     */
    isActive: boolean;
    /**
     * - set tune state to the table data
     */
    /**
     * - set tune state to the table data
     */
    setTune: void;
};
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
     * - default background color for the table cell
     */
    /**
     * - default background color for the table cell
     */
    defaultBackgroundColor?: string;
    /**
     * - two-dimensional array which contains table content
     */
    /**
     * - two-dimensional array which contains table content
     */
    content: (string | TableCell)[][];
};
export type TableConstructor = {
    /**
     * — previously saved data
     */
    /**
     * — previously saved data
     */
    data: TableData;
    /**
     * - user config for Tool
     */
    /**
     * - user config for Tool
     */
    config: TableConfig;
    /**
     * - Editor.js API
     */
    /**
     * - Editor.js API
     */
    api: object;
    /**
     * - read-only mode flag
     */
    /**
     * - read-only mode flag
     */
    readOnly: boolean;
};
export type TableCell = object;
