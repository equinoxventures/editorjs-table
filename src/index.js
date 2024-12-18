import Plugin from './plugin';
import './styles/index.pcss';

export default Plugin;

/**
 * @typedef {object} TableData - configuration that the user can set for the table
 * @property {boolean} [withHeadings] - whether the table has header rows
 * @property {boolean} [stretched] - whether the table is stretched to full width
 * @property {(string|TableCell)[][]} content - two-dimensional array of table content
 */

/**
 * @typedef {object} Tune - setting for the table
 * @property {string} name - tune name
 * @property {HTMLElement} icon - icon for the tune
 * @property {boolean} isActive - default state of the tune
 * @property {void} setTune - set tune state to the table data
 */

/**
 * @typedef {object} TableConfig - object with the data transferred to form a table
 * @property {boolean} [withHeadings] - setting to use cells of the first row as headings
 * @property {string[]} [presetColors] - array of preset colors
 * @property {string} [defaultBackgroundColor] - default background color for the table cell
 * @property {(string|TableCell)[][]} content - two-dimensional array which contains table content
 */

/**
 * @typedef {object} TableConstructor
 * @property {TableData} data — previously saved data
 * @property {TableConfig} config - user config for Tool
 * @property {object} api - Editor.js API
 * @property {boolean} readOnly - read-only mode flag
 */

/**
 * @typedef {object} TableCell
 * @description Data per table cell
 * @property {string} content - string content for table
 * @property {string} backgroundColor - color of the cell
 * @property {float} width - relative width of the cell ( 1 == 1fr)
 */
