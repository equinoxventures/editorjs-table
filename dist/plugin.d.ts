import { default as Table } from './table';
/**
 * @typedef {import('@editorjs/editorjs').PasteEvent} PasteEvent
 */
/**
 * Table block for Editor.js
 */
export default class TableBlock {
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean;
    /**
     * Allow to press Enter inside the CodeTool textarea
     *
     * @returns {boolean}
     * @public
     */
    public static get enableLineBreaks(): boolean;
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): {
        icon: string;
        title: string;
    };
    /**
     * Table onPaste configuration
     *
     * @public
     */
    public static get pasteConfig(): {
        tags: string[];
    };
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {TableConstructor} init
     */
    constructor({ data, config, api, readOnly, block }: TableConstructor);
    api: TableConstructor;
    readOnly: TableConstructor;
    config: TableConstructor;
    data: {
        withHeadings: any;
        stretched: any;
        content: any;
    };
    table: Table;
    block: TableConstructor;
    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement}
     */
    render(): HTMLDivElement;
    /** creating container around table */
    container: Element;
    /**
     * Returns plugin settings
     *
     * @returns {Array}
     */
    renderSettings(): any[];
    /**
     * Extract table data from the view
     *
     * @returns {TableData} - saved data
     */
    save(): TableData;
    /**
     * Plugin destroyer
     *
     * @returns {void}
     */
    destroy(): void;
    /**
     * A helper to get config value.
     *
     * @param {string} configName - the key to get from the config.
     * @param {any} defaultValue - default value if config doesn't have passed key
     * @param {object} savedData - previously saved data. If passed, the key will be got from there, otherwise from the config
     * @returns {any} - config value.
     */
    getConfig(configName: string, defaultValue?: any, savedData?: object): any;
    /**
     * On paste callback that is fired from Editor
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(event: PasteEvent): void;
}
export type PasteEvent = any;
