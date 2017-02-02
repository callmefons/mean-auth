import _ from 'lodash';

const router = _.extend(
    require('./auth.authentication.controller'),
    require('./auth.authorization.controller')
);

export default router;