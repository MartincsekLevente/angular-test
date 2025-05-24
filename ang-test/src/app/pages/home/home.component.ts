import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CounterComponent } from '../../components/counter/counter.component';

@Component({
    selector: 'app-home',
    imports: [
        FormsModule,
        NgIf,
        CounterComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    homeTitle = input.required<string>();
    inputText = signal("");

}
