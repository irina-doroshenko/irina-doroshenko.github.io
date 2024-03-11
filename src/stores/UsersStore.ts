import { User } from '../shared/components/UserCard/types';
import { makeAutoObservable, reaction } from 'mobx';
import { RootStore } from './RootStore';
import { UserService } from '../services/http';

export default class UserStore {
  rootStore: RootStore;
  usersList: User[] = [];

  page = 1;
  count = 6;
  totalPages = 1;

  isUsersLoading = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);

    reaction(
      () => this.page,
      () => this.getUsers()
    );

    this.getUsers();
  }

  get isNextPageAvailable() {
    return this.totalPages > this.page;
  }

  increasePage = () => {
    this.page += 1;
  };

  getUsers = async () => {
    try {
      this.setIsLoading(true);
      const response = await UserService.getUsers(this.page, this.count);
      this.setUsers(response.users);
      this.setTotalPages(response.total_pages);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  setUsers = (users: User[]) => {
    this.usersList = [...this.usersList, ...users];
  };

  setTotalPages = (pagesCount: number) => {
    this.totalPages = pagesCount;
  };

  setIsLoading = (isLoading: boolean) => {
    this.isUsersLoading = isLoading;
  };
}
