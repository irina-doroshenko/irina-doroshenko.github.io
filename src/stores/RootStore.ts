import UserStore from './UsersStore';

export class RootStore {
  userStore = new UserStore(this);
}
