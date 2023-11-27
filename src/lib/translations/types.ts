import { TranslationKey, TranslationKeys } from '@brandingbrand/fsi18n';

export interface ProjectTranslationKeys<KeyType = TranslationKey>
  extends TranslationKeys {
  productDetails: {
    details: KeyType;
    accordions: {
      warranty: KeyType;
      crash: KeyType;
      returns: KeyType;
      payments: KeyType;
    };
  };
  screenTitles: {
    discover: KeyType;
    shop: KeyType;
    cart: KeyType;
    miniCart: KeyType;
    account: KeyType;
    search: KeyType;
    reviews: KeyType;
    favorites: KeyType;
    paymentOptions: KeyType;
    myOrders: KeyType;
    createAccount: KeyType;
    stylePreferences: KeyType;
    notificationPreferences: KeyType;
  };
  tabTitles: {
    discover: KeyType;
    shop: KeyType;
    cart: KeyType;
    account: KeyType;
  };
  discover: {
    discoverComponent: KeyType;
  };
  shop: {
    categories: {
      men: KeyType;
      women: KeyType;
    };
    landing: {
      shop: {
        featured: KeyType;
        clothing: KeyType;
        accessories: KeyType;
        roadCollections: KeyType;
        mountainCollections: KeyType;
        gravelCollections: KeyType;
        triathlonCollections: KeyType;
        seasons: KeyType;
        extraCollections: KeyType;
        archive: KeyType;
      };
      featureEquipments: {
        title: KeyType;
        newArrivals: KeyType;
        equip: KeyType;
        mille: KeyType;
        indoor: KeyType;
        rain: KeyType;
        gifts: KeyType;
        archive: KeyType;
      };
    };
    header: KeyType;
    placeHolder: KeyType;
  };
  search: {
    trending: KeyType;
    result: KeyType;
    noResult: KeyType;
    didMean: KeyType;
    returnedNoResult: KeyType;
    suggestWord: KeyType;
    popularSearchTerms: KeyType;
    placeholder: KeyType;
  };
  pdp: {
    size: KeyType;
    color: KeyType;
    sizeChart: KeyType;
    whatsMySize: KeyType;
    seeAllCategories: KeyType;
    addToWishlist: KeyType;
    addedToWishlist: KeyType;
    completeTheLook: KeyType;
    youMayAlsoLike: KeyType;
    tittleCarouselButton: KeyType;
    getInStockAlert: KeyType;
    updateStockAlert: KeyType;
    tryAgain: KeyType;
    removeAlert: KeyType;
    outOfStock: KeyType;
    customerPhotos: KeyType;
    addToBag: KeyType;
    addedToBag: KeyType;
    howWhenToUse: KeyType;
    composition: KeyType;
    warranty: KeyType;
    crash: KeyType;
    returns: KeyType;
    payments: KeyType;
    notifyButton: KeyType;
    notifyWhenAvailableTitle: KeyType;
    pinchToZoom: KeyType;
    recentlyViewed: KeyType;
    modal: {
      chest: string;
      waist: string;
      hip: string;
      title: KeyType;
      weHelpYouFind: KeyType;
      IN: KeyType;
      CM: KeyType;
      height: KeyType;
      ft: KeyType;
      m: KeyType;
      in: KeyType;
      cm: KeyType;
      weight: KeyType;
      lb: KeyType;
      kg: KeyType;
      age: KeyType;
      years: KeyType;
      ageHasAnImpact: KeyType;
      reviewMeasurements: KeyType;
      exitSizeChart: KeyType;
      yourRecommendedSize: KeyType;
      continueShopping: KeyType;
      errorNotification: KeyType;
      successNotification: KeyType;
      startOver: KeyType;
      confirmHeader: string;
      confirmPrompt: string;
      seeYourSize: string;
      back: string;
    };
  };
  joinNowForm: {
    inputTitles: {
      firstName: KeyType;
      lastName: KeyType;
      phone: KeyType;
      email: KeyType;
      password: KeyType;
      month: KeyType;
      day: KeyType;
      faceId: KeyType;
    };
    requirements: {
      lastName: KeyType;
      firstName: KeyType;
      email: KeyType;
    };
    createAccount: KeyType;
    show: KeyType;
    hide: KeyType;
    passwordRequirements: {
      upper: KeyType;
      lower: KeyType;
      number: KeyType;
      length: KeyType;
      special: KeyType;
    };
    gender: KeyType;
    birthday: KeyType;
    acceptPolicy: KeyType;
    privacy: KeyType;
    and: KeyType;
    terms: KeyType;
    done: KeyType;
  };
  reviews: {
    from: KeyType;
    verifiedBuyer: KeyType;
    helpful: KeyType;
    sortBy: KeyType;
    title: KeyType;
    apply: KeyType;
  };
  recentlyViewed: {
    header: KeyType;
  };
  accessibility: {
    searchBtn: KeyType;
  };
  pagination: {
    loadMore: KeyType;
    of: KeyType;
    showing: KeyType;
  };
  cart: {
    moveToWishlist: KeyType;
    haveAPromo: KeyType;
    subtotal: KeyType;
    shipping: KeyType;
    shippingTooltip: KeyType;
    tax: KeyType;
    taxTooltip: KeyType;
    total: KeyType;
    estimatedShipping: KeyType;
    empty: KeyType;
    shopNow: KeyType;
    checkoutModalTitle: KeyType;
    stockItems: KeyType;
    textButton: KeyType;
    outOfStock: KeyType;
    miniCartCTA: KeyType;
    newArrivals: KeyType;
    removeItem: KeyType;
  };
  wishlist: {
    yourWishlist: KeyType;
    moveToBag: KeyType;
    viewAll: KeyType;
  };
  ymal: {
    header: KeyType;
    addToBag: KeyType;
  };
  checkoutBtns: {
    applePay: KeyType;
    payPal: KeyType;
    checkout: KeyType;
    choosePayment: KeyType;
  };
  creditCard: {
    editPayment: KeyType;
    deletePayment: KeyType;
    expires: KeyType;
  };
  selectableItem: {
    newPayment: KeyType;
  };
  checkoutStepIndicator: {
    delivery: KeyType;
    payment: KeyType;
    review: KeyType;
  };
  errors: {
    required: KeyType;
    email: KeyType;
    promoCode: KeyType;
    reviewErrors: KeyType;
    deliveryAddressError: KeyType;
    pleaseEnterSecurCode: KeyType;
    unavailableCartItem: KeyType;
    unauthorised: KeyType;
    validationSpecialCharacters: KeyType;
    correctCurrentPassword: KeyType;
    invalidCredentials: KeyType;
  };
  inputTitles: {
    required: KeyType;
    email: KeyType;
    emailAddress: KeyType;
    phoneNumber: KeyType;
    zip: KeyType;
    state: KeyType;
    city: KeyType;
    street: KeyType;
    address2: KeyType;
    address2Plus: KeyType;
    lastName: KeyType;
    firstName: KeyType;
    cardNumber: KeyType;
    cardName: KeyType;
    expDate: KeyType;
    securityCode: KeyType;
    cardExpDate: KeyType;
    country: KeyType;
    addressName: KeyType;
    company: KeyType;
    companyPlus: KeyType;
    aptPlus: KeyType;
    apt: KeyType;
  };
  orderTotal: {
    items: KeyType;
    unavailableWarning: KeyType;
    subtotal: KeyType;
    delivery: KeyType;
    salesTax: KeyType;
    orderTotal: KeyType;
    defaultValue: KeyType;
  };
  button: {
    addToBag: KeyType;
    orderDetails: KeyType;
  };
  promoForm: {
    applyPromoCode: KeyType;
    currency: KeyType;
    inputTitle: KeyType;
    innerButtonText: KeyType;
    errorMessage: KeyType;
  };
  orderReviewComponent: {
    btn: KeyType;
    delivery: KeyType;
    payment: KeyType;
    billing: KeyType;
    warningExpired: KeyType;
    contactInfo: KeyType;
    deliveryAddress: KeyType;
    deliveryMethod: KeyType;
    paymentMethod: KeyType;
    billingAddress: KeyType;
    promoBtn: KeyType;
    edit: KeyType;
    add: KeyType;
    textInputTitle: KeyType;
    textInputError: KeyType;
    tooltip: KeyType;
    textEmailError: KeyType;
    errors: {
      paymentExpired: KeyType;
    };
    secureCode: KeyType;
    pickUpInStore: KeyType;
    storeLocation: KeyType;
    pickUpPerson: KeyType;
  };
  orderReviewContainer: {
    title: KeyType;
  };
  contactInfoComponent: {
    title: KeyType;
    description: KeyType;
    emailLabel: KeyType;
    emailError: KeyType;
    emailPlaceholder: KeyType;
    done: KeyType;
  };
  deliveryAddressComponent: {
    title: KeyType;
    done: KeyType;
    addNewAddress: KeyType;
    deleteAddress: KeyType;
    editAddress: KeyType;
  };
  paymentMethodComponent: {
    title: KeyType;
    separator: KeyType;
    dots: KeyType;
    addNewPayment: KeyType;
    addNewPaymentShort: KeyType;
    deletePayment: KeyType;
  };
  deliveryOptionsComponent: {
    headerTitle: KeyType;
  };
  creditCardPaymentComponent: {
    done: KeyType;
    billingAddress: KeyType;
    useAsDefault: KeyType;
    sameAsShippingAddressShort: KeyType;
    sameAsShippingAddressFull: KeyType;
    acceptedCards: KeyType;
  };
  CTAButton: {
    submit: KeyType;
    disable: KeyType;
    enable: KeyType;
  };
  sortOptions: {
    relevance: KeyType;
    title: KeyType;
  };
  managePassword: {
    title: KeyType;
    currentPassword: KeyType;
    newPassword: KeyType;
    instruction: {
      uppercase: KeyType;
      lowercase: KeyType;
      oneNumber: KeyType;
      characters: KeyType;
      special: KeyType;
    };
    confirmNewPassword: KeyType;
    updatePassword: KeyType;
    confirmPasswordError: KeyType;
    success: KeyType;
  };
  checkout: {
    signIn: KeyType;
    secureCheckout: KeyType;
    getItBy: KeyType;
    haveAnAccount: KeyType;
    signInForFasterCheckout: KeyType;
    contactInformation: KeyType;
    deliveryAddress: KeyType;
    deliveryMethod: KeyType;
    payment: KeyType;
    paymentMethod: KeyType;
    applePay: KeyType;
    payPal: KeyType;
    creditCard: KeyType;
    checkoutWith: KeyType;
    paypalСlarification: KeyType;
    nextReview: KeyType;
    tooltip: KeyType;
    done: KeyType;
  };
  orderConfirmation: {
    arrivalDate: KeyType;
    orderNumber: KeyType;
    headerTitle: KeyType;
    headerSubtitle: KeyType;
    orderNumberTitle: KeyType;
    arrivalDateTitle: KeyType;
    btnContinueShopping: KeyType;
    signUpBlockTitle: KeyType;
    signUpBlockSubTitle: KeyType;
    errorMessage: KeyType;
    textInputTitle: KeyType;
    innerButtonText: KeyType;
    continueShopping: KeyType;
  };
  stepper: {
    qtyPrefix: KeyType;
  };
  formDeliveryAddressComponent: {
    saveAddress: KeyType;
    done: KeyType;
    save: KeyType;
    deleteAddress: KeyType;
    saveChanges: KeyType;
    editAddress: KeyType;
    addNewAddress: KeyType;
  };
  addressForm: {
    useAsDefaultAddress: KeyType;
    saveToMyAccount: KeyType;
    thisIsGift: KeyType;
    giftMessage: KeyType;
    giftDescription: KeyType;
  };
  readMentionsReviews: {
    headerText: KeyType;
  };
  reviewsRatingsSummaryComponent: {
    stars: KeyType;
    star: KeyType;
    writeReview: KeyType;
    basedOn: KeyType;
    outOf: KeyType;
  };
  signInSection: {
    signIn: KeyType;
    emailAddress: KeyType;
    password: KeyType;
    passwordRequired: KeyType;
    show: KeyType;
    hide: KeyType;
    forgotPassword: KeyType;
    submit: KeyType;
    createAccount: KeyType;
    logIn: KeyType;
    addToWishlist: KeyType;
    googleBtnAlt: KeyType;
    or: KeyType;
    signInError: KeyType;
  };
  resetPasswordSection: {
    resetPassword: KeyType;
    enterYourEmail: KeyType;
    linkWay: KeyType;
    follow: KeyType;
    emailSent: KeyType;
    didNotGet: KeyType;
    resendEmail: KeyType;
    backToSignIn: KeyType;
    submit: KeyType;
    checkEmail: KeyType;
    error: KeyType;
  };
  personalDetails: {
    buttonTitle: KeyType;
    privacyPolicyInfo: KeyType;
    privacyPolicyLink: KeyType;
    birthdayToolTip: KeyType;
    contactUsLink: KeyType;
    firstName: KeyType;
    lastName: KeyType;
    email: KeyType;
    country: KeyType;
    birthday: KeyType;
    month: KeyType;
    day: KeyType;
  };
  addressBookComponent: {
    btnDelete: KeyType;
    btnEdit: KeyType;
    preferred: KeyType;
    addNewAddress: KeyType;
    title: KeyType;
    errorDelete: KeyType;
  };
  accountDetails: {
    title: KeyType;
    personalDetails: KeyType;
    paymentOptions: KeyType;
    addressBook: KeyType;
    managePassword: KeyType;
    emailPreferences: KeyType;
    needHelp: KeyType;
    contactUs: KeyType;
    signOut: KeyType;
  };
  myOrders: {
    numberTitle: KeyType;
    locationTitle: KeyType;
    statusTitle: KeyType;
    trackingTitle: KeyType;
    trackingButton: KeyType;
    emptyTitle: KeyType;
    emptyButton: KeyType;
    order: KeyType;
  };
  myOrderDetails: {
    title: KeyType;
    paymentMethod: KeyType;
    paymentCard: KeyType;
    billingAddress: KeyType;
    homeDelivery: KeyType;
    shippingMethod: KeyType;
    deliveryOnOrBefore: KeyType;
    tracking: KeyType;
    subtotal: KeyType;
    delivery: KeyType;
    salesTax: KeyType;
    orderTotal: KeyType;
    itemPrice: KeyType;
    itemNumber: KeyType;
    color: KeyType;
    size: KeyType;
  };
  chooseYourStore: {
    title: KeyType;
    FYI: KeyType;
    warn: KeyType;
    field: KeyType;
    search: KeyType;
    done: KeyType;
    preferred: KeyType;
    away: KeyType;
    use: KeyType;
    currentLocation: KeyType;
  };
  bopisPicker: {
    homeTitle: KeyType;
    bopisTitle: KeyType;
    changeStore: KeyType;
    error: KeyType;
  };
  checkoutBOPIS: {
    orderStatusUpdates: KeyType;
    inStoreCurbsidePickUp: KeyType;
    changeMethod: KeyType;
    whosPickingUpTheOrder: KeyType;
    howItWorks: KeyType;
    howItWorksInfo: KeyType;
    free: KeyType;
  };
  notFound: {
    title: KeyType;
    body: KeyType;
  };
  flagship: {
    search: {
      recentSearches: KeyType;
      actions: {
        clear: {
          actionBtn: KeyType;
        };
      };
    };
    sort: {
      actions: {
        sort: {
          actionBtn: KeyType;
        };
      };
    };
    filterListDefaults: {
      clearAll: KeyType;
      cancel: KeyType;
      apply: KeyType;
    };
  };
  account: {
    account: KeyType;
    guestGreeting: KeyType;
    ctaLogin: KeyType;
    ctaCreateAccount: KeyType;
    storeLocator: KeyType;
    appSetting: KeyType;
    appSettingSubText: KeyType;
    settings: {
      stylePreferences: KeyType;
      notificationPreferences: KeyType;
      wishlist: KeyType;
      customerService: KeyType;
      deleteAccount: KeyType;
    };
  };
  notificationPreferences: {
    allowText: KeyType;
    disableText: KeyType;
  };
  accountDelete: {
    areYourSure: KeyType;
    deleteDetails: KeyType;
    deleteCta: KeyType;
    keepCta: KeyType;
  };
  onBoarding: {
    describe: KeyType;
    describePermissions: KeyType;
    skipStep: KeyType;
    nextTypeOfRide: KeyType;
    youShopMostlyFor: KeyType;
    greeting: KeyType;
    youMostlyRideOn: KeyType;
    nextTypeOfFit: KeyType;
    theTypeOfFit: KeyType;
    finishQuiz: KeyType;
    getAlerts: KeyType;
    continue: KeyType;
    getLocate: KeyType;
    men: KeyType;
    women: KeyType;
    racing: KeyType;
    comfort: KeyType;
    road: KeyType;
    mountain: KeyType;
    gravel: KeyType;
    start: KeyType;
  };
  registerModal: {
    title: KeyType;
    form: {
      firstName: KeyType;
      lastName: KeyType;
      email: KeyType;
      password: KeyType;
      faceId: KeyType;
    };
    passwordValidation: {
      chars: KeyType;
      uppercase: KeyType;
      lowercase: KeyType;
      digit: KeyType;
      specialChar: KeyType;
    };
  };
  general: {
    cancel: KeyType;
  };
  pip: {
    sortAndFilter: {
      sortBy: KeyType;
      filter: KeyType;
      apply: KeyType;
      sortTitle: KeyType;
    };
    filter: {
      noResultsFound: KeyType;
      clearAllFilters: KeyType;
    };
    loadMore: KeyType;
    backToTop: KeyType;
  };
  weatherRecommendations: {
    contextualPrompt: {
      header: KeyType;
      prompt: KeyType;
      cta: KeyType;
    };
    recommendations: {
      header: KeyType;
      noRecommendations: KeyType;
      tryDifferent: KeyType;
      noOutdoorRide: KeyType;
      indoorTraining: KeyType;
    };
    changeLocation: {
      header: KeyType;
      inputPlaceHolder: KeyType;
    };
    noLocationServices: {
      header: KeyType;
      prompt: KeyType;
      summer: KeyType;
      springFall: KeyType;
      winter: KeyType;
      allYear: KeyType;
    };
  };
  technologyDetails: {
    header: KeyType;
    header__eyebrow: KeyType;
  };
}
