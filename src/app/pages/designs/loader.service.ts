import { Injectable } from "@angular/core";
@Injectable()
export class LoaderService {

    private loadedLogo: HTMLCollectionOf<Element>;
    private loading: boolean = true;

    getLoading(){
        return this.loading;
    }

    // setLoadingElement(val: HTMLElement){
    //     this.loadedLogo = val;
    // }

    // logoLoaded(){
    //     this.loadedLogo.style.display = "block";
    //     this.loading = false;
    // }
}
  