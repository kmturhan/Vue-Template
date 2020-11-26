"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Boxed = _interopRequireDefault(require("Container/Boxed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// dashboard components
var Ecommerce = function Ecommerce() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/dashboard/Ecommerce'));
  });
};

var WebAnalytics = function WebAnalytics() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/dashboard/WebAnalytics'));
  });
};

var Magazine = function Magazine() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/dashboard/Magazine'));
  });
};

var News = function News() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/dashboard/News'));
  });
};

var Agency = function Agency() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/dashboard/Agency'));
  });
};

var Saas = function Saas() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/dashboard/Saas'));
  });
}; // Crypto components


var Crypto = function Crypto() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/crypto/Crypto'));
  });
};

var MarketCap = function MarketCap() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/crypto/MarketCap'));
  });
};

var Wallet = function Wallet() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/crypto/Wallet'));
  });
};

var Trade = function Trade() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/crypto/Trade'));
  });
}; // CRM components


var Projects = function Projects() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/crm/Projects'));
  });
};

var ProjectDetails = function ProjectDetails() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/crm/ProjectDetails'));
  });
};

var Clients = function Clients() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/crm/Clients'));
  });
};

var Reports = function Reports() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/crm/Reports'));
  });
};

var Dashboard = function Dashboard() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/crm/Dashboard'));
  });
}; //courses components


var Courses = function Courses() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/courses/Courses'));
  });
};

var CourseList = function CourseList() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/courses/CourseList'));
  });
};

var CoursesDetail = function CoursesDetail() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/courses/CoursesDetail'));
  });
};

var SignIn = function SignIn() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/courses/SignIn'));
  });
};

var Payment = function Payment() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/courses/Payment'));
  });
}; // Widgets component


var ChartWidgets = function ChartWidgets() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/widgets/chart-widgets/ChartWidgets'));
  });
};

var UserWidgets = function UserWidgets() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/widgets/user-widgets/UserWidgets'));
  });
}; //Ecommerce Widgets


var ShopWithAlgolia = function ShopWithAlgolia() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ecommerce/ShopWithAlgolia'));
  });
};

var Shop = function Shop() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ecommerce/Shop'));
  });
};

var ProductDetail = function ProductDetail() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ecommerce/ProductDetail'));
  });
};

var AddProduct = function AddProduct() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ecommerce/AddProduct'));
  });
};

var EditProduct = function EditProduct() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ecommerce/EditProduct'));
  });
};

var EditDetail = function EditDetail() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ecommerce/EditDetail'));
  });
};

var Cart = function Cart() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ecommerce/Cart'));
  });
};

var Checkout = function Checkout() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ecommerce/Checkout'));
  });
};

var CreditCard = function CreditCard() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ecommerce/CreditCard'));
  });
}; // Inbox component


var Inbox = function Inbox() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/inbox/Inbox'));
  });
}; // chat component


var Chat = function Chat() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/chat/Chat'));
  });
}; // calendar components


var Calendar = function Calendar() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/calendar/Calendar'));
  });
}; // ui components


var AppBars = function AppBars() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/AppBars'));
  });
};

var Banners = function Banners() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Banners'));
  });
};

var ListItemGroups = function ListItemGroups() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/ListItemGroups'));
  });
};

var SlideGroups = function SlideGroups() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/SlideGroups'));
  });
};

var Overlays = function Overlays() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Overlays'));
  });
};

var ChipGroups = function ChipGroups() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/ChipGroups'));
  });
};

var FileInput = function FileInput() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/FileInput'));
  });
};

var ColorPickers = function ColorPickers() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/ColorPickers'));
  });
};

var Buttons = function Buttons() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Buttons'));
  });
};

var Cards = function Cards() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Cards'));
  });
};

var Grid = function Grid() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Grid'));
  });
};

var Groups = function Groups() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Groups'));
  });
};

var Hover = function Hover() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Hover'));
  });
};

var Images = function Images() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Images'));
  });
};

var List = function List() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/List'));
  });
};

var Menu = function Menu() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Menu'));
  });
};

var Ratings = function Ratings() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Ratings'));
  });
};

var Slider = function Slider() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Slider'));
  });
};

var Snackbar = function Snackbar() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Snackbar'));
  });
};

var Tooltip = function Tooltip() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Tooltip'));
  });
};

var Dialog = function Dialog() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Dialog'));
  });
};

var Select = function Select() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Select'));
  });
};

var Input = function Input() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Input'));
  });
};

