import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [


  {
    title: 'Dashbord',
    icon: 'shopping-cart-outline',
    link: '/pages/Static',
    home: true,
  },


  {
    title: 'AllReservation',
    icon: 'pi pi-user',
    link: '/pages/AllReservation',
    home: true,
  },
  {
    title: 'prix',
    icon: 'shopping-cart-outline',
    link: '/pages/prix',
    home: true,
  },

  {
    title: 'GestionPrix',
    icon: 'shopping-cart-outline',
    link: '/pages/gestionPrix',
    home: true,
  },
  {
    title: 'ServiceEtEquipement',
    icon: 'shopping-cart-outline',
    link: '/pages/ServiceEtEquipement',
    home: true,
  },
  
  {
    title: 'ListeAllReservation',
    icon: 'shopping-cart-outline',
    link: '/pages/ListeAllReservation',
    home: true,
  },

  {
    title: 'Gestion des Employes',
    icon: '',
    link: '/pages/gestionEmploye',
    home: true,
  },

  {
    title: 'Gestion Des Chambres',
    icon: 'pi pi-moon',
    link: '/pages/gestionChambre',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },


  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [


  {
    title: 'Hoteling',
    icon: 'shopping-cart-outline',
    link: '/pages/Hotel',
    home: true,
  },
  {
    title: 'dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/iot-dashboard',
    home: true,
  },
  {
    title: 'iot',
    icon: 'shopping-cart-outline',
    link: '/pages/iot',
    home: true,
  },
  {
    title: 'HotelAccepter',
    icon: 'home-outline',
    link: '/pages/hotelAccepter',
    home: true,
  },


  {
    title: 'FEATURES',
    group: true,
  },



  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
export const  Femme_Mengae_MENU_ITEMS: NbMenuItem[]=[

  {
    title: 'Chambres',
    icon: 'shopping-cart-outline',
    link: '/pages/Chambres',
    home: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
]
export const  Receptionniste_MENU_ITEMS: NbMenuItem[]=[

  {
    title: 'NotreMagasin',
    icon: 'shopping-cart-outline',
    link: '/pages/NotreMagasin',
    home: true,
  }, {
    title: 'AllReservation',
    icon: 'shopping-cart-outline',
    link: '/pages/AllReservation',
    home: true,
  },
  {
    title: 'Reservation',
    icon: 'shopping-cart-outline',
    link: '/pages/reservation',
    home: true,
  },
  {
    title: 'ReservationAffecter',
    icon: 'shopping-cart-outline',
    link: '/pages/reservationAffecter',
    home: true,
  },
  {
    title: 'gestionReservation',
    icon: 'shopping-cart-outline',
    link: '/pages/gestionReservation',
    home: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],}

]
export const  Chef_Chambre_MENU_ITEMS: NbMenuItem[]=[
  {
    title: 'gestion service',
    icon: 'shopping-cart-outline',
    link: '/pages/gestionService',
    home: true,
  },
  {
    title: 'RoomForCleaning',
    icon: 'shopping-cart-outline',
    link: '/pages/ChambresNettoyage',
    home: true,
  },

  {
    title: 'liste',
    icon: 'shopping-cart-outline',
    link: '/pages/Liste',
    home: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],}
]
export const MAGASINIER_MENU_ITEMS: NbMenuItem[]=[

  {
    title: 'NotreMagasin',
    icon: 'shopping-cart-outline',
    link: '/pages/NotreMagasin',
    home: true,
  },
  {
    title: 'Nouveau stock',
    icon: 'shopping-cart-outline',
    link: '/pages/AddStock',
    home: true,
  }, {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],}
]
export const BUINDIER_MENU_ITEMS: NbMenuItem[]=[

  {
    title: 'Espace De Buindier ',
    icon: 'shopping-cart-outline',
    link: '/pages/espace',
    home: true,
  },{
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],}
  ]

