export default abstract class Page {
    public abstract HtmlElementInstance: HTMLElement;
    protected abstract createHtmlElement(): HTMLElement;
    public abstract hideHtmlElement(): void;
}
