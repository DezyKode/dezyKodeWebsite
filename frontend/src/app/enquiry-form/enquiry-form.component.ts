import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrl: './enquiry-form.component.css',
})
export class EnquiryFormComponent {
  enquiryForm: FormGroup;

  cities: string[] = [
    '',
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Miami',
  ];
  states: string[] = [
    '',
    'California',
    'New York',
    'Texas',
    'Illinois',
    'Florida',
  ];
  interestedFor: string[] = [
    '',
    'UI&UX',
    'Web Developer Intern',
    'Digital Marketing',
  ];

  // Education Levels and Streams
  educationLevels: string[] = [
    'High School',
    'Undergraduate',
    'Graduate',
    'Postgraduate',
    'Others',
  ];
  streams: { [key: string]: string[] } = {
    'High School': ['Science', 'Commerce', 'Arts'],
    Undergraduate: ['Medical', 'Commerce', 'Arts', 'Engineering'],
    Graduate: ['PhD in Arts', 'PhD in Engineering'],
    Postgraduate: ['MBA', 'MSc', 'MA', 'MTech'],
  };

  selectedEducationLevel: string | null = null;
  showOtherEducationInput: boolean = false;
  currentStreams: string[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Define the form structure with necessary fields
    this.enquiryForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      emailAddress: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      educationLevel: ['', Validators.required], // Add educationLevel
      stream: [''], // Add stream field
      educationStatus: [''],
      otherEducation: [''], // Field for 'Other' education level input
      interestedFor: ['', Validators.required],
      reference: [''],
    });

    // Listen for changes in the education level field
    this.enquiryForm.get('educationLevel')?.valueChanges.subscribe((value) => {
      this.selectedEducationLevel = value;
      this.showOtherEducationInput = value === 'Others';

      // Update the available streams based on selected education level
      if (value && value !== 'Others') {
        this.currentStreams = this.streams[value] || [];
      } else {
        this.currentStreams = [];
      }

      // Reset fields if necessary
      if (value !== 'Others') {
        this.enquiryForm.get('otherEducation')?.reset();
      }
    });
  }

  onReset() {
    this.enquiryForm.reset();
  }

  // Form submission handler
  onSubmit() {
    if (this.enquiryForm.valid) {
      // Native browser confirmation dialog
      const confirmed = confirm('Do you want to submit the enquiry form?');

      if (confirmed) {
        // Proceed with submission logic
        this.http
          .post('http://localhost:8087/api/enquiries', this.enquiryForm.value)
          .subscribe(
            (response) => {
              alert('Enquiry submitted successfully!');
              console.log('Enquiry submitted:', response);
              this.enquiryForm.reset(); // Reset the form on successful submission
            },
            (error) => {
              console.error('Error submitting enquiry:', error);
            }
          );
      } else {
        // Handle form submission cancel
        alert('Submission cancelled.');
      }
    }
  }
}
