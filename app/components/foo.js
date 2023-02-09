import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from 'tracked-built-ins';

export default class extends Component {
  changeset1 = {};

  changeset2 = tracked({});

  @action
  setOne(event) {
    set(this.changeset1, 'value', event.target.value.trim());
  }

  @action
  setTwo(event) {
    this.changeset2.value = event.target.value.trim();
  }
}
