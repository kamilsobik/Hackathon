import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ProvidersOpenRequestComponent extends Component {
  @service store;
  @service session;
  @service router;
  @tracked isDone = false;

  @action
  onDescriptionChange({ target: { value } }) {
    this.newTask = value;
  }

  @action
  async addNewTask() {
    const task = { description: this.newTask };
    await this.store.createRecord('task', task);
    await this.args.tasks.save();
    this.clearFieldDescription();
  }

  @action
  async onIsDone(task) {
    task.isDone = true;
    await this.args.tasks.save();
  }
  clearFieldDescription() {
    this.newTask = '';
  }

  @action
  onDeleteTask() {
    this.currentTask.destroyRecord();
  }
}
