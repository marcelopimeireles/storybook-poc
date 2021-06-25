const mockExtraSims: (
  {
    title: string;
    description: string;
    thumb: string;
    state: string;
    stateColor: string;
  })[] = [
  {
    title: 'Extra SIM surf & talk',
    description: 'Huawei Nova ST',
    thumb: '/assets/images/sbc/device.png',
    state: 'Active',
    stateColor: 'valid-color',
  },
  {
    title: 'Extra SIM surf & talk',
    description: 'Huawei Nova ST',
    thumb: '/assets/images/sbc/device.png',
    state: 'Active',
    stateColor: 'valid-color',
  },
  {
    title: 'Extra SIM surf & talk',
    description: 'Huawei Nova ST',
    thumb: '/assets/images/sbc/device.png',
    state: 'Inactive',
    stateColor: 'invalid-color',
  },
  {
    title: 'Extra SIM surf & talk',
    description: 'Huawei Nova ST',
    thumb: '/assets/images/sbc/device.png',
    state: 'Active',
    stateColor: 'valid-color',
  },
  {
    title: 'Extra SIM surf & talk',
    description: 'Huawei Nova ST',
    thumb: '/assets/images/sbc/device.png',
    state: 'In progress',
    stateColor: 'secondary-color',
  }
];

const mockSelectService: (
  {
    title: string;
    description: string;
    disabled: boolean;
    buttonLabel: string;
    buttonDisabled: boolean;
    hideButton: boolean;
    action: string;
  })[] = [
  {
    title: 'Special options',
    description: 'Optimize your Business Mobile Subscription with our Special Options.',
    disabled: false,
    buttonLabel: 'To the options',
    buttonDisabled: false,
    hideButton: false,
    action: '(event) => { alert("element 1"); }',
  },
  {
    title: 'Special options',
    description: 'Optimize your Business Mobile Subscription with our Special Options.',
    disabled: true,
    buttonLabel: 'To the options',
    buttonDisabled: true,
    hideButton: false,
    action: '(event) => { alert("element 2"); }',
  },
  {
    title: 'Special options',
    description: 'Optimize your Business Mobile Subscription with our Special Options.',
    disabled: false,
    buttonLabel: 'To the options',
    buttonDisabled: false,
    hideButton: true,
    action: '(event) => { alert("element 3"); }',
  },
  {
    title: 'Special options',
    description: 'Optimize your Business Mobile Subscription with our Special Options.',
    disabled: false,
    buttonLabel: 'To the options',
    buttonDisabled: false,
    hideButton: false,
    action: '(event) => { alert("element 4"); }',
  },
  {
    title: 'Special options',
    description: 'Optimize your Business Mobile Subscription with our Special Options.',
    disabled: false,
    buttonLabel: 'To the options',
    buttonDisabled: false,
    hideButton: false,
    action: '(event) => { alert("element 5"); }',
  }
];

const mockBucketsList: (
  {
    icon: string;
    type: string;
    description: string;
  })[] = [
  {
    icon: 'check-small',
    type: 'SMS',
    description: 'Unlimited in CH and in 95 countries h-speed 5G data in CH. 40 GB',
  },
  {
    icon: '',
    type: 'Data',
    description: 'Europe and USA. 5 GB per month in zone A',
  },
  {
    icon: 'check-small',
    type: 'Calls',
    description: 'CH and in 95 countries',
  }
];

const mockBucketCredits: (
  {
    icon: string;
    type: string;
    title: string;
    description: string;
  })[] = [
  {
    icon: '/assets/images/sbc/icon_1.png',
    type: 'Calls',
    title: 'Voice Title',
    description: 'Unlimited in switzerland and neighboring countries',
  },
  {
    icon: '/assets/images/sbc/icon_2.png',
    type: 'SMS',
    title: 'SMS Title',
    description: 'Unlimited in switzerland and neighboring countries',
  },
  {
    icon: '/assets/images/sbc/icon_3.png',
    type: 'Data',
    title: 'Data Title',
    description: 'h-speed 4G in CH and 40GB neighbouring countries',
  },
  {
    icon: '/assets/images/sbc/icon_2.png',
    type: 'MMS',
    title: 'MMS Title',
    description: '',
  },
  {
    icon: '/assets/images/sbc/icon_4.png',
    type: 'WHATSAPP',
    title: '',
    description: 'WhatsApp Description',
  }
];

const mockLanguages: {
  en: string,
  de: string,
  fr: string,
  it: string,
} = {
  'en': 'en',
  'de': 'de',
  'fr': 'fr',
  'it': 'it',
};

const mockSbcMenu: { label: string; item: { label: string; icon: string }[] }[] = [
  {
    label: 'My SBC',
    item: [
      {
        label: 'Profile',
        icon: 'account-filled',
      },
      {
        label: 'Credit card',
        icon: 'mobile',
      }
    ]
  },
  {
    label: 'Billing',
    item: [
      {
        label: 'Invoices',
        icon: 'invoices',
      },
      {
        label: 'Settings',
        icon: 'settings-gear',
      }
    ]
  },
  {
    label: 'Service Management',
    item: [
      {
        label: 'Recording Service',
        icon: 'megaphone',
      },
      {
        label: 'Location Lookup',
        icon: 'pin',
      }
    ]
  },
  {
    label: 'Help',
    item: []
  },
  {
    label: 'Logout',
    item: []
  }
];
export {
  mockExtraSims,
  mockSelectService,
  mockBucketsList,
  mockBucketCredits,
  mockLanguages,
  mockSbcMenu
};
