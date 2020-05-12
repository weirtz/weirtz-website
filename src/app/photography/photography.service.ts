import { Injectable } from "@angular/core";
@Injectable()
export class PhotographyService {
    private images = [
        {
            id:27,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file1.webp',
            webpHigh:'../../assets/photos/webp/high/file1.webp'
        },
        {
            id:26,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file2.webp',
            webpHigh:'../../assets/photos/webp/high/file2.webp'
        },
        {
            id:25,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file3.webp',
            webpHigh:'../../assets/photos/webp/high/file3.webp'
        },
        {
            id:24,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file4.webp',
            webpHigh:'../../assets/photos/webp/high/file4.webp'
        },
        {
            id:23,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file5.webp',
            webpHigh:'../../assets/photos/webp/high/file5.webp'
        },
        {
            id:22,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file6.webp',
            webpHigh:'../../assets/photos/webp/high/file6.webp'
        },
        {
            id:21,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file7.webp',
            webpHigh:'../../assets/photos/webp/high/file7.webp'
        },
        {
            id:20,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file8.webp',
            webpHigh:'../../assets/photos/webp/high/file8.webp'
        },
        {
            id:19,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file9.webp',
            webpHigh:'../../assets/photos/webp/high/file9.webp'
        },
        {
            id:18,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file10.webp',
            webpHigh:'../../assets/photos/webp/high/file10.webp'
        },
        {
            id:17,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file11.webp',
            webpHigh:'../../assets/photos/webp/high/file11.webp'
        },
        {
            id:16,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file12.webp',
            webpHigh:'../../assets/photos/webp/high/file12.webp'
        },
        {
            id:15,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file13.webp',
            webpHigh:'../../assets/photos/webp/high/file13.webp'
        },
        {
            id:14,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file14.webp',
            webpHigh:'../../assets/photos/webp/high/file14.webp'
        },
        {
            id:13,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file15.webp',
            webpHigh:'../../assets/photos/webp/high/file15.webp'
        },
        {
            id:12,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file16.webp',
            webpHigh:'../../assets/photos/webp/high/file16.webp'
        },
        {
            id:11,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file17.webp',
            webpHigh:'../../assets/photos/webp/high/file17.webp'
        },
        {
            id:10,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file18.webp',
            webpHigh:'../../assets/photos/webp/high/file18.webp'
        },
        {
            id:9,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file19.webp',
            webpHigh:'../../assets/photos/webp/high/file19.webp'
        },
        {
            id:8,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file20.webp',
            webpHigh:'../../assets/photos/webp/high/file20.webp'
        },
        {
            id:7,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file21.webp',
            webpHigh:'../../assets/photos/webp/high/file21.webp'
        },
        {
            id:6,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file22.webp',
            webpHigh:'../../assets/photos/webp/high/file22.webp'
        },
        {
            id:5,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file23.webp',
            webpHigh:'../../assets/photos/webp/high/file23.webp'
        },
        {
            id:4,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file24.webp',
            webpHigh:'../../assets/photos/webp/high/file24.webp'
        },
        {
            id:3,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file25.webp',
            webpHigh:'../../assets/photos/webp/high/file25.webp'
        },
        {
            id:2,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file26.webp',
            webpHigh:'../../assets/photos/webp/high/file26.webp'
        },
        {
            id:1,
            jpgLow:'../../assets/photos/file (27).jpg', 
            jpgHigh:'../../assets/photos/file (27).jpg',
            webpLow:'../../assets/photos/webp/low/file27.webp',
            webpHigh:'../../assets/photos/webp/high/file27.webp'
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
  