export class ScrollingService {

	private styleTag: HTMLStyleElement;
	public isShowingModal: boolean;
	
	constructor() {
		this.styleTag = this.buildStyleElement();
	}

	public toggleModal() : void {
		if ( this.isShowingModal = ! this.isShowingModal ) {
			this.disable();

		} else {
			this.enable();

		}
	  }
	  
	public getStyleTag(){
		return this.styleTag
	}

	public disable() : void {
		document.body.appendChild( this.styleTag );
	}

	public enable() : void {
		document.body.removeChild( this.styleTag );
	}

	// Create a HTML style element to place into DOM.
	private buildStyleElement() : HTMLStyleElement {
		var style = document.createElement( "style" );

		style.type = "text/css";
		style.setAttribute( "data-debug", "Injected by scrollingService." );
		style.textContent = `
			body {
				overflow: hidden !important ;
			}
		`;
		return( style );
	}
}