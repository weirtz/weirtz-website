import { Injectable } from "@angular/core";
@Injectable()
export class LogosService {
    private assetsLogos = [
        {
          link:'../../assets/logos/morris.png', 
          name:'morris-brothers', 
          moreInfo:false,
          bannerImage:'',
          title:'Morris Brothers Inc.',
          subtitle:'Serving the recycling needs of Stark County since 1980.',
          copy:'A staple to the community, Morris Brothers has recycled scrap metal keeping Stark County cleaner and greener since 1980. They value their customers who are essentially neighbors plus being family owned and operated sets them apart from competitors because they treat everyone like family.',
          copy2:'"One man\'s trash is another man\'s treasure!"'
        },
        {
          link:'../../assets/logos/mca.png', 
          name:'mca-tow-targets', 
          moreInfo:false,
          bannerImage:'',
          title:'MCA Tow Targets',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/finite.png', 
          name:'finite-skies', 
          moreInfo:true,
          bannerImage:'../../assets/logos/finite-skies/banner-finite.jpg',
          title:'Finite Skies',
          subtitle:'',
          copy:'In 2011 Finite Skies started as just a little Minecraft server named "Seabreyh City" catering towards a small game going large. Growing larger, developing Minecraft mods for players to enjoy, Videos and Livestreams for many to watch, and a community for all to join.',
          copy2:''
        },
        {
          link:'../../assets/logos/chosen.png', 
          name:'chosen-acres', 
          moreInfo:false,
          bannerImage:'',
          title:'Chosen Acres',
          subtitle:'In pursuit of parlor perfection',
          copy:'Placeholder',
          copy2:''
        },
        {
          link:'../../assets/logos/prevail-2.png', 
          name:'prevail-gaming', 
          moreInfo:true,
          bannerImage:'../../assets/logos/prevail/banner-prevail.jpg',
          title:'Prevail Gaming',
          subtitle:'Professional eSports team',
          copy:'Prevail is an eSports team based in Florida that was founded in early 2016. With members from all around the world and rising in the ranks of multiple game titles, They pride themselves in assisting with the development of new members and providing a non-toxic environment for current members in the gaming community. With Prevails thriving Discord server, there is no easier way to prove your skills.',
          copy2:'Prevail approached me to assist in branding themselves with a fresh lick of paint. I got them geared up and armed with a fresh new logo, profile images, banners, and an eSports themed typeface to make sure their graphics are always looking on point.'
        },
        {
          link:'../../assets/logos/paramount.png', 
          name:'paramount-elite', 
          moreInfo:true,
          bannerImage:'',
          title:'Paramount Elite',
          subtitle:'Emergency restoration services',
          copy:'Placeholder',
          copy2:''
        },
        {
          link:'../../assets/logos/nullnut.png', 
          name:'nullnut', 
          moreInfo:true,
          bannerImage:'../../assets/logos/nullnut/banner-nullnut.jpg',
          title:'Nullnut',
          subtitle:'Software development team',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/williams-and-case.png', 
          name:'williams-and-case', 
          moreInfo:false,
          bannerImage:'',
          title:'Williams and Case',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/ieg.png', 
          name:'international-esports-gaming', 
          moreInfo:false,
          bannerImage:'',
          title:'International Esports Gaming',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/apricity.png', 
          name:'apricity-media-group', 
          moreInfo:true,
          bannerImage:'',
          title:'Apricity Media Group',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/dragonfly-2.png', 
          name:'dragonfly', 
          moreInfo:false,
          bannerImage:'',
          title:'Dragonfly Labs',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/concord.png', 
          name:'concord', 
          moreInfo:true,
          bannerImage:'',
          title:'Concord',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/kaitlyns-kreations.png', 
          name:'kaitlyns-kreations', 
          moreInfo:false,
          bannerImage:'',
          title:'Kaitlyns Kreations',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/toledo.png', 
          name:'uot-college-republicans', 
          moreInfo:false,
          bannerImage:'',
          title:'University of Toledo College Republicans',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/petes-restaurant.png', 
          name:'petes-restaurant', 
          moreInfo:false,
          bannerImage:'',
          title:'Petes Restaurant',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/aphelion.png', 
          name:'aphelion', 
          moreInfo:false,
          bannerImage:'',
          title:'Aphelion',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/oxygen.png', 
          name:'oxygen', 
          moreInfo:false,
          bannerImage:'',
          title:'Oxygen',
          subtitle:'',
          copy:'',
          copy2:''
        },
        {
          link:'../../assets/logos/orbitl.png', 
          name:'orbitl', 
          moreInfo:false,
          bannerImage:'',
          title:'Orbitl',
          subtitle:'',
          copy:'',
          copy2:''
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
  