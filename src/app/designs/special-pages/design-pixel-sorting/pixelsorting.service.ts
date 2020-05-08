import { Injectable } from "@angular/core";
@Injectable()
export class PixelsortingService {
    private images = [
        {
            id:1,
            linkLow:'../../assets/designs/pixel-sorting/low/file(1).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(1).jpg'
        },
        {
            id:2,
            linkLow:'../../assets/designs/pixel-sorting/low/file(2).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(2).jpg'
        },
        {
            id:3,
            linkLow:'../../assets/designs/pixel-sorting/low/file(3).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(3).jpg'
        },
        {
            id:4,
            linkLow:'../../assets/designs/pixel-sorting/low/file(4).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(4).jpg'
        },
        {
            id:5,
            linkLow:'../../assets/designs/pixel-sorting/low/file(5).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(5).jpg'
        },
        {
            id:6,
            linkLow:'../../assets/designs/pixel-sorting/low/file(6).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(6).jpg'
        },
        {
            id:7,
            linkLow:'../../assets/designs/pixel-sorting/low/file(7).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(7).jpg'
        },
        {
            id:8,
            linkLow:'../../assets/designs/pixel-sorting/low/file(8).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(8).jpg'
        },
        {
            id:9,
            linkLow:'../../assets/designs/pixel-sorting/low/file(9).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(9).jpg'
        },
        {
            id:10,
            linkLow:'../../assets/designs/pixel-sorting/low/file(10).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(10).jpg'
        },
        {
            id:11,
            linkLow:'../../assets/designs/pixel-sorting/low/file(11).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(11).jpg'
        },
        {
            id:12,
            linkLow:'../../assets/designs/pixel-sorting/low/file(12).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(12).jpg'
        },
        {
            id:13,
            linkLow:'../../assets/designs/pixel-sorting/low/file(13).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(13).jpg'
        },
        {
            id:14,
            linkLow:'../../assets/designs/pixel-sorting/low/file(14).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(14).jpg'
        },
        {
            id:15,
            linkLow:'../../assets/designs/pixel-sorting/low/file(15).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(15).jpg'
        },
        {
            id:16,
            linkLow:'../../assets/designs/pixel-sorting/low/file(16).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(16).jpg'
        },
        {
            id:17,
            linkLow:'../../assets/designs/pixel-sorting/low/file(17).jpg', 
            linkHigh:'../../assets/designs/pixel-sorting/high/file(17).jpg'
        }
      ];

    getImages() {
      return this.images;
    }
  
    getImage(id: number) {
      const image = this.images.find(
        (l) => {
          return l.id === id;
        }
      );
      return image;
    }
  }
  