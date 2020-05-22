import { Injectable } from "@angular/core";
@Injectable()
export class WebService {
  private desktopVisible: boolean = true;
  private sidebar: HTMLElement;
  private sidebarBackground: HTMLElement;
  
  private websites = [
    {
      url:'weirtz', 
      title:'Weirtz Website',
      thumbnail:'../../assets/web/pages/weirtz/thumbnail.png'
    },
    {
      url:'apricity-media-group', 
      title:'Apricity Media Group',
      thumbnail:'../../assets/web/pages/apricity-media-group/thumbnail.png'
    },
    {
      url:'nullnut', 
      title:'Nullnut Development',
      thumbnail:'../../assets/web/pages/nullnut/thumbnail.png'
    }
  ];

  setSideBar(val: HTMLElement){
    this.sidebar = val;
  }
  
  setSidebarBackground(val: HTMLElement){
    this.sidebarBackground = val;
  }
    
  getDesigns() {
    return this.websites;
  }

  public clearWebNav(){
    this.sidebar.style.display = "none";
    this.sidebarBackground.style.display = "none";
  }

  public showWebNav(){
    this.sidebar.style.display = "block";
    this.sidebarBackground.style.display = "block";
  }

  getDesign(url: string) {
    const design = this.websites.find(
      (l) => {
        return l.url === url;
      }
    );
    return design;
  }
}
  