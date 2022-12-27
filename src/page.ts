export default abstract class Page {
    protected abstract _hash: string;
    get hash(): string {
        return this._hash;
    }
    public abstract HtmlElementInstance: HTMLElement;
    protected abstract createHtmlElement(): HTMLElement;
    public abstract hideHtmlElement(): void;
}
