import { Injectable } from "@angular/core";
@Injectable()
export class LogosService {
    private assetsLogos = [
        {
          link:'../../assets/logos/morris.png', 
          name:'morris-brothers', 
          moreInfo:true,
          title:'Morris Brothers Inc.',
          subtitle:'Serving the recycling needs of Stark County since 1980.',
          copy:'A staple to the community, Morris Brothers has recycled scrap metal keeping Stark County cleaner and greener since 1980. They value their customers who are essentially neighbors plus being family owned and operated sets them apart from competitors because they treat everyone like family.',
          copy2:'"One man\'s trash is another man\'s treasure!"'
        },
        {
          link:'../../assets/logos/mca.png', 
          name:'mca-tow-targets', 
          moreInfo:false,
          title:'',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/finite.png', 
          name:'finite-skies', 
          moreInfo:true,
          title:'Finite Skies',
          subtitle:'',
          copy:'Placeholder',
          copy2:''
        },
        {
          link:'../../assets/logos/chosen.png', 
          name:'chosen-acres', 
          moreInfo:true,
          title:'Chosen Acres',
          subtitle:'In pursuit of parlor perfection',
          copy:'Placeholder',
          copy2:''
        },
        {
          link:'../../assets/logos/prevail-2.png', 
          name:'prevail-gaming', 
          moreInfo:true,
          title:'Prevail Gaming',
          subtitle:'Up and coming esports teams',
          copy:'Placeholder',
          copy2:''
        },
        {
          link:'../../assets/logos/paramount.png', 
          name:'paramount-elite', 
          moreInfo:true,
          title:'Paramount Elite',
          subtitle:'Emergency restoration services',
          copy:'Placeholder',
          copy2:''
        },
        {
          link:'../../assets/logos/nullnut.png', 
          name:'nullnut', 
          moreInfo:true,
          title:'Nullnut',
          subtitle:'Software development',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/williams-and-case.png', 
          name:'williams-and-case', 
          moreInfo:false,
          title:'',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/apricity.png', 
          name:'apricity-media-group', 
          moreInfo:true,
          title:'Apricity Media Group',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/dragonfly-2.png', 
          name:'dragonfly', 
          moreInfo:true,
          title:'Dragonfly Labs',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/concord.png', 
          name:'concord', 
          moreInfo:true,
          title:'Concord',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/kaitlyns-kreations.png', 
          name:'kaitlyns-kreations', 
          moreInfo:false,
          title:'',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/petes-restaurant.png', 
          name:'petes-restaurant', 
          moreInfo:false,
          title:'',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/aphelion.png', 
          name:'aphelion', 
          moreInfo:false,
          title:'',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/oxygen.png', 
          name:'oxygen', 
          moreInfo:false,
          title:'',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/orbitl.png', 
          name:'orbitl', 
          moreInfo:false,
          title:'',
          subtitle:'',
          copy:'',
          copy2:''
        }
      ];

      public toggleModal() : void {

        // When we open the modal window, we want to prevent scrolling on the main
        // document. This way, if the user can scroll within the modal window, the
        // scroll will never bleed into the body context.
        if ( this.isShowingModal = ! this.isShowingModal ) {
    
          this.windowScrolling.disable();
    
        } else {
    
          this.windowScrolling.enable();
    
        }
    
      }
  
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
  