import { Injectable } from "@angular/core";
@Injectable()
export class DesignsService {
    private designs = [
        //Filters
        //vector, digital
        
        {
          url:'pixel-sorting', 
          filter:'digital',
          title:'Pixel Sorting',
          thumbnail:'../../assets/designs/pixel-sorting/thumbnail.png',
          moreInfo:true
        },
        {
          url:'apricity-media-group', 
          filter:'design',
          title:'Apricity Media Group',
          thumbnail:'../../assets/designs/apricity/thumbnail.png',
          moreInfo:true
        },
        {
          url:'design-decals', 
          filter:'vector',
          title:'Design Decals',
          thumbnail:'../../assets/designs/design-decals/thumbnail.png',
          moreInfo:true
        },
        {
          url:'prevail-gaming', 
          filter:'design',
          title:'Prevail Gaming',
          thumbnail:'../../assets/designs/prevail-gaming/thumbnail.png',
          moreInfo:true
        },
        {
          url:'gay-brunch', 
          filter:'design',
          title:'Gay Brunch',
          thumbnail:'../../assets/designs/gay-brunch/thumbnail.png',
          moreInfo:false
        },
        {
          url:'nintendo-switch-vector', 
          filter:'vector',
          title:'Nintendo Switch vector art',
          thumbnail:'../../assets/designs/nintendo-switch/thumbnail.png',
          moreInfo:false
        },
        {
          url:'iphone-x-vector', 
          filter:'vector',
          title:'iPhone X placement vector',
          thumbnail:'../../assets/designs/iphone-placement/thumbnail.png',
          moreInfo:false
        },
        {
          url:'done-is-better-than-perfect', 
          filter:'design',
          title:'Done is better than perfect',
          thumbnail:'../../assets/designs/done-is-better-than-perfect/thumbnail.png',
          moreInfo:false
        }
      ];

    getDesigns() {
      return this.designs;
    }
  
    getDesign(url: string) {
      const design = this.designs.find(
        (l) => {
          return l.url === url;
        }
      );
      return design;
    }
  }
  