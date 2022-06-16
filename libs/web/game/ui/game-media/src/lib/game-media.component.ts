import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'psnv-game-media',
  templateUrl: './game-media.component.html',
  styleUrls: ['./game-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameMediaComponent implements OnInit {
  media!: GalleryItem[];

  ngOnInit() {
    this.media = [
      'https://image.api.playstation.com/vulcan/ap/rnd/202102/1018/OAa4x7rhbLR89HfMjmNEbHFV.jpg',
      'https://image.api.playstation.com/vulcan/ap/rnd/202102/1018/TkYnDhTj8AVVeMttwkWe2nWX.jpg',
      'https://image.api.playstation.com/vulcan/ap/rnd/202006/1217/ClnHKlWvqhcJvHd3OsiXHuRc.jpg',
      'https://image.api.playstation.com/vulcan/ap/rnd/202006/1217/uhyIltavTLwMyE42Ge3ZAJci.jpg',
      'https://image.api.playstation.com/vulcan/ap/rnd/202006/1217/w6kvRtcc2994kgRrUq4QAcrz.jpg',
      'https://image.api.playstation.com/vulcan/ap/rnd/202006/1217/JK8l3yPGClCmQXjjkjOdAoHB.jpg',
    ].map((url) => new ImageItem({ src: url, thumb: url }));
  }
}
