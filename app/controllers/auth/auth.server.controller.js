import _ from 'lodash';

const router = _.extend(
    require('./authentication.controller'),
    require('./authorization.controller')
);

export default router;