var Checkbox = function Checkbox() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Checkbox'));
  });
};

var Radio = function Radio() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Radio'));
  });
};

var Toolbar = function Toolbar() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Toolbar'));
  });
};

var Progress = function Progress() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Progress'));
  });
};

var Tabs = function Tabs() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Tabs'));
  });
};

var Carousel = function Carousel() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Carousel'));
  });
};

var Chips = function Chips() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Chips'));
  });
};

var Datepicker = function Datepicker() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Datepicker'));
  });
};

var Timepicker = function Timepicker() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/ui-elements/Timepicker'));
  });
}; // chart components


var VueChartjs = function VueChartjs() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/charts/VueChartjs'));
  });
};

var VueEcharts = function VueEcharts() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/charts/VueEcharts'));
  });
}; // maps views


var GoogleMaps = function GoogleMaps() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/maps/GoogleMaps'));
  });
};

var LeafletMaps = function LeafletMaps() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/maps/LeafletMaps'));
  });
}; // Pages views


var Blank = function Blank() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/pages/Blank'));
  });
};

var Blog = function Blog() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/pages/Blog'));
  });
};

var Gallery = function Gallery() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/pages/Gallery'));
  });
};

var Pricing1 = function Pricing1() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/pages/Pricing-1'));
  });
};

var Pricing2 = function Pricing2() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/pages/Pricing-2'));
  });
}; // users views


var UserProfile = function UserProfile() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/users/UserProfile'));
  });
};

var UsersList = function UsersList() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/users/UsersList'));
  });
}; // drag-drop components


var Vue2Dragula = function Vue2Dragula() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/drag-drop/Vue2Dragula'));
  });
};

var VueDraggable = function VueDraggable() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/drag-drop/Vuedraggable'));
  });
};

var VueDraggableResizeable = function VueDraggableResizeable() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/drag-drop/VueDraggableResizable'));
  });
}; // icons components


var Themify = function Themify() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/icons/Themify'));
  });
};

var Material = function Material() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/icons/Material'));
  });
}; // editor components


var QuillEditor = function QuillEditor() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/editor/QuillEditor'));
  });
};

var WYSIWYG = function WYSIWYG() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/editor/WYSIWYG'));
  });
}; // form componenets


var FormValidation = function FormValidation() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/forms/FormValidation'));
  });
};

var Stepper = function Stepper() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/forms/Stepper'));
  });
}; // Data table componenets


var SimpleTable = function SimpleTable() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/tables/SimpleTable'));
  });
};

var Standard = function Standard() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/tables/Standard'));
  });
};

var Slots = function Slots() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/tables/Slots'));
  });
};

var SelectableRows = function SelectableRows() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/tables/SelectableRows'));
  });
};

var SearchWithText = function SearchWithText() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/tables/SearchWithText'));
  });
}; // Timelines component 


var Usage = function Usage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/timelines/Usage'));
  });
};

var SmallDots = function SmallDots() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/timelines/SmallDots'));
  });
};

var IconDots = function IconDots() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/timelines/IconDots'));
  });
};

var ColoredDots = function ColoredDots() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/timelines/ColoredDots'));
  });
};

var OppositeSlot = function OppositeSlot() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/timelines/OppositeSlot'));
  });
};

var DenseAlert = function DenseAlert() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/timelines/DenseAlert'));
  });
};

var Advanced = function Advanced() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/timelines/Advanced'));
  });
}; // Treeview component


var Treeview = function Treeview() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/treeview/Treeview'));
  });
}; // Extensions components


var ImageCropper = function ImageCropper() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/extensions/ImageCropper'));
  });
};

var VideoPlayer = function VideoPlayer() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/extensions/VideoPlayer'));
  });
};

var Dropzone = function Dropzone() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('Views/extensions/Dropzone'));
  });
};

