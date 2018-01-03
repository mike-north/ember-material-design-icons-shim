import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.material-icons').css('font-family').replace(/['"]+/g, ''), "Material Icons");
    assert.equal(currentURL(), '/');
  });
});
