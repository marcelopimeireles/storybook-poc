const mockNavigation: (
  {
    id: string;
    title: string;
    counter: number | null;
    iconSrc: string;
    state: string;
  })[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    counter: 1,
    iconSrc: '/assets/images/menu-icons/grid.svg',
    state: 'default',
  },
  {
    id: 'mobile',
    title: 'Mobile',
    counter: null,
    iconSrc: '/assets/images/menu-icons/mobile.svg',
    state: 'default',
  },
  {
    id: 'connectivity',
    title: 'Connectivity',
    counter: 4,
    iconSrc: '/assets/images/menu-icons/connectivity.svg',
    state: 'default',
  },
  {
    id: 'work',
    title: 'Work Smart',
    counter: null,
    iconSrc: '/assets/images/menu-icons/workSmart.svg',
    state: 'default',
  },
  {
    id: 'users',
    title: 'Portal Users',
    counter: null,
    iconSrc: '/assets/images/menu-icons/team.svg',
    state: 'default',
  },
  {
    id: 'invoices',
    title: 'Invoices',
    counter: 2,
    iconSrc: '/assets/images/menu-icons/invoices.svg',
    state: 'default',
  }
];

const mockNavigationState: {
  'dashboard': string,
  'mobile': string;
  'connectivity': string;
  'work': string;
  'users': string,
  'invoices': string,
} = {
  'dashboard': 'dashboard',
  'mobile': 'mobile',
  'connectivity': 'connectivity',
  'work': 'work',
  'users': 'users',
  'invoices': 'invoices',
};

const mockSubNavigation: (
  {
    id: string;
    title: string;
    counter: number | null;
    state: string;
  })[] = [
  {
    id: 'subscriptions',
    title: 'Subscriptions',
    counter: 1,
    state: 'default',
  },
  {
    id: 'actions',
    title: 'Actions',
    counter: null,
    state: 'default',
  },
  {
    id: 'orders',
    title: 'Orders',
    counter: 4,
    state: 'default',
  },
  {
    id: 'porting',
    title: 'Porting',
    counter: null,
    state: 'active',
  }
];

const mockSubNavigationState: {
  'subscriptions': string,
  'actions': string;
  'orders': string;
  'porting': string;
} = {
  'subscriptions': 'subscriptions',
  'actions': 'actions',
  'orders': 'orders',
  'porting': 'porting',
};

const mockWidgets: (
  {
    label: string;
    icon: string
    type: string;
  })[] = [
  {
    label: 'Business Voice Direct<br>test',
    icon: 'recording-service-large',
    type: '',
  },
  {
    label: 'Emergency Data',
    icon: 'emergency-data-large',
    type: '',
  },
  {
    label: 'Voice Recording',
    icon: 'voice-direct-large',
    type: '',
  },
  {
    label: 'Sunrise Cloud PBX',
    icon: 'cloud-pbx-large',
    type: 'external',
  },
  {
    label: 'Alarming Service',
    icon: 'alarming-service-large',
    type: 'external',
  },
  {
    label: 'Work Smart Marketplace',
    icon: 'work-smart-marketplace-large',
    type: 'external',
  },
  {
    label: 'Business Numbers',
    icon: 'contact-numbers-large',
    type: 'external',
  }
];

const mockWidgetsShort: (
    {
        label: string;
        icon: string
        type: string;
    })[] = [
    {
        label: 'Business Voice Direct',
        icon: 'recording-service-large',
        type: '',
    },
    {
        label: 'Emergency Data',
        icon: 'emergency-data-large',
        type: '',
    }
];

const mockSiteSelector: (
  {
    iconSrc: string;
    icon: string;
    site: string;
    code: string;
    active: boolean
  })[] = [
  {
    iconSrc: '',
    icon: 'company',
    site: 'Bigcorp HQ',
    code: '8002002404・Zürich',
    active: true,
  },
  // {
  //   iconSrc: '',
  //   icon: 'company-sub',
  //   site: 'Management',
  //   code: '8006002736・Zürich',
  //   active: false,
  // },
  // {
  //   iconSrc: '',
  //   icon: 'company-sub',
  //   site: 'Employees',
  //   code: '8000012395・Zürich',
  //   active: false,
  // },
  // {
  //   iconSrc: '',
  //   icon: 'company',
  //   site: 'Big Clothing',
  //   code: '8002058641・Winterthur',
  //   active: false,
  // },
  // {
  //   iconSrc: '',
  //   icon: 'company',
  //   site: 'Big Food',
  //   code: '8002058641・Zürich',
  //   active: false,
  // },
  // {
  //   iconSrc: '',
  //   icon: 'company-sub',
  //   site: 'Big Food Basel',
  //   code: '8002058641・Zürich',
  //   active: false,
  // }
];

