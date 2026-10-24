
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses() {
    return {
      message: 'All courses fetched successfully',
      data: [],
    };
  }

  getCourseById(id: string) {
    return {
      message: 'Course fetched successfully',
      data: {
        id,
      },
    };
  }

  createCourse(name: string, code: string) {
    return {
      message: 'Course created successfully',
      data: {
        name,
        code,
      },
    };
  }
}
