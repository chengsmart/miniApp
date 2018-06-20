require('./config$');

function success() {
require('../..//app');
require('../..//pages/home/home');
require('../..//pages/select/select');
require('../..//pages/login/login');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
