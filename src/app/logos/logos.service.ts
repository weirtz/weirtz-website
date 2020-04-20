export class LogosService {
    private assetsLogos = [
        {link:'../../assets/logos/morris.png', name:'morris-brothers', moreInfo:true},
        {link:'../../assets/logos/mca.png', name:'mca-tow-targets', moreInfo:false},
        {link:'../../assets/logos/finite.png', name:'finite-skies', moreInfo:true},
        {link:'../../assets/logos/chosen.png', name:'chosen-acres', moreInfo:true},
        {link:'../../assets/logos/prevail-2.png', name:'prevail-gaming-2', moreInfo:true},
        {link:'../../assets/logos/paramount.png', name:'paramount-elite', moreInfo:true},
        {link:'../../assets/logos/oxygen.png', name:'oxygen', moreInfo:false},
        {link:'../../assets/logos/orbitl.png', name:'orbitl', moreInfo:false}
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
  