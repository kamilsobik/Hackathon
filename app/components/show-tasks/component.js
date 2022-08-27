import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ProvidersOpenRequestComponent extends Component {
  @service store;
  @service session;
  @service router;
  @tracked isDone = false;

  // constructor() {
  //   super(...arguments);
  //   this.record = this.store.createRecord('task');
  // }

  // get hasEmptyField() {
  //   const description = this.record;
  //   return !description;
  // }

  // @action
  // onPropertyChange(key, event) {
  //   this.record[key] = event.target.value;
  // }

  // @action
  // async onCreatNewTask() {
  //   this.record.save();
  // }

  // @action
  // async onDescriptionChange(title) {
  //   await this.args.tasks.save();
  // }

  @action
  async onIsDone(task) {
    task.isDone = true;
    await this.args.tasks.save();
  }
}
