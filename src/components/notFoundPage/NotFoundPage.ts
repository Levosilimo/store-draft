import Page from '../../Page';

export default class NotFoundPage extends Page {
    protected _hash: string;
    HtmlElementInstance: HTMLElement;

    constructor() {
        super();
        this._hash = `/404`;
        this.HtmlElementInstance = this.createHtmlElement();
    }

    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        const errorWrapperElement = document.createElement('div');
        const errorTitle = document.createElement('h2');
        errorTitle.textContent = 'Page not found (404)';
        errorWrapperElement.append(errorTitle);
        errorWrapperElement.classList.add('error-title-wrapper');
        HtmlElement.append(errorWrapperElement);
        HtmlElement.classList.add('not-found-page');
        return HtmlElement;
    }
}
