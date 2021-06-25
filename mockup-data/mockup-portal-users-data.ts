const mockPortalUsersSubNavigation: (
    {
        id: string;
        title: string;
        counter: number | null;
        state: string;
    })[] = [
    {
        id: 'manage_users',
        title: 'Manage Users',
        counter: null,
        state: 'default',
    },
    {
        id: 'role_management',
        title: 'Role Management',
        counter: null,
        state: 'default',
    },
];
const mockPortalUsersDetails: (
    {
        label: string;
        link: boolean;
        value: string;
    })[] = [
    {
        label: 'Name',
        link: false,
        value: 'Pheobe Holman',
    },
    {
        label: 'Email',
        link: false,
        value: 'p.holman@bigcorp.com',
    },
    {
        label: 'Username',
        link: false,
        value: 'pheopeholman',
    },
    {
        label: 'Password',
        link: true,
        value: ``,
    },
    {
        label: 'Mobile',
        link: false,
        value: '+41 76 123 45 76',
    },
    {
        label: 'Phone',
        link: false,
        value: '+41 76 123 45 76',
    },
];
const mockPortalUsersPreferences: (
    {
        label: string;
        value: string;
    })[] = [
    {
        label: 'Role',
        value: 'Mobile Manager',
    },
    {
        label: 'Status',
        value: 'Active',
    },
    {
        label: 'Language',
        value: 'English',
    },
    {
        label: 'Bill Notification',
        value: 'Off',
    },
    {
        label: 'News & Updates',
        value: 'On',
    },
    {
        label: 'SMS Code Login',
        value: 'Off',
    },
];
const mockPortalUsersAccountAccess: (
    {
        icon: string;
        label: string;
        text: string;
    })[] = [
    {
        icon: 'company',
        label: 'Bigcorp HQ',
        text: '8000010444 ･ Zurich, Switzerland',
    },
    {
        icon: 'company-sub',
        label: 'Partners',
        text: '8000010444 ･ Zurich, Switzerland',
    },
    {
        icon: 'company-sub',
        label: 'Employees',
        text: '8000010444 ･ Zurich, Switzerland',
    },
    {
        icon: 'company-sub',
        label: 'Bigcorp Lugano',
        text: '8000010444 ･ Zurich, Switzerland',
    }
];
export {
    mockPortalUsersSubNavigation,
    mockPortalUsersDetails,
    mockPortalUsersPreferences,
    mockPortalUsersAccountAccess
};
