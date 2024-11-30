import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrl: './courses-details.component.css',
})
export class CoursesDetailsComponent {
  courseId!: string;
  courseDetails: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the course ID from the URL
    this.courseId = this.route.snapshot.paramMap.get('id')!; // Retrieve the 'id' param

    // For the purpose of this example, we'll mock the course details
    // In a real application, you would fetch this from an API or service based on the courseId.
    this.courseDetails = this.getCourseDetails(this.courseId);
  }

  getCourseDetails(id: string) {
    // Mock data, you can replace this with an actual service call
    const courses = [
      {
        id: '1',
        title: 'UI/UX',
        description:
          'Learn the fundamentals of User Interface and User Experience design.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Mark Herry',
        students: '6593+',
        feedback: '4.8',
        imgUrl: 'assets/img/course/13.jpg',
      },
      {
        id: '2',
        title: 'Data Analytics',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/details/RMDA.png',
      },
      {
        id: '3',
        title: 'Full Stack-PYTHON',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/details/RMFSD.png',
      },
      {
        id: '4',
        title: 'Data Science',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/details/RMDS.png',
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
        imgUrl: 'assets/img/course/details/RMDM.png',
      },
      {
        id: '6',
        title: 'Full Stack-JAVA',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/details/RMFSD.png',
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
        imgUrl: 'assets/img/course/details/RMBA.png',
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
        imgUrl: 'assets/img/course/details/RMMERN.png',
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
        imgUrl: 'assets/img/course/details/RMMEAN.png',
      },
      {
        id: '10',
        title: 'Software Testing',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/details/RMST.png',
      },
      // Add more mock course data as needed
    ];

    return courses.find((course) => course.id === id);
  }
}
