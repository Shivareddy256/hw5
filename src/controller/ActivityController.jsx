import ActivityModel from '../model/ActivityModel';

class ActivityController {
  static async fetchActivity() {
    const activityData = await ActivityModel.fetchActivity();
    return activityData;
  }
}

export default ActivityController;