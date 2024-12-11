
import {Component} from '@angular/core';
import {Treasure} from './treasure.model';
import {treasuresMock} from './treasures.mock';
import {TreasureComponent} from "./treasure.component";

@Component({
    selector: 'treasure-list',
    imports: [TreasureComponent],
    standalone: true,
    template: `
        <h1>Discovering Angular 17's Hidden Treasures</h1>
        <main>
          <section class="treasures-container">
            @for (treasure of treasures; track treasure) {
              <treasure [treasure]="treasure"/>
            }
          </section>
        </main>
        `,
})
export class TreasureListComponent {
    treasures: Treasure[] = treasuresMock;
}