var _default = {
  path: '/boxed',
  component: _Boxed["default"],
  redirect: '/boxed/dashboard/ecommerce',
  children: [{
    component: Ecommerce,
    path: '/boxed/dashboard/ecommerce',
    meta: {
      requiresAuth: true,
      title: 'message.ecommerce',
      breadcrumb: null
    }
  }, {
    component: WebAnalytics,
    path: '/boxed/dashboard/web-analytics',
    meta: {
      requiresAuth: true,
      title: 'message.webAnalytics',
      breadcrumb: null
    }
  }, {
    component: Magazine,
    path: '/boxed/dashboard/magazine',
    meta: {
      requiresAuth: true,
      title: 'message.magazineAndNews',
      breadcrumb: null
    }
  }, {
    component: News,
    path: '/boxed/dashboard/news',
    meta: {
      requiresAuth: true,
      title: 'message.news',
      breadcrumb: null
    }
  }, {
    component: Agency,
    path: '/boxed/dashboard/agency',
    meta: {
      requiresAuth: true,
      title: 'message.agency',
      breadcrumb: null
    }
  }, {
    component: Saas,
    path: '/boxed/dashboard/saas',
    meta: {
      requiresAuth: true,
      title: 'message.saas',
      breadcrumb: null
    }
  }, {
    path: '/boxed/dashboard/crypto',
    component: Crypto,
    meta: {
      requiresAuth: true,
      title: 'message.crypto',
      breadcrumb: [{
        breadcrumbInactive: 'Crypto /'
      }, {
        breadcrumbActive: 'Crypto'
      }]
    }
  }, {
    path: '/boxed/crypto/market-cap',
    component: MarketCap,
    meta: {
      requiresAuth: true,
      title: 'message.market-cap',
      breadcrumb: [{
        breadcrumbInactive: 'Crypto /'
      }, {
        breadcrumbActive: 'MarketCap'
      }]
    }
  }, {
    path: '/boxed/crypto/trade',
    component: Trade,
    meta: {
      requiresAuth: true,
      title: 'message.trade',
      breadcrumb: [{
        breadcrumbInactive: 'Crypto /'
      }, {
        breadcrumbActive: 'Trade'
      }]
    }
  }, {
    path: '/boxed/crypto/wallet',
    component: Wallet,
    meta: {
      requiresAuth: true,
      title: 'message.wallet',
      breadcrumb: [{
        breadcrumbInactive: 'Crypto /'
      }, {
        breadcrumbActive: 'Wallet'
      }]
    }
  }, {
    path: '/boxed/crm/projects',
    component: Projects,
    meta: {
      requiresAuth: true,
      title: 'message.projects',
      breadcrumb: [{
        breadcrumbInactive: 'CRM /'
      }, {
        breadcrumbActive: 'Projects'
      }]
    }
  }, {
    path: '/boxed/crm/projectDetails/:id',
    component: ProjectDetails,
    meta: {
      requiresAuth: true,
      title: 'message.projectDetails',
      breadcrumb: [{
        breadcrumbInactive: 'CRM /'
      }, {
        breadcrumbActive: 'projectDetails'
      }]
    }
  }, {
    path: '/boxed/crm/clients',
    component: Clients,
    meta: {
      requiresAuth: true,
      title: 'message.clients',
      breadcrumb: [{
        breadcrumbInactive: 'CRM /'
      }, {
        breadcrumbActive: 'Clients'
      }]
    }
  }, {
    path: '/boxed/crm/reports',
    component: Reports,
    meta: {
      requiresAuth: true,
      title: 'message.reports',
      breadcrumb: [{
        breadcrumbInactive: 'CRM /'
      }, {
        breadcrumbActive: 'Reports'
      }]
    }
  }, {
    path: '/boxed/dashboard/crm',
    component: Dashboard,
    meta: {
      requiresAuth: true,
      title: 'message.dashboard',
      breadcrumb: [{
        breadcrumbInactive: 'CRM /'
      }, {
        breadcrumbActive: 'Dashboard'
      }]
    }
  }, {
    path: '/boxed/courses',
    component: Courses,
    meta: {
      requiresAuth: true,
      title: 'message.courses',
      breadcrumb: [{
        breadcrumbInactive: 'Courses /'
      }, {
        breadcrumbActive: 'Courses'
      }]
    }
  }, {
    path: '/boxed/courses/courses-list',
    component: CourseList,
    meta: {
      requiresAuth: true,
      title: 'message.coursesList',
      breadcrumb: [{
        breadcrumbInactive: 'Courses /'
      }, {
        breadcrumbActive: 'List'
      }]
    }
  }, {
    path: '/boxed/courses/courses-detail',
    component: CoursesDetail,
    meta: {
      requiresAuth: true,
      title: 'message.courseDetail',
      breadcrumb: [{
        breadcrumbInactive: 'Courses /'
      }, {
        breadcrumbActive: 'Detail'
      }]
    }
  }, {
    path: '/boxed/courses/sign-in',
    component: SignIn,
    meta: {
      requiresAuth: true,
      title: 'message.signIn',
      breadcrumb: [{
        breadcrumbInactive: 'Courses /'
      }, {
        breadcrumbActive: 'Sign In'
      }]
    }
  }, {
    path: '/boxed/courses/payment',
    component: Payment,
    meta: {
      requiresAuth: true,
      title: 'message.payment',
      breadcrumb: [{
        breadcrumbInactive: 'Courses /'
      }, {
        breadcrumbActive: 'Payment'
      }]
    }
  }, {
    path: '/boxed/widgets/user-widgets',
    component: UserWidgets,
    meta: {
      requiresAuth: true,
      title: 'message.user',
      breadcrumb: [{
        breadcrumbInactive: 'Widgets /'
      }, {
        breadcrumbActive: 'User'
      }]
    }
  }, {
    path: '/boxed/widgets/chart-widgets',
    component: ChartWidgets,
    meta: {
      requiresAuth: true,
      title: 'message.charts',
      breadcrumb: [{
        breadcrumbInactive: 'Widgets /'
      }, {
        breadcrumbActive: 'Charts'
      }]
    }
  }, {
    path: '/boxed/ecommerce/shop-with-algolia',
    component: ShopWithAlgolia,
    meta: {
      requiresAuth: true,
      title: 'message.shopWtihAlgolia',
      breadcrumb: [{
        breadcrumbInactive: 'Ecommerce /'
      }, {
        breadcrumbActive: 'Shop With Algolia'
      }]
    }
  }, {
    path: '/boxed/ecommerce/shop',
    component: Shop,
    meta: {
      requiresAuth: true,
      title: 'message.shop',
      breadcrumb: [{
        breadcrumbInactive: 'Ecommerce /'
      }, {
        breadcrumbActive: 'Shop'
      }]
    }
  }, {
    path: '/boxed/ecommerce/product-detail/:category/:id',
    component: ProductDetail,
    meta: {
      requiresAuth: true,
      title: 'message.productDetail',
      breadcrumb: [{
        breadcrumbInactive: 'Ecommerce /'
      }, {
        breadcrumbActive: 'Product Detail'
      }]
    }
  }, {
    path: '/boxed/ecommerce/add-product',
    component: AddProduct,
    meta: {
      requiresAuth: true,
      title: 'message.addProduct',
      breadcrumb: [{
        breadcrumbInactive: 'Ecommerce /'
      }, {
        breadcrumbActive: 'Add Product'
      }]
    }
  }, {
    path: '/boxed/ecommerce/edit-product',
    component: EditProduct,
    meta: {
      requiresAuth: true,
      title: 'message.editProduct',
      breadcrumb: [{
        breadcrumbInactive: 'Ecommerce /'
      }, {
        breadcrumbActive: 'Edit Product'
      }]
    }
  }, {
    path: '/boxed/ecommerce/edit-detail/:category/:id',
    component: EditDetail,
    meta: {
      requiresAuth: true,
      title: 'message.editDetail',
      breadcrumb: [{
        breadcrumbInactive: 'Ecommerce /'
      }, {
        breadcrumbActive: 'Edit Detail'
      }]
    }
  }, {
    path: '/boxed/ecommerce/cart',
    component: Cart,
    meta: {
      requiresAuth: true,
      title: 'message.cart',
      breadcrumb: [{
        breadcrumbInactive: 'Ecommerce /'
      }, {
        breadcrumbActive: 'Cart'
      }]
    }
  }, {
    path: '/boxed/ecommerce/checkout',
    component: Checkout,
    meta: {
      requiresAuth: true,
      title: 'message.checkout',
      breadcrumb: [{
        breadcrumbInactive: 'Ecommerce /'
      }, {
        breadcrumbActive: 'Checkout'
      }]
    }
  }, {
    path: '/boxed/ecommerce/cards',
    component: CreditCard,
    meta: {
      requiresAuth: true,
      title: 'message.cards',
      breadcrumb: [{
        breadcrumbInactive: 'Ecommerce /'
      }, {
        breadcrumbActive: 'Cards'
      }]
    }
  }, {
    path: '/boxed/pages/blog',
    component: Blog,
    meta: {
      requiresAuth: true,
      title: 'message.blog',
      breadcrumb: [{
        breadcrumbInactive: 'Pages /'
      }, {
        breadcrumbActive: 'Blog'
      }]
    }
  }, {
    component: Gallery,
    path: '/boxed/pages/gallery',
    meta: {
      requiresAuth: true,
      title: 'message.gallery',
      breadcrumb: [{
        breadcrumbInactive: 'Pages /'
      }, {
        breadcrumbActive: 'Gallery'
      }]
    }
  }, {
    component: Pricing1,
    path: '/boxed/pages/pricing-1',
    meta: {
      requiresAuth: true,
      title: 'message.pricing1',
      breadcrumb: [{
        breadcrumbInactive: 'Pages /'
      }, {
        breadcrumbActive: 'Pricing-1'
      }]
    }
  }, {
    component: Pricing2,
    path: '/boxed/pages/pricing-2',
    meta: {
      requiresAuth: true,
      title: 'message.pricing2',
      breadcrumb: [{
        breadcrumbInactive: 'Pages /'
      }, {
        breadcrumbActive: 'Pricing-2'
      }]
    }
  }, {
    component: Blank,
    path: '/boxed/pages/blank',
    meta: {
      requiresAuth: true,
      title: 'message.blank',
      breadcrumb: [{
        breadcrumbInactive: 'Pages /'
      }, {
        breadcrumbActive: 'Blank'
      }]
    }
  }, {
    component: Inbox,
    path: '/boxed/inbox',
    meta: {
      requiresAuth: true,
      title: 'message.inbox',
      breadcrumb: null
    }
  }, {
    component: Chat,
    path: '/boxed/chat',
    meta: {
      requiresAuth: true,
      title: 'message.chat',
      breadcrumb: null
    }
  }, {
    path: '/boxed/treeview',
    component: Treeview,
    meta: {
      requiresAuth: true,
      title: 'message.treeview',
      breadcrumb: [{
        breadcrumbInactive: null
      }, {
        breadcrumbActive: 'Treeview'
      }]
    }
  }, // Timelines Components
  {
    path: '/boxed/timelines/usage',
    component: Usage,
    meta: {
      requiresAuth: true,
      title: 'message.usage',
      breadcrumb: [{
        breadcrumbInactive: 'Timelines /'
      }, {
        breadcrumbActive: "Usage"
      }]
    }
  }, {
    path: '/boxed/timelines/smalldots',
    component: SmallDots,
    meta: {
      requiresAuth: true,
      title: 'message.smallDots',
      breadcrumb: [{
        breadcrumbInactive: 'Timelines /'
      }, {
        breadcrumbActive: "Small Dots"
      }]
    }
  }, {
    path: '/boxed/timelines/icondots',
    component: IconDots,
    meta: {
      requiresAuth: true,
      title: 'message.iconDots',
      breadcrumb: [{
        breadcrumbInactive: 'Timelines /'
      }, {
        breadcrumbActive: "Icon Dots"
      }]
    }
  }, {
    path: '/boxed/timelines/coloreddots',
    component: ColoredDots,
    meta: {
      requiresAuth: true,
      title: 'message.coloredDots',
      breadcrumb: [{
        breadcrumbInactive: 'Timelines /'
      }, {
        breadcrumbActive: "Colored Dots"
      }]
    }
  }, {
    path: '/boxed/timelines/oppositeslot',
    component: OppositeSlot,
    meta: {
      requiresAuth: true,
      title: 'message.oppositeSlot',
      breadcrumb: [{
        breadcrumbInactive: 'Timelines /'
      }, {
        breadcrumbActive: "Opposite Slot"
      }]
    }
  }, {
    path: '/boxed/timelines/densealert',
    component: DenseAlert,
    meta: {
      requiresAuth: true,
      title: 'message.denseAlert',
      breadcrumb: [{
        breadcrumbInactive: 'Timelines /'
      }, {
        breadcrumbActive: "Dense Alert"
      }]
    }
  }, {
    path: '/boxed/timelines/advanced',
    component: Advanced,
    meta: {
      requiresAuth: true,
      title: 'message.advanced',
      breadcrumb: [{
        breadcrumbInactive: 'Timelines /'
      }, {
        breadcrumbActive: "Advanced"
      }]
    }
  }, {
    path: '/boxed/ui-elements/app-bars',
    component: AppBars,
    meta: {
      requiresAuth: true,
      title: 'message.appBars',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'App Bars'
      }]
    }
  }, {
    path: '/boxed/ui-elements/banners',
    component: Banners,
    meta: {
      requiresAuth: true,
      title: 'message.banners',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Banners'
      }]
    }
  }, {
    path: '/boxed/ui-elements/list-item-groups',
    component: ListItemGroups,
    meta: {
      requiresAuth: true,
      title: 'message.ListItemGroups',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'List Item Groups'
      }]
    }
  }, {
    path: '/boxed/ui-elements/slide-groups',
    component: SlideGroups,
    meta: {
      requiresAuth: true,
      title: 'message.slideGroups',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Slide Groups'
      }]
    }
  }, {
    path: '/boxed/ui-elements/chip-groups',
    component: ChipGroups,
    meta: {
      requiresAuth: true,
      title: 'message.chipGroups',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Chip Groups'
      }]
    }
  }, {
    path: '/boxed/ui-elements/overlays',
    component: Overlays,
    meta: {
      requiresAuth: true,
      title: 'message.overlays',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'overlays'
      }]
    }
  }, {
    path: '/boxed/ui-elements/file-input',
    component: FileInput,
    meta: {
      requiresAuth: true,
      title: 'message.fileInput',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'File Input'
      }]
    }
  }, {
    path: '/boxed/ui-elements/color-pickers',
    component: ColorPickers,
    meta: {
      requiresAuth: true,
      title: 'message.colorPickers',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Color Picker'
      }]
    }
  }, {
    component: Buttons,
    path: '/boxed/ui-elements/buttons',
    meta: {
      requiresAuth: true,
      title: 'message.buttons',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Buttons'
      }]
    }
  }, {
    component: Cards,
    path: '/boxed/ui-elements/cards',
    meta: {
      requiresAuth: true,
      title: 'message.cards',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Cards'
      }]
    }
  }, {
    component: Checkbox,
    path: '/boxed/ui-elements/checkbox',
    meta: {
      requiresAuth: true,
      title: 'message.checkbox',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Checkbox'
      }]
    }
  }, {
    component: Carousel,
    path: '/boxed/ui-elements/carousel',
    meta: {
      requiresAuth: true,
      title: 'message.carousel',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Carousel'
      }]
    }
  }, {
    component: Chips,
    path: '/boxed/ui-elements/chips',
    meta: {
      requiresAuth: true,
      title: 'message.chips',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Chips'
      }]
    }
  }, {
    component: Datepicker,
    path: '/boxed/ui-elements/datepicker',
    meta: {
      requiresAuth: true,
      title: 'message.datepicker',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Datepicker'
      }]
    }
  }, {
    component: Dialog,
    path: '/boxed/ui-elements/dialog',
    meta: {
      requiresAuth: true,
      title: 'message.dialog',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Dialog'
      }]
    }
  }, {
    component: Grid,
    path: '/boxed/ui-elements/grid',
    meta: {
      requiresAuth: true,
      title: 'message.grid',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Grid'
      }]
    }
  }, {
    path: '/boxed/ui-elements/groups',
    component: Groups,
    meta: {
      requiresAuth: true,
      title: 'message.groups',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Groups'
      }]
    }
  }, {
    path: '/boxed/ui-elements/hover',
    component: Hover,
    meta: {
      requiresAuth: true,
      title: 'message.hover',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Hover'
      }]
    }
  }, {
    path: '/boxed/ui-elements/images',
    component: Images,
    meta: {
      requiresAuth: true,
      title: 'message.images',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Images'
      }]
    }
  }, {
    component: Input,
    path: '/boxed/ui-elements/input',
    meta: {
      requiresAuth: true,
      title: 'message.input',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Input'
      }]
    }
  }, {
    component: List,
    path: '/boxed/ui-elements/list',
    meta: {
      requiresAuth: true,
      title: 'message.list',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'List'
      }]
    }
  }, {
    component: Menu,
    path: '/boxed/ui-elements/menu',
    meta: {
      requiresAuth: true,
      title: 'message.menu',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Menu'
      }]
    }
  }, {
    path: '/boxed/ui-elements/ratings',
    component: Ratings,
    meta: {
      requiresAuth: true,
      title: 'message.ratings',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Ratings'
      }]
    }
  }, {
    component: Progress,
    path: '/boxed/ui-elements/progress',
    meta: {
      requiresAuth: true,
      title: 'message.progress',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Progress'
      }]
    }
  }, {
    component: Radio,
    path: '/boxed/ui-elements/radio',
    meta: {
      requiresAuth: true,
      title: 'message.radio',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Radio'
      }]
    }
  }, {
    component: Select,
    path: '/boxed/ui-elements/select',
    meta: {
      requiresAuth: true,
      title: 'message.select',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Select'
      }]
    }
  }, {
    component: Slider,
    path: '/boxed/ui-elements/slider',
    meta: {
      requiresAuth: true,
      title: 'message.slider',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Slider'
      }]
    }
  }, {
    component: Snackbar,
    path: '/boxed/ui-elements/snackbar',
    meta: {
      requiresAuth: true,
      title: 'message.snackbar',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Snackbar'
      }]
    }
  }, {
    component: Tabs,
    path: '/boxed/ui-elements/tabs',
    meta: {
      requiresAuth: true,
      title: 'message.tabs',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Tabs'
      }]
    }
  }, {
    component: Toolbar,
    path: '/boxed/ui-elements/toolbar',
    meta: {
      requiresAuth: true,
      title: 'message.toolbar',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Toolbar'
      }]
    }
  }, {
    component: Tooltip,
    path: '/boxed/ui-elements/tooltip',
    meta: {
      requiresAuth: true,
      title: 'message.tooltip',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Tooltip'
      }]
    }
  }, {
    component: Timepicker,
    path: '/boxed/ui-elements/timepicker',
    meta: {
      requiresAuth: true,
      title: 'message.timepicker',
      breadcrumb: [{
        breadcrumbInactive: 'UI Elements /'
      }, {
        breadcrumbActive: 'Timepicker'
      }]
    }
  }, {
    component: FormValidation,
    path: '/boxed/forms/form-validation',
    meta: {
      requiresAuth: true,
      title: 'message.formValidation',
      breadcrumb: [{
        breadcrumbInactive: 'Forms /'
      }, {
        breadcrumbActive: 'FormValidation'
      }]
    }
  }, {
    component: Stepper,
    path: '/boxed/forms/stepper',
    meta: {
      requiresAuth: true,
      title: 'message.stepper',
      breadcrumb: [{
        breadcrumbInactive: 'Forms /'
      }, {
        breadcrumbActive: 'Stepper'
      }]
    }
  }, {
    component: VueChartjs,
    path: '/boxed/charts/vue-chartjs',
    meta: {
      requiresAuth: true,
      title: 'message.vueChartjs',
      breadcrumb: [{
        breadcrumbInactive: 'Charts /'
      }, {
        breadcrumbActive: 'Vue Chartjs'
      }]
    }
  }, {
    component: VueEcharts,
    path: '/boxed/charts/vue-echarts',
    meta: {
      requiresAuth: true,
      title: 'message.vueEcharts',
      breadcrumb: [{
        breadcrumbInactive: 'Charts /'
      }, {
        breadcrumbActive: 'Vue Echarts'
      }]
    }
  }, {
    component: Themify,
    path: '/boxed/icons/themify',
    meta: {
      requiresAuth: true,
      title: 'message.themify',
      breadcrumb: [{
        breadcrumbInactive: 'Icons /'
      }, {
        breadcrumbActive: 'Themify'
      }]
    }
  }, {
    component: Material,
    path: '/boxed/icons/material',
    meta: {
      requiresAuth: true,
      title: 'message.material',
      breadcrumb: [{
        breadcrumbInactive: 'Icons /'
      }, {
        breadcrumbActive: 'Material'
      }]
    }
  }, {
    path: '/boxed/tables/simple',
    component: SimpleTable,
    meta: {
      requiresAuth: true,
      title: 'message.simpleTable',
      breadcrumb: [{
        breadcrumbInactive: 'Tables /'
      }, {
        breadcrumbActive: 'Simple'
      }]
    }
  }, {
    component: Standard,
    path: '/boxed/tables/standard',
    meta: {
      requiresAuth: true,
      title: 'message.standard',
      breadcrumb: [{
        breadcrumbInactive: 'Tables /'
      }, {
        breadcrumbActive: 'Standard'
      }]
    }
  }, {
    component: Slots,
    path: '/boxed/tables/slots',
    meta: {
      requiresAuth: true,
      title: 'message.slots',
      breadcrumb: [{
        breadcrumbInactive: 'Tables /'
      }, {
        breadcrumbActive: 'Slots'
      }]
    }
  }, {
    component: SelectableRows,
    path: '/boxed/tables/selectablerows',
    meta: {
      requiresAuth: true,
      title: 'message.selectable',
      breadcrumb: [{
        breadcrumbInactive: 'Tables /'
      }, {
        breadcrumbActive: 'Selectable Rows'
      }]
    }
  }, {
    component: SearchWithText,
    path: '/boxed/tables/searchwithtext',
    meta: {
      requiresAuth: true,
      title: 'message.searchRow',
      breadcrumb: [{
        breadcrumbInactive: 'Tables /'
      }, {
        breadcrumbActive: 'Search Row'
      }]
    }
  }, {
    component: GoogleMaps,
    path: '/boxed/maps/google-maps',
    meta: {
      requiresAuth: true,
      title: 'message.googleMaps',
      breadcrumb: [{
        breadcrumbInactive: 'Maps /'
      }, {
        breadcrumbActive: 'Google Map'
      }]
    }
  }, {
    component: LeafletMaps,
    path: '/boxed/maps/leaflet-maps',
    meta: {
      requiresAuth: true,
      title: 'message.leafletMaps',
      breadcrumb: [{
        breadcrumbInactive: 'Maps /'
      }, {
        breadcrumbActive: 'Leaflet Map'
      }]
    }
  }, {
    component: UserProfile,
    path: '/boxed/users/user-profile',
    meta: {
      requiresAuth: true,
      title: 'message.userProfile',
      breadcrumb: [{
        breadcrumbInactive: 'Users /'
      }, {
        breadcrumbActive: 'User Profile'
      }]
    }
  }, {
    component: UsersList,
    path: '/boxed/users/users-list',
    meta: {
      requiresAuth: true,
      title: 'message.usersList',
      breadcrumb: [{
        breadcrumbInactive: 'Users /'
      }, {
        breadcrumbActive: 'Users List'
      }]
    }
  }, {
    component: Calendar,
    path: '/boxed/calendar',
    meta: {
      requiresAuth: true,
      title: 'message.calendar',
      breadcrumb: [{
        breadcrumbInactive: ''
      }, {
        breadcrumbActive: 'Calendar'
      }]
    }
  }, {
    component: QuillEditor,
    path: '/boxed/editor/quilleditor',
    meta: {
      requiresAuth: true,
      title: 'message.quillEditor',
      breadcrumb: [{
        breadcrumbInactive: 'Editor /'
      }, {
        breadcrumbActive: 'Quill Editor'
      }]
    }
  }, {
    component: WYSIWYG,
    path: '/boxed/editor/wysiwyg',
    meta: {
      requiresAuth: true,
      title: 'message.wYSIWYG',
      breadcrumb: [{
        breadcrumbInactive: 'Editor /'
      }, {
        breadcrumbActive: 'WYSIWYG'
      }]
    }
  }, {
    component: Vue2Dragula,
    path: '/boxed/drag-drop/vue2dragula',
    meta: {
      requiresAuth: true,
      title: 'message.vue2Dragula',
      breadcrumb: [{
        breadcrumbInactive: 'Drag And Drop /'
      }, {
        breadcrumbActive: 'Vue2 Dragula'
      }]
    }
  }, {
    component: VueDraggable,
    path: '/boxed/drag-drop/vuedraggable',
    meta: {
      requiresAuth: true,
      title: 'message.vueDraggable',
      breadcrumb: [{
        breadcrumbInactive: 'Drag And Drop /'
      }, {
        breadcrumbActive: 'Vue Draggable'
      }]
    }
  }, {
    component: VueDraggableResizeable,
    path: '/boxed/drag-drop/vuedraggableresizeable',
    meta: {
      requiresAuth: true,
      title: 'message.draggableResizeable',
      breadcrumb: [{
        breadcrumbInactive: 'Drag And Drop /'
      }, {
        breadcrumbActive: 'Draggable Resizeable'
      }]
    }
  }, {
    path: '/boxed/image-cropper',
    component: ImageCropper,
    meta: {
      requiresAuth: true,
      title: 'message.imageCropper',
      breadcrumb: [{
        breadcrumbInactive: 'Extensions /'
      }, {
        breadcrumbActive: 'Image Cropper'
      }]
    }
  }, {
    path: '/boxed/video-player',
    component: VideoPlayer,
    meta: {
      requiresAuth: true,
      title: 'message.videoPlayer',
      breadcrumb: [{
        breadcrumbInactive: 'Extensions /'
      }, {
        breadcrumbActive: 'Video Player'
      }]
    }
  }, {
    path: '/boxed/dropzone',
    component: Dropzone,
    meta: {
      requiresAuth: true,
      title: 'message.dropzone',
      breadcrumb: [{
        breadcrumbInactive: 'Extensions /'
      }, {
        breadcrumbActive: 'Dropzone'
      }]
    }
  }]
};
exports["default"] = _default;