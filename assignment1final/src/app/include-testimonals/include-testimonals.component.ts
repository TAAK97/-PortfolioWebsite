import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-include-testimonal',
  standalone: true,
  templateUrl: './include-testimonals.component.html',
  styleUrls: ['./include-testimonals.component.css'],
  imports: [FormsModule],
})
export class IncludeTestimonalComponent {
  @Input() name: string | undefined;
  @Output() testimonialSubmitted = new EventEmitter<string>();
  testimonial: string = '';

  submitTestimonial() {
    this.testimonialSubmitted.emit(this.testimonial);
    this.testimonial = '';
  }
}