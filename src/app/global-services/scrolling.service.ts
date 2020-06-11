import { PLATFORM_ID, Inject, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Injectable()
export class ScrollingService {

	private styleTag: HTMLStyleElement;
	public isShowingModal: boolean;
	
	constructor(@Inject(PLATFORM_ID) private platformId: Object) {
		if (isPlatformBrowser(this.platformId)) {
			this.styleTag = this.buildStyleElement();
		}
	}

	public toggleModal() : void {
		if ( this.isShowingModal = ! this.isShowingModal ) {
			this.disable();
		}
	  }
	  
	public getStyleTag(){
		return this.styleTag
	}

	public disable() : void {
		if (isPlatformBrowser(this.platformId)) {
			document.body.appendChild( this.styleTag );
		}
	}

	public enable() : void {
		if (isPlatformBrowser(this.platformId)) {
			document.body.removeChild( this.styleTag );
		}
	}

	// Create a HTML style element to place into DOM.
	private buildStyleElement() : HTMLStyleElement {
		if (isPlatformBrowser(this.platformId)) {
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
}