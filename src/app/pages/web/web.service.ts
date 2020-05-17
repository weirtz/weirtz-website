import { Injectable } from "@angular/core";
@Injectable()
export class WebService {
    private websites = [
        //Filters
        //vector, digital
        
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
          thumbnail:'../../assets/web/pages/weirtz/thumbnail.png'
        }
      ];

    getDesigns() {
      return this.websites;
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
  