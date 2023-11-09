import { Injectable } from "@angular/core";

@Injectable()
export class TeamService {
  teams = [
    {
      id: 1, name: 'Jane Doe', job: 'CEO & Founder',
      email: 'jane@example', image: 'assets/jone.jpg',
      description: 'Some text that describes me lorem ipsum ipsum lorem.'
    },
    {
      id: 2, name: 'Mike Ross', job: 'Art Director',
      email: 'mike@example', image: 'assets/mike.jpg',
      description: 'Some text that describes me lorem ipsum ipsum lorem.'
    },
    {
      id: 3, name: 'John Doe', job: 'Designer',
      email: 'john@example', image: 'assets/john.jpg',
      description: 'Some text that describes me lorem ipsum ipsum lorem.'
    }
  ]
}