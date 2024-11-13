import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncludeTestimonalComponent } from "../include-testimonals/include-testimonals.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonals',
  standalone: true,
  templateUrl: './testimonals.component.html',
  styleUrls: ['./testimonals.component.css'],
  imports: [FormsModule, IncludeTestimonalComponent, CommonModule],
})
export class TestimonalsComponent {
  name: string = ''; // User input for the name
  includeTestimonialVisible: boolean = false; // Controls the visibility of the testimonial form
  nameError: boolean = false; // Tracks if the name is missing
  testimonalsArray: any[] = [
    // { name: 'John', testimonals: 'Great service!' },
  ];

  // Function to show the testimonial form
  showTestimonialForm() {
    if (!this.name.trim()) {
      this.nameError = true; // Show error if the name is empty
    } else {
      this.nameError = false;
      this.includeTestimonialVisible = true; // Show the testimonial form if name is provided
    }
  }

  // Function to add a testimonial
  addTestimonial(testimonals: string) {
    this.testimonalsArray.push({ name: this.name, testimonals: testimonals });
    this.name = ''; // Clear the name field after submitting
    this.includeTestimonialVisible = false; // Hide the testimonial form after submission
  }
}
