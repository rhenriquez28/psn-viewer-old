import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'psnv-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameInfoComponent {
  description =
    "BLAST YOUR WAY THROUGH AN INTERDIMENSIONAL ADVENTURE<br /><br />Ratchet and Clank are back! Help them stop a robotic emperor intent on conquering cross-dimensional worlds, with their own universe next in the firing line. Witness the evolution of the dream team as they're joined by Rivet – a Lombax resistance fighter from another dimension.<br /><br />- Blast your way home with an arsenal of outrageous weaponry. <br />- Experience the shuffle of dimensional rifts and dynamic gameplay. <br />- Explore never-before-seen planets and alternate dimension versions of old favorites.<br /><br />PS5 FEATURES: <br />- Feel in-game actions through the haptic feedback of the DualSense wireless controller. <br />- Take full control of advanced weapon mechanics, made possible by adaptive triggers. <br />- Planet-hop at hyper-speed via the near-instant loading of the PS5 console's SSD. <br />- Immerse your ears with Tempest 3D AudioTech* as you work to save the universe. <br />- Enhanced lighting and ray tracing render dazzling in-game worlds – displayed in crisp, dynamic 4K and HDR**. <br />- Choose Performance Mode to enjoy targeted 60 frames per second gameplay***.";
}
