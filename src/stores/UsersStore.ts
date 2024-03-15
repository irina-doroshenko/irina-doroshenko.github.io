import { makeAutoObservable, reaction } from 'mobx';
import { RootStore } from './RootStore';
import { UserService } from '../services/http';
import { FailsWithResponse, GeneralFail } from '../services/http/types';
import { formatSignUpValidationResponse } from '../utils/formatValidationResponseObj';
import { SignUpFormData } from '../sections/SignUp/components/SignUpForm/types';
import { User } from './types';

export default class UserStore {
  rootStore: RootStore;
  usersList: User[] = [];

  page = 1;
  count = 6;
  totalPages = 1;

  isUsersLoading = false;

  isUserCreating = false;
  isUserCreationSuccess = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);

    reaction(
      () => this.page,
      () => this.getUsers()
    );

    reaction(
      () => this.isUserCreationSuccess,
      (isSuccess) => {
        if (isSuccess) {
          this.page === 1 && this.getUsers();
          this.page > 1 && this.setPage(1);
        }
      }
    );

    this.getUsers();
  }

  get isNextPageAvailable() {
    return this.totalPages > this.page;
  }

  increasePage = () => {
    this.page += 1;
  };

  setPage = (page: number) => {
    this.page = page;
  };

  getUsers = async () => {
    try {
      this.setIsUsersLoading(true);
      const response = await UserService.getUsers(this.page, this.count);
      this.page === 1 && this.setUsers(response.users);
      this.page > 1 && this.setUsers([...this.usersList, ...response.users]);
      this.setTotalPages(response.total_pages);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsUsersLoading(false);
    }
  };

  createUser = async (userFormData: SignUpFormData) => {
    try {
      this.setIsUserCreating(true);

      const token = await this.getToken();
      token && (await UserService.createUser(userFormData, token));

      this.setIsUserCreationSuccess(true);
    } catch (error) {
      this.setIsUserCreationSuccess(false);

      if (!(error as GeneralFail).response) {
        console.error(error);
        return;
      }

      if ((error as GeneralFail).response) {
        console.error((error as FailsWithResponse).data.message);

        if ((error as FailsWithResponse<SignUpFormData>).data.fails) {
          const failsList = (error as FailsWithResponse<SignUpFormData>).data
            .fails!;

          return Promise.reject(formatSignUpValidationResponse(failsList));
        }

        return Promise.reject((error as FailsWithResponse).data.message);
      }
    } finally {
      this.setIsUserCreating(false);
    }
  };

  getToken = async () => {
    try {
      const token = await UserService.getToken();
      return token.token;
    } catch (error) {
      console.error(error);
    }
  };

  setUsers = (users: User[]) => {
    this.usersList = users;
  };

  setTotalPages = (pagesCount: number) => {
    this.totalPages = pagesCount;
  };

  setIsUsersLoading = (isLoading: boolean) => {
    this.isUsersLoading = isLoading;
  };

  setIsUserCreating = (isUserCreating: boolean) => {
    this.isUserCreating = isUserCreating;
  };

  setIsUserCreationSuccess = (isUserCreationSuccess: boolean) => {
    this.isUserCreationSuccess = isUserCreationSuccess;
  };
}
