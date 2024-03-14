import PositionStore from './PositionsStore';
import UserStore from './UsersStore';

export class RootStore {
  userStore = new UserStore(this);
  positionsStore = new PositionStore(this);
}
