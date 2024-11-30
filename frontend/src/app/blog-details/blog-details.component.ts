import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent {
  blogId!: string;
  blogDetails: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the course ID from the URL
    this.blogId = this.route.snapshot.paramMap.get('id')!; // Retrieve the 'id' param

    // For the purpose of this example, we'll mock the course details
    // In a real application, you would fetch this from an API or service based on the blogId.
    this.blogDetails = this.getblogDetails(this.blogId);
  }

  // reloadPage(blogId: number): void {
  //   // Reload the same page by navigating to the same route with the same parameter
  //   this.router.navigateByUrl('/service-detail/' + blogId).then(() => {
  //     window.location.reload();
  //   });
  // }

  getblogDetails(id: string) {
    // Mock data, you can replace this with an actual service call
    const blogs = [
      {
        id: '1',
        title: '5 Ways to Use Padlet in -Ed Online Classroom',
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
        title: '4 New Zoom Enhance Virtual Learning',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/14.jpg',
      },
      {
        id: '3',
        title: 'Using Media to Support Online Teaching',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/15.jpg',
      },
      {
        id: '4',
        title: '5 Ways to Use Padlet in -Ed Online Classroom',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/16.jpg',
      },
      {
        id: '5',
        title: '4 New Zoom Enhance Virtual Learning',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/17.jpg',
      },
      {
        id: '6',
        title: 'Using Media to Support Online Teaching',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/18.jpg',
      },
      {
        id: '7',
        title: '5 Ways to Use Padlet in -Ed Online Classroom',
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
        title: '4 New Zoom Enhance Virtual Learning',
        description: 'Learn how to analyze and interpret complex data.',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/course/16.jpg',
      },
      // Add more mock course data as needed
    ];

    return blogs.find((blog) => blog.id === id);
  }
}
