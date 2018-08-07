import Home from '../views/Home';
import Menu1 from '../views/Menu1';
import Menu2 from '../views/Menu2';

const contextPath = '/main';

const MainRoute = [
    {
        name: '홈',
        path: contextPath + '/',
        component: Home,
        exact: true
    },
    {
        name: '메뉴 1',
        path: contextPath + '/menu1',
        component: Menu1
    },
    {
        name: '메뉴 2',
        path: contextPath + '/menu2',
        component: Menu2
    }
];

export default MainRoute;