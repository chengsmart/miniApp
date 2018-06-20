require('./config$');

function success() {
require('../..//app');
require('../..//pages/home/home');
require('../..//pages/select/select');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
