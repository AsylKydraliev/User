import { User } from './user.modal';

export class Group {
  constructor(public name: string, public users: User[], public status: boolean) {}
}