const mockLanguageLinks: (
  {
    value: string
    label: string
    active: boolean
  })[] = [
  {
    value: 'en',
    label: 'En',
    active: true,
  },
  {
    value: 'de',
    label: 'De',
    active: false,
  },
  {
    value: 'fr',
    label: 'Fr',
    active: false,
  },
  {
    value: 'it',
    label: 'It',
    active: false,
  }
];
const mockSubscriptions: (
  {
    label: string;
    title: string;
    info: string;
    active: boolean;
    showState: boolean;
  })[] = [
  {
    label: 'Product',
    title: 'Bus. europe&US limited',
    info: '31.01.2020 – 30.01.2022',
    active: false,
    showState: false,
  },
  {
    label: 'Status',
    title: '',
    info: '',
    active: true,
    showState: true,
  },
  {
    label: 'Account',
    title: 'Bigcorp C Level',
    info: 'ID: 123456789',
    active: false,
    showState: false,
  }
];

const mockSimCards: (
  {
    active: boolean;
    stateLabel: string;
    stateColor: string;
    title: string;
    iccid: string;
    pin_puk: string;
    device: string;
    action: boolean;
  })[] = [
  {
    active: true,
    stateLabel: 'Active',
    stateColor: 'valid-color',
    title: 'Bus. europe&US limited',
    iccid: '89410212694400253273',
    pin_puk: '6460 / 17691829',
    device: 'Apple iPhone 11 Pro',
    action: false,
  },
  {
    active: true,
    stateColor: 'secondary-color',
    stateLabel: 'In Progress',
    title: 'extra SIM watch',
    iccid: '89410202684400328722',
    pin_puk: '1357 / 36773662',
    device: 'Apple Watch Series 3',
    action: false,
  },
  {
    active: true,
    stateColor: 'invalid-color',
    stateLabel: 'Blocked',
    title: 'extra SIM Business',
    iccid: '80032872289410202684',
    pin_puk: '6843 / 73662367',
    device: 'HP Pavilion Laptop',
    action: false,
  },
  {
    active: true,
    stateLabel: 'Active',
    stateColor: 'valid-color',
    title: 'Bus. europe&US limited',
    iccid: '89410212694400253273',
    pin_puk: '6460 / 17691829',
    device: 'Apple iPhone 11 Pro',
    action: true,
  },
  {
    active: true,
    stateColor: 'secondary-color',
    stateLabel: 'In Progress',
    title: 'extra SIM watch',
    iccid: '89410202684400328722',
    pin_puk: '1357 / 36773662',
    device: 'Apple Watch Series 3',
    action: true,
  },
  {
    active: true,
    stateColor: 'invalid-color',
    stateLabel: 'Blocked',
    title: 'extra SIM Business',
    iccid: '80032872289410202684',
    pin_puk: '6843 / 73662367',
    device: 'HP Pavilion Laptop',
    action: true,
  }
];

const mockOptionCards: (
  {
    title: string,
    info: string;
  })[] = [
  {
    title: 'Sunrise flat united kingdom',
    info: '',
  },
  {
    title: 'Sunrise flat germany',
    info: '',
  },
  {
    title: 'International Unlimited EU+/USA/CAN',
    info: '',
  }
];

