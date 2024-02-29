import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/'
	},
	{
		id: uuid(),
		title: 'User Management',
		icon: 'user',
		link: '/user-management'
	},
	{
		id: uuid(),
		title: 'PAGES',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'Profile',
		icon: 'clipboard',
		link: '/profile'
	},
	{
		id: uuid(),
		title: 'Settings',
		icon: 'settings',
		link: '/settings'
	}
];

export default DashboardMenu;
