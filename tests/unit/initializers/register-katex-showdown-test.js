import Application from '@ember/application';

import { initialize } from 'codingblocks-online/initializers/register-katex-showdown';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Initializer | register-katex-showdown', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function() {
    destroyApp(this.application);
  });

  // Replace this with your real tests.
  test('it works', async function(assert) {
    await this.application.boot();

    assert.ok(true);
  });
});
