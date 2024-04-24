class ActivityModel {
  static async fetchActivity() {
    const response = await fetch('https://www.boredapi.com/api/activity');
    const data = await response.json();
    return data;
  }
}

export default ActivityModel;