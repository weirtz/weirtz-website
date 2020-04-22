import { Injectable } from "@angular/core";
@Injectable()
export class LogosService {
    private assetsLogos = [
        {
          link:'../../assets/logos/morris.png', 
          name:'morris-brothers', 
          moreInfo:true,
          title:'Morris Brothers',
          subtitle:'Scrap metal recycling',
          copy:'Placeholder'
        },
        {
          link:'../../assets/logos/mca.png', 
          name:'mca-tow-targets', 
          moreInfo:false,
          title:'',
          subtitle:'',
          copy:''
        },
        {
          link:'../../assets/logos/finite.png', 
          name:'finite-skies', 
          moreInfo:true,
          title:'Finite Skies',
          subtitle:'',
          copy:'Placeholder'
        },
        {
          link:'../../assets/logos/chosen.png', 
          name:'chosen-acres', 
          moreInfo:true,
          title:'Chosen Acres',
          subtitle:'In pursuit of parlor perfection',
          copy:'Placeholder'
        },
        {
          link:'../../assets/logos/prevail-2.png', 
          name:'prevail-gaming', 
          moreInfo:true,
          title:'Prevail Gaming',
          subtitle:'Up and coming esports teams',
          copy:'Placeholder'
        },
        {
          link:'../../assets/logos/paramount.png', 
          name:'paramount-elite', 
          moreInfo:true,
          title:'Paramount Elite',
          subtitle:'Emergency restoration services',
          copy:'Placeholder'
        },
        {
          link:'../../assets/logos/oxygen.png', 
          name:'oxygen', 
          moreInfo:false,
          title:'',
          subtitle:'',
          copy:''
        },
        {
          link:'../../assets/logos/orbitl.png', 
          name:'orbitl', 
          moreInfo:false,
          title:'',
          subtitle:'',
          copy:''
        }
      ];
  
    getLogos() {
      return this.assetsLogos;
    }
  
    getLogo(name: string) {
      const logo = this.assetsLogos.find(
        (l) => {
          return l.name === name;
        }
      );
      return logo;
    }
  }
  