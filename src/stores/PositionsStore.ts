import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';
import { Position } from './types';
import { PositionService } from '../services/http';

export default class PositionStore {
  rootStore: RootStore;
  positionsList: Position[] = [];

  isPositionsLoading = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);

    this.getPositions();
  }

  getPositions = async () => {
    try {
      this.setIsLoading(true);
      const response = await PositionService.getPositions();
      this.setPositions(response.positions);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  setPositions = (positions: Position[]) => {
    this.positionsList = [...positions];
  };

  setIsLoading = (isLoading: boolean) => {
    this.isPositionsLoading = isLoading;
  };
}
