import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css',
})
export class ServiceDetailsComponent {
  courseId!: string;
  courseDetails: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the course ID from the URL
    this.courseId = this.route.snapshot.paramMap.get('id')!; // Retrieve the 'id' param

    // For the purpose of this example, we'll mock the course details
    // In a real application, you would fetch this from an API or service based on the courseId.
    this.courseDetails = this.getCourseDetails(this.courseId);
  }
  reloadPage(courseId: number): void {
    // Reload the same page by navigating to the same route with the same parameter
    this.router.navigateByUrl('/service-detail/' + courseId).then(() => {
      window.location.reload();
    });
  }
  getCourseDetails(id: string) {
    // Mock data, you can replace this with an actual service call
    const courses = [
      {
        id: '1',
        title: 'UI/UX Design',
        description:
          'Learn the fundamentals of User Interface and User Experience design.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Mark Herry',
        students: '6593+',
        feedback: '4.8',
        imgUrl: 'assets/img/course/UIUX.svg',
      },
      {
        id: '2',
        title: 'Web Design',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/WebDesign.svg',
      },
      {
        id: '3',
        title: 'Website Development',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/WebDevelopment.svg',
      },
      {
        id: '4',
        title: 'Android App Development',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/MobileDevelopment.svg',
      },
      {
        id: '5',
        title: 'Digital Marketing',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/DigitalMarketing.svg',
      },
      {
        id: '6',
        title: 'IOS App Development',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/MobileDevelopment.svg',
      },
      {
        id: '7',
        title: 'Business Analytics',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/15.jpg',
      },
      {
        id: '8',
        title: 'MERN-Stack',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/16.jpg',
      },
      {
        id: '9',
        title: 'MEAN-Stack',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/17.jpg',
      },
      // Add more mock course data as needed
    ];

    return courses.find((course) => course.id === id);
  }
}
