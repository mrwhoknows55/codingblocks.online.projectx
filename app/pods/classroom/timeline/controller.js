import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import moment from 'moment';
import DS from 'ember-data';

export default class TimelineController extends Controller {
  queryParams = ['showFeedback']
  showFeedback = false

  @service api

  @action
  resetProgress() {
    this.get('api').request('progresses/reset', {
      method: 'POST',
      data: {
        runAttemptId: this.get('runAttempt.id')
      }
    }).then(() => this.send('reloadRoute'))
  }
}
