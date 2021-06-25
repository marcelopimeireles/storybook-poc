const mockAgentNavigation: (
    {
        id: string;
        title: string;
        counter: number | null;
        icon: string;
        state: string;
    })[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        counter: null,
        icon: 'dots-grid',
        state: 'default',
    },
    {
        id: 'manage',
        title: 'Manage Role',
        counter: null,
        icon: 'user-management',
        state: 'default',
    },
    {
        id: 'audit',
        title: 'Audit Trail',
        counter: null,
        icon: 'account-trail',
        state: 'default',
    },
    {
        id: 'sync',
        title: 'Sync',
        counter: null,
        icon: 'sync1',
        state: 'default',
    },
    {
        id: 'manuals',
        title: 'Manuals',
        counter: null,
        icon: 'manual-book',
        state: 'default',
    },
    {
        id: 'documents',
        title: 'Documents',
        counter: null,
        icon: 'document',
        state: 'default',
    }
];

const mockAgentViewNavigation: (
    {
        id: string;
        title: string;
        counter: number | null;
        icon: string;
        state: string;
    })[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        counter: null,
        icon: 'dots-grid',
        state: 'default',
    },
    {
        id: 'mobile',
        title: 'Mobile',
        counter: null,
        icon: 'mobile',
        state: 'default',
    },
    {
        id: 'connectivity',
        title: 'Connectivity',
        counter: null,
        icon: 'connectivity',
        state: 'default',
    },
    {
        id: 'work',
        title: 'Work Smart',
        counter: null,
        icon: 'work-smart',
        state: 'default',
    },
    {
        id: 'users',
        title: 'Portal Users',
        counter: null,
        icon: 'team',
        state: 'default',
    },
    {
        id: 'finance',
        title: 'Finance',
        counter: 1,
        icon: 'invoices',
        state: 'default',
    }
];
const mockAgentWidgets: (
    {
        label: string;
        icon: string;
        type: string;
    })[] = [
    {
        label: 'Mobile Onboarding',
        icon: 'mobile-check-large',
        type: 'lock',
    },
    {
        label: 'Manage Customer Documents',
        icon: 'manual-book-large',
        type: '',
    },
    {
        label: 'Information & Manuals',
        icon: 'manual-book-large',
        type: 'external',
    },
    {
        label: 'Account Audit Trail',
        icon: 'support-tickets-large',
        type: 'external',
    },
    {
        label: 'Sunrise IoT Connect',
        icon: 'connectivity-large',
        type: 'external',
    },
    {
        label: 'Sunrise Cloud PBX',
        icon: 'cloud-pbx-large',
        type: 'external',
    },
    {
        label: 'Sunrise Alarming Service',
        icon: 'alarming-service-large',
        type: 'external',
    },
    {
        label: 'Sync',
        icon: 'sync-large',
        type: 'external',
    },
    {
        label: 'Manage Role',
        icon: 'user-management-large',
        type: 'external',
    },
];
const mockAgentViewWidgets: (
    {
        label: string;
        icon: string;
        type: string;
    })[] = [
    {
        label: 'Business Numbers',
        icon: 'contact-numbers-large',
        type: '',
    },
    {
        label: 'Add Subscription',
        icon: 'mobile-check-large',
        type: '',
    },
    {
        label: 'Work Smart Marketplace',
        icon: 'work-smart-marketplace-large',
        type: 'external',
    },
    {
        label: 'Guides & Manuals',
        icon: 'manual-book-large',
        type: '',
    },
    {
        label: 'Support Tickets',
        icon: 'support-tickets-large',
        type: '',
    },
    {
        label: 'Account Management',
        icon: 'site-management-large',
        type: '',
    },
];
const mockMainAccountsList: (
    {
        title: string;
        subTitle: string;
        location: string;
        subAccounts: number;
        mainAccount: boolean;
        subAccountActive: boolean;
    })[] = [
    {
        title: 'Bigcorp HQ',
        subTitle: '8006002736',
        location: 'Zürich',
        subAccounts: 48,
        mainAccount: true,
        subAccountActive: false
    },
    {
        title: 'Big Clothing',
        subTitle: '8006002736',
        location: 'Wintherthur',
        subAccounts: 3,
        mainAccount: true,
        subAccountActive: false
    },
    {
        title: 'Big Holding',
        subTitle: '8006002736',
        location: 'Zürich',
        subAccounts: 0,
        mainAccount: true,
        subAccountActive: false
    },
    {
        title: 'Big Food',
        subTitle: '8006002736',
        location: 'Zug',
        subAccounts: 16,
        mainAccount: true,
        subAccountActive: false
    },
];
const mockSubAccountsList: (
    {
        title: string;
        subTitle: string;
        location: string;
        mainAccount: boolean;
        subAccountActive: boolean;
    })[] = [
    {
        title: 'Big Clothing',
        subTitle: '8006002736',
        location: 'Zürich',
        mainAccount: true,
        subAccountActive: false
    },
    {
        title: 'Management',
        subTitle: '8006002736',
        location: 'Wintherthur',
        mainAccount: false,
        subAccountActive: true
    },
    {
        title: 'Employees',
        subTitle: '8006002736',
        location: 'Zürich',
        mainAccount: false,
        subAccountActive: false
    },
    {
        title: 'Frontline Sales',
        subTitle: '8006002736',
        location: 'Zug',
        mainAccount: false,
        subAccountActive: true
    },
];
const mockAccountDetail: (
    {
        label: string;
        title: string;
        info: string;
        active: boolean;
        editMode: boolean;
    })[] = [
    {
        label: 'Name',
        title: 'Bigcorp HQ',
        info: '7593011047',
        active: false,
        editMode: true,
    },
    {
        label: 'Status',
        title: '',
        info: '',
        active: true,
        editMode: false,
    },
    {
        label: 'Type',
        title: 'Main Account',
        info: '',
        active: false,
        editMode: false,
    }
];
const mockSubAccountDetail: (
    {
        label: string;
        title: string;
        info: string;
        active: boolean;
        editMode: boolean;
    })[] = [
    {
        label: 'Name',
        title: 'Management',
        info: '7593011047',
        active: false,
        editMode: true,
    },
    {
        label: 'Status',
        title: '',
        info: '',
        active: true,
        editMode: true,
    },
    {
        label: 'Type',
        title: 'Sub Account',
        info: 'Bigcorp HQ',
        active: false,
        editMode: false,
    }
];
const mockBusinessCockpitSettings: (
    {
        title: string;
        subTitle: string;
        active: boolean;
    })[] = [
    {
        title: 'Buy National Options Via Credit Card',
        subTitle: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        active: true,
    },
    {
        title: 'Buy International Options Via Credit Card',
        subTitle: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        active: false,
    },
    {
        title: 'Enable change bill parameters and view of invoices',
        subTitle: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        active: true,
    }
];
export {
    mockAgentNavigation,
    mockAgentViewNavigation,
    mockAgentWidgets,
    mockAgentViewWidgets,
    mockMainAccountsList,
    mockSubAccountsList,
    mockAccountDetail,
    mockSubAccountDetail,
    mockBusinessCockpitSettings
};
