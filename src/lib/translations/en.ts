import { ProjectTranslationKeys } from './types';

export const en: ProjectTranslationKeys = {
  screenTitles: {
    discover: 'Discover',
    shop: 'Shop',
    cart: 'Bag',
    miniCart: {
      zero: 'Items',
      one: 'Items ({{count}})',
      other: 'Items ({{count}})'
    },
    account: 'Account',
    search: 'Search',
    reviews: 'Reviews',
    favorites: 'My Favorites',
    paymentOptions: 'Payment Methods',
    myOrders: 'MY ORDERS',
    createAccount: 'CREATE ACCOUNT',
    stylePreferences: 'STYLE PREFERENCES',
    notificationPreferences: 'NOTIFICATION PREFERENCES'
  },
  weatherRecommendations: {
    contextualPrompt: {
      header: 'ALWAYS PREPARED',
      prompt: 'Enable your location to get today’s weather recommendations.',
      cta: 'GET WEATHER RECOMMENDATIONS'
    },
    recommendations: {
      header: 'RECOMMENDED\nEQUIPMENT FOR TODAY',
      noRecommendations: 'NO RESULTS',
      tryDifferent: 'Try using a different location.',
      noOutdoorRide: 'NO OUTDOOR RIDE RECOMMENDED TODAY',
      indoorTraining: "With these extreame weather conditions, we don't recommend an outdoor ride."
      + 'Consider an indoor training session with this equipment.'
    },
    changeLocation: {
      header: 'LOCATION',
      inputPlaceHolder: 'CITY, STATE, OR ZIPCODE'
    },
    noLocationServices: {
      header: 'cycling equipment by season',
      prompt:
        'Set up location services to get weather-based recommendations just for you.',
      summer: '1.3 SUMMER',
      springFall: '2.3 SPRING - FALL',
      winter: '3.3 WINTER',
      allYear: 'X.3 ALL YEAR'
    }
  },
  productDetails: {
    details: 'Details',
    accordions: {
      warranty: 'On all products',
      crash: 'Support if you fall',
      returns: 'Within 30 days of receipt .',
      payments: 'Payment processed in a secure environment'
    }
  },
  joinNowForm: {
    inputTitles: {
      firstName: 'First Name',
      lastName: 'Last Name',
      phone: 'Mobile Number',
      email: 'Email Address',
      password: 'Password',
      month: 'Month',
      day: 'Day',
      faceId: 'Use Face ID'
    },
    requirements: {
      lastName: 'Last Name is required field',
      firstName: 'First Name is required field',
      email: 'Please enter a valid email address'
    },
    createAccount: 'CREATE ACCOUNT',
    show: 'Show',
    hide: 'Hide',
    passwordRequirements: {
      upper: 'Must contain at least one uppercase letter',
      lower: 'Must contain at least one lowercase letter',
      number: 'Must contain at least one number',
      length: 'Must contain at least 8 characters',
      special: 'Must contain at least one special character'
    },
    gender: 'Gender',
    birthday: 'Birthday',
    acceptPolicy: 'By clicking \"Join\" I accept to the ... ,',
    privacy: 'Privacy Policy',
    and: ' and ',
    terms: 'Terms and Conditions',
    done: 'done'
  },
  tabTitles: {
    discover: 'Discover',
    shop: 'Shop',
    cart: 'Bag',
    account: 'Account'
  },
  discover: {
    discoverComponent: 'Discover Component'
  },
  shop: {
    categories: {
      men: 'MEN',
      women: 'WOMEN'
    },
    landing: {
      shop: {
        featured: 'Featured',
        clothing: 'Clothing',
        accessories: 'Accessories',
        roadCollections: 'Road Collections',
        mountainCollections: 'Mountain Collections',
        gravelCollections: 'Gravel Collections',
        triathlonCollections: 'Triathlon Collections',
        seasons: 'Seasons',
        extraCollections: 'Extra Collections',
        archive: 'Archive'
      },
      featureEquipments: {
        title: 'Featured equipment',
        newArrivals: 'New Arrivals',
        equip: 'Equipe 1/3',
        mille: 'Mille 1/3',
        indoor: 'Indoor',
        rain: 'Rain',
        gifts: 'Gifts',
        archive: 'Archive'
      }
    },
    header: 'Shop By Category',
    placeHolder: 'Search'
  },
  search: {
    trending: 'Trending',
    result: '{{count}} Results',
    noResult: '0 Results',
    returnedNoResult: 'Your search returned no results.',
    didMean: 'Did you mean ',
    suggestWord: 'Green Shift?',
    popularSearchTerms: 'Popular Search Terms',
    placeholder: 'SEARCH...'
  },
  pdp: {
    size: 'Size: ',
    color: 'Color: ',
    sizeChart: 'Size Chart',
    whatsMySize: "What's my size?",
    seeAllCategories: 'See all "Category"',
    addToWishlist: 'Add to Wishlist',
    addedToWishlist: 'Added to Wishlist',
    completeTheLook: 'Complete The Look',
    customerPhotos: 'Customer Photos',
    youMayAlsoLike: 'You May Also Like',
    tittleCarouselButton: 'View All',
    outOfStock: 'Out of Stock',
    getInStockAlert: 'Get in Stock Alert',
    updateStockAlert: 'Update Stock Alert',
    tryAgain: 'TRY AGAIN',
    removeAlert: 'Remove Alert',
    addToBag: 'ADD TO BAG',
    addedToBag: 'ADDED TO BAG',
    howWhenToUse: 'WHEN/HOW \n TO USE IT',
    composition: 'COMPOSITION',
    warranty: '2 YEAR WARRANTY',
    crash: 'CRASH POLICY',
    returns: 'FREE RETURNS',
    payments: 'SECURE PAYMENTS',
    notifyButton: 'Notify When Available',
    notifyWhenAvailableTitle: 'Notify Me When In Stock',
    pinchToZoom: 'Pinch to zoom',
    recentlyViewed: 'Recently Viewed',
    modal: {
      chest: 'CHEST',
      waist: 'WAIST',
      hip: 'HIP',
      title: `WHAT'S MY SIZE?`,
      weHelpYouFind: 'WE HELP YOU FIND THE RIGHT SIZE',
      IN: 'IN',
      CM: 'CM',
      height: 'HEIGHT',
      ft: 'ft',
      m: 'm',
      in: 'in',
      cm: 'cm',
      weight: 'WEIGHT',
      lb: 'lb',
      kg: 'kg',
      age: 'AGE',
      years: 'years',
      ageHasAnImpact:
        // tslint:disable-next-line: ter-max-len
        'Age has an ipact on how your weight is distributed. Knowing your age helps us recommend the right size.',
      reviewMeasurements: 'NEXT: REVIEW MEASUREMENTS',
      exitSizeChart: 'EXIT SIZE CHART',
      yourRecommendedSize: 'YOUR RECOMMENDED SIZE IS {{size}}',
      continueShopping: 'CONTINUE SHOPPING',
      errorNotification: 'We are unable to add this item to your stock alerts at this time. ' +
      'Please wait and try again later.',
      successNotification: 'Thank you!\nWe will email you if this item becomes available.',
      startOver: 'START OVER',
      confirmHeader: 'DO YOU WANT TO CHANGE ANY OF YOUR MEASUREMENTS?',
      confirmPrompt:
        // tslint:disable-next-line: ter-max-len
        'Estimated measurements are initially provided based on your height, weight and age. For more accurate sizing recommendations, we encourage you to enter your actual measurements in the fields above.',
      seeYourSize: 'NEXT: SEE YOUR SIZE',
      back: 'BACK'
    }
  },
  reviews: {
    from: 'from',
    verifiedBuyer: 'Verified Buyer',
    helpful: 'Helpful • {{count}}',
    sortBy: 'Sort by',
    title: 'Sort by',
    apply: 'Apply'
  },
  recentlyViewed: {
    header: 'Recently Viewed'
  },
  accessibility: {
    searchBtn: 'Search Button'
  },
  cart: {
    moveToWishlist: 'Move to Wishlist',
    haveAPromo: 'Have a Promo?',
    subtotal: 'Subtotal',
    shipping: 'Delivery',
    shippingTooltip:
      'Delivery fees will be calculated at checkout based on delivery address',
    tax: 'Sales Tax',
    taxTooltip: `The actual tax will be calculated \
in checkout based on the applicable state \
and local sales taxes.`,
    total: 'Estimated Total',
    estimatedShipping: 'Est. Arrival Date',
    empty: 'Your Bag is Empty',
    shopNow: 'Shop Now',
    checkoutModalTitle: 'Checkout Options',
    miniCartCTA: 'Done',
    stockItems: 'Remove {{count}} unavailable items to continue.',
    textButton: 'Remove All',
    outOfStock: 'Out of Stock',
    newArrivals: 'New Arrivals',
    removeItem: 'Remove Item'
  },
  wishlist: {
    yourWishlist: 'Your Wishlist',
    moveToBag: '+ Move to Bag',
    viewAll: 'View All'
  },
  ymal: {
    header: 'Complete the Look',
    addToBag: '+ Add to Bag'
  },
  checkoutBtns: {
    applePay: 'Apple Pay',
    payPal: 'PayPal',
    checkout: 'Checkout',
    choosePayment: 'Proceed to Checkout'
  },
  flagship: {
    search: {
      recentSearches: 'Recent',
      actions: {
        clear: {
          actionBtn: 'Clear All'
        }
      }
    },
    sort: {
      actions: {
        sort: {
          actionBtn: 'Sort By'
        }
      }
    },
    filterListDefaults: {
      clearAll: 'Clear All',
      cancel: 'CANCEL',
      apply: 'APPLY'
    }
  },
  pagination: {
    loadMore: 'Show More',
    of: 'of',
    showing: 'Showing'
  },
  creditCard: {
    editPayment: 'Edit payment',
    deletePayment: 'Delete payment',
    expires: 'Expires'
  },
  selectableItem: {
    newPayment: '+ Add New Payment Method'
  },
  checkoutStepIndicator: {
    delivery: 'Delivery',
    payment: 'Payment',
    review: 'Review'
  },
  errors: {
    required: 'is required',
    email: 'Please enter valid email',
    promoCode: 'Please enter promo code',
    reviewErrors: 'Please review errors below to proceed',
    deliveryAddressError: 'Please add a Delivery Address.',
    pleaseEnterSecurCode: 'Please enter security code',
    unavailableCartItem:
      'Item(s) in your bag are unavailable. We’ve updated your bag.',
    unauthorised: 'Please sign in first',
    validationSpecialCharacters:
      'This field cannot contain special characters.',
    correctCurrentPassword:
      'Please make sure that the current password you entered is correct',
    invalidCredentials: 'Please enter a valid email and password'
  },
  inputTitles: {
    required: '*',
    email: 'Email',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    zip: 'ZIP Code',
    state: 'State',
    city: 'City',
    address2: 'Address 2',
    address2Plus: '+ Address 2 (Optional)',
    street: 'Address 1',
    lastName: 'Last Name',
    firstName: 'First Name',
    cardNumber: 'Card Number',
    cardName: 'Name on Card',
    expDate: 'Expiration Date',
    securityCode: 'Security Code',
    cardExpDate: 'MM/YY',
    country: 'Country',
    addressName: 'Address name',
    company: 'Company/Care',
    companyPlus: '+ Company/Care Of (Optional)',
    aptPlus: '+ Apt, Suite or P.O. Box',
    apt: 'Apt, Suite or P.O. Box'
  },
  orderTotal: {
    items: 'Items',
    unavailableWarning: 'Remove {{count}} unavailable items to continue',
    subtotal: 'Subtotal',
    delivery: 'Delivery',
    salesTax: 'Sales Tax',
    orderTotal: 'Order Total',
    defaultValue: '$00.00'
  },
  checkout: {
    signIn: 'Sign In',
    secureCheckout: 'Secure Checkout',
    getItBy: 'Get it by',
    haveAnAccount: 'Have an Account',
    signInForFasterCheckout: 'Sign in for faster checkout',
    contactInformation: 'Contact Information',
    deliveryAddress: 'Delivery Address',
    deliveryMethod: 'Delivery Method',
    payment: 'Next: Payment',
    paymentMethod: 'Payment Method',
    applePay: 'Apple Pay',
    payPal: 'PayPal',
    creditCard: 'Credit Card',
    checkoutWith: 'Check out with',
    paypalСlarification:
      'Tap the button below to Continue to PayPal. You ' +
      'will be able to review your order at the final step.',
    nextReview: 'Next: Review & Place Order',
    tooltip: 'Only used for customer support or delivery issues.',
    done: 'Done'
  },
  managePassword: {
    title: 'MANAGE PASSWORD',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    instruction: {
      uppercase: 'Must contain at least one uppercase letter',
      lowercase: 'Must contain at least one lowercase letter',
      oneNumber: 'Must contain at least one number',
      characters: 'Must contain at least 8 characters',
      special: 'At least 1 special character(s)'
    },
    confirmNewPassword: 'Confirm New Password',
    updatePassword: 'Update Password',
    confirmPasswordError: "Passwords don't match",
    success: 'Changes Saved'
  },
  button: {
    addToBag: 'Add to Bag',
    orderDetails: 'details'
  },
  promoForm: {
    applyPromoCode: 'Apply Promo Code or Gift Card',
    currency: '- $',
    inputTitle: 'Enter Code',
    innerButtonText: 'Apply',
    errorMessage: 'The code you entered is not valid or expired'
  },
  orderReviewComponent: {
    btn: 'Pay Now',
    delivery: 'Delivery',
    payment: 'Payment',
    billing: 'Billing',
    contactInfo: 'Contact Information',
    deliveryAddress: 'Delivery Address',
    deliveryMethod: 'Delivery Method',
    paymentMethod: 'Payment Method',
    warningExpired: 'Your payment method is expired. Please edit to proceed.',
    billingAddress: 'Billing Address',
    textEmailError: 'Please add an email address.',
    promoBtn: 'Apply a Promo Code',
    edit: 'Edit',
    add: 'Add',
    textInputTitle: '*Security code',
    textInputError: 'Please enter security code.',
    tooltip: 'Need to enter by CVV (Security Code) on your Card',
    pickUpInStore: 'In-Store Or Curbside Pickup',
    storeLocation: 'Store Location',
    pickUpPerson: 'Pickup Person',
    errors: {
      paymentExpired: 'Your payment method is expired.'
    },
    secureCode: '* Security code'
  },
  orderReviewContainer: {
    title: 'Secure Checkout'
  },
  contactInfoComponent: {
    title: 'Edit Contact Information',
    description: 'Your email will be used to send you an order confirmation.',
    emailLabel: '*Email Address',
    emailError: 'Please enter a valid email address',
    emailPlaceholder: 'Jondoe@gmail.com',
    done: 'Done'
  },
  deliveryAddressComponent: {
    title: 'Edit Delivery Address',
    done: 'Done',
    addNewAddress: '+ Add New Address',
    deleteAddress: 'Delete Address',
    editAddress: 'Edit Address'
  },
  paymentMethodComponent: {
    title: 'Edit Payment Method',
    separator: '/',
    dots: ' •••• ',
    addNewPayment: '+ Add New Payment Method',
    addNewPaymentShort: 'Add new payment method',
    deletePayment: 'Delete'
  },
  deliveryOptionsComponent: {
    headerTitle: 'Edit Delivery Method'
  },
  creditCardPaymentComponent: {
    done: 'Done',
    billingAddress: 'Billing Address',
    useAsDefault: 'Use as my default payment',
    sameAsShippingAddressShort: 'Same as Shipping Address',
    sameAsShippingAddressFull: 'Billing Address same as Shipping Address',
    acceptedCards: 'Accepted Cards:'
  },
  CTAButton: {
    submit: 'Submit',
    enable: 'ENABLE',
    disable: 'DISABLE'
  },
  sortOptions: {
    relevance: 'Relevance',
    title: 'Sort by'
  },
  orderConfirmation: {
    arrivalDate: 'XX/XX/XXXX',
    orderNumber: '19349146197649',
    headerTitle: 'Thanks for your Order!',
    headerSubtitle: 'An order confirmation was sent to jondoe@gmail.com.',
    orderNumberTitle: 'Order Number:',
    arrivalDateTitle: 'Est. Arrival Date:',
    btnContinueShopping: 'Continue Shopping',
    signUpBlockTitle: 'Sign Up for Text Alerts',
    signUpBlockSubTitle:
      'We’ll let you know when your order has shipped!' +
      '(Data & messaging rates may apply.)',
    errorMessage: 'error',
    textInputTitle: 'Phone Number',
    innerButtonText: 'Sign Up',
    continueShopping: 'Continue Shopping'
  },
  stepper: {
    qtyPrefix: 'Qty: '
  },
  formDeliveryAddressComponent: {
    saveAddress: 'Save Address',
    done: 'DONE',
    save: 'SAVE',
    deleteAddress: 'DELETE ADDRESS',
    saveChanges: 'SAVE CHANGES',
    editAddress: 'EDIT ADDRESS',
    addNewAddress: 'ADD NEW ADDRESS'
  },
  addressForm: {
    useAsDefaultAddress: 'Use as my default address',
    saveToMyAccount: 'Save To My Account',
    thisIsGift: 'THIS IS A GIFT',
    giftMessage: 'GIFT MESSAGE',
    giftDescription:
      'Message cannot exceed 160 charcters (40 per line). ' +
      'Your gift will arrive with this message and a gift receipt.'
  },
  readMentionsReviews: {
    headerText: 'Read Reviews that Mention:'
  },
  reviewsRatingsSummaryComponent: {
    stars: 'stars',
    star: 'star',
    writeReview: 'Write a Review',
    basedOn: 'Based on {{count}} Reviews',
    outOf: '5 out of 5'
  },
  signInSection: {
    signIn: 'Sign In',
    emailAddress: 'Email Address',
    password: 'Password',
    passwordRequired: 'Please enter a valid password',
    show: 'Show',
    hide: 'Hide',
    forgotPassword: 'Forgot Password?',
    submit: 'Sign In',
    createAccount: 'Create Account',
    logIn: 'Log in',
    addToWishlist:
      'In order to add this item to your wishlist,' +
      ' you need a Lorna Jane account, please \n ' +
      'sign in or create an account to continue.',
    googleBtnAlt: 'Sign in with Google',
    or: 'OR',
    signInError:
      'The account sign-in was incorrect' +
      ' or your account is disabled temporarily.' +
      ' Please wait and try again later.'
  },
  resetPasswordSection: {
    resetPassword: 'Reset Password',
    enterYourEmail:
      'Enter your email to receive instructions for how to reset your password.',
    linkWay: 'A link is on its way to ',
    follow: '. Follow the emailed instructions to reset your password.',
    emailSent: 'Email Sent',
    didNotGet: 'Didn’t get it?',
    resendEmail: 'Resend Email',
    backToSignIn: 'Back to Sign In',
    submit: 'Send Reset Link',
    checkEmail: 'Check your email address to reset your password',
    error: 'Something went wrong, please try again later'
  },
  personalDetails: {
    buttonTitle: 'Save',
    privacyPolicyInfo:
      'To see how we may use your information, take a look at our ',
    privacyPolicyLink: 'privacy policy.',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    birthday: 'Birthday',
    month: 'Month',
    day: 'Day',
    country: 'Country',
    birthdayToolTip:
      'Used to send you something special. To change your birthday, please ',
    contactUsLink: 'contact us'
  },
  addressBookComponent: {
    btnDelete: 'Delete',
    btnEdit: 'Edit',
    preferred: 'PREFERRED',
    addNewAddress: '+ Add New Address',
    title: 'ADDRESS BOOK',
    errorDelete: 'Messagaging'
  },
  accountDetails: {
    title: 'Account Details',
    personalDetails: 'Personal Details',
    paymentOptions: 'Payment Options',
    addressBook: 'Address Book',
    managePassword: 'Manage Password',
    emailPreferences: 'Email Preferences',
    needHelp: 'NEED HELP?',
    contactUs: 'Contact Us',
    signOut: 'Sign Out'
  },
  myOrders: {
    numberTitle: 'purchase number:',
    locationTitle: 'purchase location:',
    statusTitle: 'status:',
    trackingTitle: 'tracking #:',
    trackingButton: 'Track Order',
    emptyTitle: 'We have no order records for this account.',
    emptyButton: 'Start Shopping',
    order: 'Order # {{order}}'
  },
  myOrderDetails: {
    title: 'Order # {{id}}',
    paymentMethod: 'Payment Method',
    paymentCard: '{{card}} ending in {{lastDigits}}',
    billingAddress: 'Billing Address',
    homeDelivery: 'Home Delivery:',
    shippingMethod: 'Shipping Method:',
    deliveryOnOrBefore: 'Delivery On Or Before:',
    tracking: 'Tracking #:',
    subtotal: 'Subtotal',
    delivery: 'Delivery',
    salesTax: 'Sales Tax',
    orderTotal: 'Order Total',
    itemPrice: 'Item Price',
    itemNumber: 'Item #',
    color: 'Color',
    size: 'Size'
  },
  chooseYourStore: {
    title: 'Choose Your Store',
    FYI: 'FYI: We offer contactless curbside pickup (!).',
    warn: 'All of your in-store pickup items must be picked up in the same location.',
    field: 'City, State or Zip Code',
    search: 'Search',
    done: 'Done',
    preferred: 'Preferred',
    away: 'miles away',
    use: 'Use ',
    currentLocation: 'Current Location'
  },
  bopisPicker: {
    homeTitle: 'Home Delivery',
    bopisTitle: 'In-Store Or Curbside Pickup',
    changeStore: 'Change Store',
    error:
      'Please select a size and color to see if your item is available for in-store pickup.'
  },
  checkoutBOPIS: {
    orderStatusUpdates: 'Where Do We Send The Order Status Update?',
    inStoreCurbsidePickUp: 'IN-STORE OR CURBSIDE PICKUP',
    whosPickingUpTheOrder: 'Who’s picking up the order?',
    howItWorks: 'How it works',
    howItWorksInfo:
      'Keep an eye on your inbox. We’ll send an ' +
      'email when each item arrives at the store, along with curbside ' +
      'instructions. Pick them up all at once or individually, but note: ' +
      'You’ll have seven days from when we receive the last item to retrieve ' +
      'them. Items that have not been picked up after seven days will be returned.',
    changeMethod: 'Change Methods',
    free: ' Free'
  },
  notFound: {
    title: '404 Not Found',
    body: "Sorry, we couldn't find the page you we're looking for."
  },
  account: {
    account: 'Account',
    storeLocator: 'Store Locator',
    guestGreeting: 'CHASING TOMORROW’S TECHNOLOGY \n FOR TODAY’S PERFORMANCE.',
    ctaLogin: 'LOG IN',
    ctaCreateAccount: 'REGISTER',
    appSetting: 'App Settings',
    appSettingSubText: 'Style Preferences, Notifications, Wishlist',
    settings: {
      stylePreferences: 'Style Preferences',
      notificationPreferences: 'Notification Preferences',
      wishlist: 'Wishlist',
      customerService: 'Customer Service',
      deleteAccount: 'Delete Account'
    }
  },
  notificationPreferences: {
    allowText:
      'Allow notifications in system preferences in order to receive notifications about' +
      ' deals, promotions, and stock alerts. This can be disabled at any time.',
    disableText:
      'Disable notifications in system preferences. This can be re-enabled at any time.'
  },
  accountDelete: {
    areYourSure: 'Are you sure you want to delete your account?',
    deleteDetails:
      'Deleting an account will take up to 3 days.' +
      ' You will receive an email confirmation once your account is deleted ' +
      'and be immediately signed out',
    deleteCta: 'Yes, delete my account',
    keepCta: 'No, keep my account active'
  },
  onBoarding: {
    describe:
      'Please select all that apply. Don’t worry, you \n' +
      ' can update these any time in your settings.',
    describePermissions:
      'Don’t worry, you can update these any time in \n your settings.',
    skipStep: 'skip this step',
    nextTypeOfRide: 'NEXT: type of ride',
    youShopMostlyFor: 'You shop mostly for',
    greeting:
      'we have a few quick \n questions for you to \n optimize your experience.',
    youMostlyRideOn: 'You mostly ride on',
    nextTypeOfFit: 'NEXT: type of fit',
    theTypeOfFit: 'The Type of Fit You Prefer',
    finishQuiz: 'finish quiz',
    getAlerts: 'GET ALERTS ABOUT NEW PRODUCTS AND EXCLUSIVE EVENTS.',
    continue: 'continue',
    getLocate: 'Find stores near you and get weather-based recommendations.',
    men: "MEN'S PRODUCTS",
    women: "WOMEN'S PRODUCTS",
    racing: 'AERODYNAMIC',
    comfort: 'REGULAR',
    road: 'ROAD',
    mountain: 'MOUNTAIN',
    gravel: 'GRAVEL',
    start: 'START'
  },
  registerModal: {
    title: 'Register',
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      password: 'Password',
      faceId: 'Use Face ID'
    },
    passwordValidation: {
      chars: 'Must contain at least 8 characters',
      uppercase: 'Must contain at least one uppercase letter',
      lowercase: 'Must contain at least one lowercase letter',
      digit: 'Must contain at least one digit',
      specialChar: 'Must contain at least one special character'
    }
  },
  general: {
    cancel: 'Cancel'
  },
  pip: {
    sortAndFilter: {
      sortBy: 'Sort By:',
      filter: 'Filter',
      apply: 'APPLY',
      sortTitle: 'SORT BY'
    },
    filter: {
      noResultsFound: 'No results found.',
      clearAllFilters: 'CLEAR ALL FILTERS'
    },
    loadMore: 'Load More',
    backToTop: 'Back to Top'
  },
  technologyDetails: {
    header: 'THE FINER DETAILS',
    header__eyebrow: 'TECHNOLOGY OVERVIEW'
  }
};
