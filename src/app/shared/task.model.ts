import {Profile} from '../auth/profile/profile.model';

export class Task {
  public name: string;
  public description: string;
  public member: Profile;
  public priority: String;
  public state: String;
  public type: String;


  constructor(name: string, description: string, member: Profile,
              priority: string, state: string, type: string)
  {
    this.name = name;
    this.description = description;
    this.member = member;
    this.priority = priority;
    this.state = state;
    this.type = type;
  }
}
