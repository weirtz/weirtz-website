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
          thumbnail:'../../assets/designs/pixel-sorting/thumbnail.png'
        },
        {
          url:'apricity-media-group', 
          filter:'design',
          title:'Apricity Media Group',
          thumbnail:'../../assets/designs/apricity/thumbnail.png'
        },
        {
          url:'design-decals', 
          filter:'vector',
          title:'Design Decals - iOS Sticker Pack',
          thumbnail:'../../assets/designs/design-decals/thumbnail.png'
        },
        {
          url:'prevail-gaming', 
          filter:'design',
          title:'Prevail Gaming',
          thumbnail:'../../assets/designs/prevail-gaming/thumbnail.png'
        },
        // {
        //   url:'nintendo-switch-vector', 
        //   filter:'vector',
        //   title:'Nintendo Switch vector art',
        //   thumbnail:'../../assets/designs/nintendo-switch/thumbnail.png'
        // },
        // {
        //   url:'iphone-x-vector', 
        //   filter:'vector',
        //   title:'iPhone X placement vector',
        //   thumbnail:'../../assets/designs/iphone-placement/thumbnail.png'
        // },
        // {
        //   url:'done-is-better-than-perfect', 
        //   filter:'design',
        //   title:'Done is better than perfect',
        //   thumbnail:'../../assets/designs/iphone-placement/thumbnail.png'
        // }
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
  