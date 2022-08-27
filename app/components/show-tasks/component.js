import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ProvidersOpenRequestComponent extends Component {
  @service store;
  @service session;
  @service router;
}
