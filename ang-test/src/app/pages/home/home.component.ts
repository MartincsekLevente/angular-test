import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '../../components/counter/counter.component';

@Component({
    selector: 'app-home',
    imports: [
        FormsModule,
        CounterComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    homeTitle = input<string>("Test");
    inputText = signal("");

}
