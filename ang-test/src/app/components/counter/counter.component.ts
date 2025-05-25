import { Component, signal } from '@angular/core';
import { DEFAULT_COUNTER_VALUE, MAX_COUNTER_VALUE, MIN_COUNTER_VALUE } from '../../constants/CounterConstants';

@Component({
    selector: 'app-counter',
    imports: [],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss'
})
export class CounterComponent {
    counter = signal(DEFAULT_COUNTER_VALUE);

    handleIncrementButtonClick() {
        this.counter.update(value => {
            if (value + 1 < MAX_COUNTER_VALUE) {
                return value + 1;
            }
            return MAX_COUNTER_VALUE;
        });
    }

    handleResetButtonClick() {
        this.counter.set(DEFAULT_COUNTER_VALUE);
    }

    handleDecrementButtonClick() {
        this.counter.update(value => {
            if (value - 1 > MIN_COUNTER_VALUE) {
                return value - 1;
            }
            return MIN_COUNTER_VALUE;
        });
    }
}
