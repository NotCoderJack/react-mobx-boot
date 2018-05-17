import '../styles/base.scss'
import '../styles/theme.less';
import CoreLayout from '../layouts/Layout'
const createRoutes = (store) => ({
    path: '/',
    component: CoreLayout,
    indexRoute: Login,
    childRoutes: []
})
export default createRoutes