const mockSettings: { title: string; items: { label: string; type: string, active: boolean }[] }[] = [
  {
    title: 'Fee Based Number In Switzerland',
    items: [
      {
        label: 'Allowed',
        type: 'radio',
        active: false,
      },
      {
        label: 'Only block 0906 numbers',
        type: 'radio',
        active: false,
      },
      {
        label: 'block all 090x numbers',
        type: 'radio',
        active: false,
      }
    ]
  },
  {
    title: 'International Calls',
    items: [
      {
        label: 'Block calls from Switzerland to other countries as well as calls from abroad to other countries' +
        ' (incl. Switzerland). Calls within within the country you located are still possible.',
        type: 'toggle',
        active: true,
      }
    ]
  },
  {
    title: 'Mobile Internet & MMS',
    items: [
      {
        label: 'Block mobile internet & MMS worldwide (incl Switzerland)',
        type: 'toggle',
        active: true,
      }
    ]
  },
  {
    title: 'Sunrise Pay',
    items: [
      {
        label: 'Block Sunrise Pay (All providers, such as Google Play Group, ACE Group)',
        type: 'toggle',
        active: false,
      }
    ]
  },
  {
    title: 'Premium SMS Messages',
    items: [
      {
        label: 'All',
        type: 'toggle',
        active: true,
      },
      {
        label: 'Adult',
        type: 'toggle',
        active: false,
      },
      {
        label: 'Operator Services',
        type: 'toggle',
        active: true,
      },
      {
        label: 'Food & Beverage',
        type: 'toggle',
        active: true,
      },
      {
        label: 'Public services',
        type: 'toggle',
        active: false,
      },
      {
        label: 'Donations',
        type: 'toggle',
        active: false,
      },
      {
        label: 'Info & Entertainment',
        type: 'toggle',
        active: true,
      }
    ]
  },
  {
    title: 'Block SMS Short Codes',
    items: [
      {
        label: 'Block individual short codes',
        type: 'toggle',
        active: false,
      },
      {
        label: 'Block all SMS short codes',
        type: 'toggle',
        active: true,
      }
    ]
  },
];
const colors: {
  'primary': string;
  'primary dark': string;
  'secondary': string;
  'secondary light': string;
  'promo': string,
  'valid': string,
  'invalid': string,
  'dark': string,
  'gray2': string,
  'gray4': string,
  'white': string,
  'alpha': string,
  'black': string
} = {
  'primary': 'primary-color',
  'primary dark': 'primary-color-dark',
  'secondary': 'secondary-color',
  'secondary light': 'secondary-color-light',
  'promo': 'promo-color',
  'valid': 'valid-color',
  'invalid': 'invalid-color',
  'dark': 'dark-color',
  'gray2': 'gray2-color',
  'gray4': 'gray4-color',
  'white': 'white-color',
  'alpha': 'alpha-color',
  'black': 'black'
};

const icon: {
  'none': string,
  'account filled': string;
  'company': string;
  'fqs': string;
  'guides manuals': string,
  'invoices': string,
  'settings': string,
  'circle success': string,
} = {
  'none': '',
  'account filled': 'account-filled',
  'company': 'company',
  'fqs': 'question_filled',
  'guides manuals': 'manual-book',
  'invoices': 'invoices',
  'settings': 'settings',
  'circle success': 'circle-success',
};

const mockWidgetsSelection: (
    {
        label: string;
        icon: string;
        active: boolean;
    })[] = [
    {
        label: 'Business Voice Direct',
        icon: 'recording-service-large',
        active: false,
    },
    {
        label: 'Emergency Data',
        icon: 'emergency-data-large',
        active: true,
    },
    {
        label: 'Voice Recording',
        icon: 'voice-direct-large',
        active: false,
    },
    {
        label: 'Sunrise Cloud PBX',
        icon: 'cloud-pbx-large',
        active: false,
    },
    {
        label: 'Alarming Service',
        icon: 'alarming-service-large',
        active: false,
    },
    {
        label: 'Work Smart Marketplace',
        icon: 'work-smart-marketplace-large',
        active: true,
    },
    {
        label: 'Business Numbers',
        icon: 'contact-numbers-large',
        active: false,
    },
    {
        label: 'Business Voice Direct',
        icon: 'recording-service-large',
        active: false,
    },
    {
        label: 'Emergency Data',
        icon: 'emergency-data-large',
        active: true,
    },
    {
        label: 'Voice Recording',
        icon: 'voice-direct-large',
        active: false,
    },
    {
        label: 'Sunrise Cloud PBX',
        icon: 'cloud-pbx-large',
        active: false,
    },
    {
        label: 'Alarming Service',
        icon: 'alarming-service-large',
        active: false,
    },
    {
        label: 'Work Smart Marketplace',
        icon: 'work-smart-marketplace-large',
        active: true,
    },
    {
        label: 'Business Numbers',
        icon: 'contact-numbers-large',
        active: false,
    }
];

export {
  mockNavigation,
  mockNavigationState,
  mockSubNavigation,
  mockSubNavigationState,
  mockWidgets,
  mockWidgetsShort,
  mockSiteSelector,
  mockLanguageLinks,
  mockSubscriptions,
  mockSimCards,
  mockOptionCards,
  mockSettings,
  colors,
  icon,
  mockWidgetsSelection
};
