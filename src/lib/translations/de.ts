import { ProjectTranslationKeys } from './types';

export const de: ProjectTranslationKeys = {
  screenTitles: {
    discover: 'Entdecken',
    shop: 'Shop',
    cart: 'Warenkorb',
    miniCart: {
      zero: 'Artikel',
      one: 'Artikel ({{count}})',
      other: 'Artikel ({{count}})'
    },
    account: 'Konto',
    search: 'Suche',
    reviews: 'Bewertungen',
    favorites: 'Meine Wunschliste',
    paymentOptions: 'Zahlungsmethoden',
    myOrders: 'MEINE BESTELLUNGEN',
    createAccount: 'KONTO ERSTELLEN',
    stylePreferences: 'BEVORZUGTER STIL',
    notificationPreferences: 'BENACHRICHTIGUNGSEINSTELLUNGEN'
  },
  weatherRecommendations: {
    contextualPrompt: {
      header: 'BEI JEDEM WETTER. IMMER BESTENS GERÜSTET',
      prompt: 'Erlauben Sie den Zugriff auf Ihren Standort, ' +
        'um Epfehlungen für das akuelle Wetter zu erhalten',
      cta: 'EMPFEHLUNGEN ERHALTEN'
    },
    recommendations: {
      header: 'FÜR HEUTE EMPFOHLENE AUSRÜSTUNG',
      noRecommendations: 'NO RESULTS',
      tryDifferent: 'Try a different location.',
      noOutdoorRide: 'NO OUTDOOR RIDE RECOMMENDED TODAY',
      indoorTraining: "With these extreame weather conditions, we don't recommend an outdoor ride."
      + 'Consider an indoor training session with this equipment.'
    },
    changeLocation: {
      header: 'LOCATION',
      inputPlaceHolder: 'Stadt, Bundesland, Postleitzahl'
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
    details: 'Genauere Angaben',
    accordions: {
      warranty: 'Gültig für alle Produkte',
      crash: 'Unterstützung im Fall eines Strurzes',
      returns: 'Innerhalb von 30 Tagen ab Warenerhalt.',
      payments: 'Sichere Zahlungsvorgänge'
    }
  },
  joinNowForm: {
    inputTitles: {
      firstName: 'Vorname',
      lastName: 'Nachname',
      phone: 'Handynummer',
      email: 'E-Mail-Adresse',
      password: 'Passwort',
      month: 'Monat',
      day: 'Tag',
      faceId: 'Mit Face ID anmelden'
    },
    requirements: {
      lastName: 'Dieses Feld wird benötigt',
      firstName: 'Dieses Feld wird benötigt',
      email: 'Bette geben Sie eine gültige E-Mail-Adresse ein'
    },
    createAccount: 'KONTO ERSTELLEN',
    show: 'Anzeigen',
    hide: 'Ausblenden',
    passwordRequirements: {
      upper: 'Muss mindestens einen Großbuchstaben beinhalten',
      lower: 'Muss mindestens einen Kleinbuchstaben  beinhalten',
      number: 'Muss mindestens eine Ziffer beinhalten',
      length: 'Muss aus mindestens acht Zeichen bestehen',
      special: 'Muss mindestens ein Sonderzeichen beinhalten'
    },
    gender: 'Geschlecht',
    birthday: 'Geburtstag',
    acceptPolicy: 'Duch das Anklicken von "ANMELDEN" akzeptiere ich die ',
    privacy: 'Datenschutzerklärung',
    and: ' und ',
    terms: 'Terms and Conditions',
    done: 'Vorgang abgeschlossen'
  },
  tabTitles: {
    discover: 'Entdecken',
    shop: 'Shop',
    cart: 'Warenkorb',
    account: 'Konto'
  },
  discover: {
    discoverComponent: 'Komponente auswählen'
  },
  shop: {
    categories: {
      men: 'HERREN',
      women: 'DAMEN'
    },
    landing: {
      shop: {
        featured: 'Vorgestellt',
        clothing: 'Bekleidung',
        accessories: 'Accessoires',
        roadCollections: 'Rennrad Kollektionen',
        mountainCollections: 'Mountainbike Kollektionen',
        gravelCollections: 'Gravel Kollektionen',
        triathlonCollections: 'Triathlon Kollektionen',
        seasons: 'Jahreszeit',
        extraCollections: 'Extra Kollektionen',
        archive: 'Archive'
      },
      featureEquipments: {
        title: 'Titel',
        newArrivals: 'New Arrivals',
        equip: 'Equipe 1/3',
        mille: 'Mille 1/3',
        indoor: 'Indoor',
        rain: 'Rain',
        gifts: 'Geschenke',
        archive: 'Archive'
      }
    },
    header: 'Einkaufen nach Kategorie',
    placeHolder: 'Suche'
  },
  search: {
    trending: 'Trending',
    result: '{{count}} Ergebnisse',
    noResult: '0 Ergebnisse',
    returnedNoResult: 'Deine Suche ergab keine Ergebnisse.',
    didMean: 'Meinten Sie ',
    suggestWord: 'Green Shift?',
    popularSearchTerms: 'Populäre Suchbegriffe',
    placeholder: 'SUCHE...'
  },
  pdp: {
    size: 'Grösse: ',
    color: 'Farbe: ',
    sizeChart: 'Größentabelle',
    whatsMySize: 'Was ist meine Größe?',
    seeAllCategories: 'Alle Kategorien ansehen',
    addToWishlist: 'Zur Wunschliste hinzufügen',
    addedToWishlist: 'Zur Wunschliste hinzugefügt',
    completeTheLook: 'Look vervollständigen',
    customerPhotos: 'Kundenfotos',
    youMayAlsoLike: 'Das Könnte ihnen auch Gefallen',
    tittleCarouselButton: 'Alle anschen',
    outOfStock: 'Ausverkauft',
    getInStockAlert: '"Auf Lager"-Benachrichtigung',
    updateStockAlert: 'Verfügbarkeit updaten',
    tryAgain: 'TRY AGAIN',
    removeAlert: 'Remove Alert',
    addToBag: 'IN DEN WARENKORK LEGEN',
    addedToBag: 'ADDED TO BAG',
    howWhenToUse: 'WANN/WIE ES EINGESETZT WIRD',
    composition: 'ZUSAMMENSETZUNG',
    warranty: '2 JAHRE GARANTIE',
    crash: 'CRASH POLICY',
    returns: 'KOSTENLOSE RÜCKERSTATTUNG',
    payments: 'GESICHERTE ZAHLUNG',
    notifyButton: 'Benachrichtigung ween verfügbar',
    notifyWhenAvailableTitle: 'benachrichtigen Sie mich, wenn der Artikel wieder auf Lager ist',
    pinchToZoom: 'Zum Vergrößern anklicken',
    recentlyViewed: 'Kürzlich Angesehen',
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
      // tslint:disable-next-line: ter-max-len
      ageHasAnImpact: 'Age has an ipact on how your weight is distributed. Knowing your age helps us recommend the right size.',
      reviewMeasurements: 'NEXT: REVIEW MEASUREMENTS',
      exitSizeChart: 'EXIT SIZE CHART',
      yourRecommendedSize: 'YOUR RECOMMENDED SIZE IS {{size}}',
      continueShopping: 'CONTINUE SHOPPING',
      errorNotification: 'We are unable to add this item to your stock alerts at this time. ' +
      'Please wait and try again later.',
      successNotification: 'Thank you!\nWe will email you if this item becomes available.',
      startOver: 'START OVER',
      confirmPrompt:
        // tslint:disable-next-line: ter-max-len
        'Estimated measurements are initially provided based on your height, weight and age. For more accurate sizing recommendations, we encourage you to enter your actual measurements in the fields above.',
      seeYourSize: 'NEXT: SEE YOUR SIZE',
      back: 'BACK',
      confirmHeader: 'DO YOU WANT TO CHANGE ANY OF YOUR MEASUREMENTS?'
    }
  },
  reviews: {
    from: 'from',
    verifiedBuyer: 'Verified Buyer',
    helpful: 'Helpful • {{count}}',
    sortBy: 'Sortieren',
    title: 'Sortieren',
    apply: 'Anwenden'
  },
  recentlyViewed: {
    header: 'Kürzlich Angesehen'
  },
  accessibility: {
    searchBtn: 'Suche Button'
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
    miniCartCTA: 'Vorgang abgeschlossen',
    stockItems: 'Remove {{count}} unavailable items to continue.',
    textButton: 'Remove All',
    outOfStock: 'Ausverkauft',
    newArrivals: 'New Arrivals',
    removeItem: 'Remove Item'
  },
  wishlist: {
    yourWishlist: 'Your Wishlist',
    moveToBag: '+ Move to Bag',
    viewAll: 'Alle anschen'
  },
  ymal: {
    header: 'Look vervollständigen',
    addToBag: '+ In den Warenkork legen'
  },
  checkoutBtns: {
    applePay: 'Apple Pay',
    payPal: 'PayPal',
    checkout: 'Kasse',
    choosePayment: 'Weiter zur Kasse'
  },
  flagship: {
    search: {
      recentSearches: 'Jüngste',
      actions: {
        clear: {
          actionBtn: 'Alles löschen'
        }
      }
    },
    sort: {
      actions: {
        sort: {
          actionBtn: 'Sortieren'
        }
      }
    },
    filterListDefaults: {
      clearAll: 'Alles löschen',
      cancel: 'STORNIEREN',
      apply: 'ANWENDEN'
    }
  },
  pagination: {
    loadMore: 'Load More',
    of: 'von',
    showing: 'Anzeigen'
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
    required: 'dieses feld wird benötigt',
    email: 'Please enter valid email',
    promoCode: 'Bitte Promocode eingeben',
    reviewErrors: 'Bitte die unten angezeigten Fehler überprüfen, um fortzufahren',
    deliveryAddressError: 'Bitte Lieferadresse hinzufügen.',
    pleaseEnterSecurCode: 'Bitte Sicherheitscode einfügen',
    unavailableCartItem:
      'Ein oder mehrere Artikel in Ihrem Warenkorb sind nicht verfügbar.' +
      'Wir haben den Warenkorb aktualisiert',
    unauthorised: 'Bitte mlden Sie sich in Ihrem Kundenkonto an',
    validationSpecialCharacters:
      'Dieses Feld darf keine Sonderzeichen enthalten.',
    correctCurrentPassword:
      'Bitte stellen Sie sicher, dass das eingegebene Passwort stimnt',
    invalidCredentials: 'Bitte geben Sie eine gültige E-Mail und ein Passwort ein'
  },
  inputTitles: {
    required: '*',
    email: 'Email',
    emailAddress: 'E-Mail-Adresse',
    phoneNumber: 'Phone Number',
    zip: 'ZIP Code',
    state: 'State',
    city: 'City',
    address2: 'Address 2',
    address2Plus: '+ Address 2 (Optional)',
    street: 'Address 1',
    lastName: 'Nachname',
    firstName: 'Vorname',
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
    items: 'Artikel',
    unavailableWarning: 'Remove {{count}} unavailable items to continue',
    subtotal: 'Subtotal',
    delivery: 'Delivery',
    salesTax: 'Sales Tax',
    orderTotal: 'Order Total',
    defaultValue: '$00.00'
  },
  checkout: {
    signIn: 'Anmelden',
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
    done: 'Vorgang abgeschlossen'
  },
  managePassword: {
    title: 'PASSWORT VERWALTEN',
    currentPassword: 'Aktuelles Passwort',
    newPassword: 'Neues Passwort',
    instruction: {
      uppercase: 'Muss mindestens einen Großbuchstaben beinhalten',
      lowercase: 'Muss mindestens einen Kleinbuchstaben  beinhalten',
      oneNumber: 'Muss mindestens eine Ziffer beinhalten',
      characters: 'Muss mindestens 8 Zeichen umfassen',
      special: 'Mindestens 1 Sonderzeichen'
    },
    confirmNewPassword: 'Neues Passwort bestätigen',
    updatePassword: 'Passwort aktualisieren',
    confirmPasswordError: 'Passworter stimmen nicht überein',
    success: 'Änderungen gespeichert'
  },
  button: {
    addToBag: 'In den Warenkork legen',
    orderDetails: 'genauere Angaben'
  },
  promoForm: {
    applyPromoCode: 'Promocode oder Geschenkgutschein anwenden',
    currency: '',
    inputTitle: 'Code eingeben',
    innerButtonText: 'Anwenden',
    errorMessage: 'Der eingegebene Code ist niche gültig oder abgelaufen'
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
    edit: 'Bearbeiten',
    add: 'Add',
    textInputTitle: '*Security code',
    textInputError: 'Bitte Sicherheitscode einfügen.',
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
    title: 'Kontaktdaten bearbeiten',
    description: 'Eine Bestätigungsmail wird an Ihre E-Mailadresse gesendet.',
    emailLabel: '*E-Mail-Adresse',
    emailError: 'Ungültige E-Mail',
    emailPlaceholder: 'Jondoe@gmail.com',
    done: 'Vorgang abgeschlossen'
  },
  deliveryAddressComponent: {
    title: 'Edit Delivery Address',
    done: 'Vorgang abgeschlossen',
    addNewAddress: '+ Neue Adresse hinzufügen',
    deleteAddress: 'Delete Address',
    editAddress: 'Edit Address'
  },
  paymentMethodComponent: {
    title: 'Edit Payment Method',
    separator: '/',
    dots: ' •••• ',
    addNewPayment: '+ Add New Payment Method',
    addNewPaymentShort: 'Add new payment method',
    deletePayment: 'Löschen'
  },
  deliveryOptionsComponent: {
    headerTitle: 'Edit Delivery Method'
  },
  creditCardPaymentComponent: {
    done: 'Vorgang abgeschlossen',
    billingAddress: 'Billing Address',
    useAsDefault: 'Use as my default payment',
    sameAsShippingAddressShort: 'Same as Shipping Address',
    sameAsShippingAddressFull: 'Billing Address same as Shipping Address',
    acceptedCards: 'Accepted Cards:'
  },
  CTAButton: {
    submit: 'Übermitteln',
    enable: 'AKTIVIEREN',
    disable: 'DEAKTIVIEREN'
  },
  sortOptions: {
    relevance: 'Relevanz',
    title: 'Sortieren nach'
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
    qtyPrefix: 'Anzahl (Az.) '
  },
  formDeliveryAddressComponent: {
    saveAddress: 'Save Address',
    done: 'VORGANG ABGESCHLOSSEN',
    save: 'SPAREN',
    deleteAddress: 'DELETE ADDRESS',
    saveChanges: 'SAVE CHANGES',
    editAddress: 'EDIT ADDRESS',
    addNewAddress: 'NEUE ADRESSE HINZUFÜGEN'
  },
  addressForm: {
    useAsDefaultAddress: 'Use as my default address',
    saveToMyAccount: 'In meinen Konto speichern',
    thisIsGift: 'DIES IST EIN GESCHENK',
    giftMessage: 'NACHRICHT ZUM GESCHENK',
    giftDescription:
      'Die Nachrich darf nicht mehr als 160 Zeichen umfassen (40 pro Zeile). ' +
      'Ihr Geschenk wird mit dieser Nachricht und einer Geschenkequittung zugestellt'
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
    signIn: 'Anmelden',
    emailAddress: 'E-Mail-Adresse',
    password: 'Passwort',
    passwordRequired: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    show: 'Anzeigen',
    hide: 'Ausblenden',
    forgotPassword: 'Passwort vergessen?',
    submit: 'Anmelden',
    createAccount: 'Konto Ersellen',
    logIn: 'Anmelden',
    addToWishlist:
      'Um diesen Artikel zu Ihrer Wunschliste hinzuzufügen, ' +
      'benötigen Sie einen Lorna Jane Account, bitte ' +
      'loggen Sie sich ein oder erstellen Sie ein Kundenkonto um fortzufahren',
    googleBtnAlt: 'Anmelden mit Google',
    or: 'ODER',
    signInError: 'The account sign-in was incorrect' +
      ' or your account is disabled temporarily.' +
      ' Please wait and try again later.'
  },
  resetPasswordSection: {
    resetPassword: 'Passwort zurücksetzen',
    enterYourEmail:
      'Bitte geben SIe Ihre E-Mailadresse ein,' +
      'um eine Anleitung zum Zurücksetzen Ihres Passwortes zu bekommen.',
    linkWay: 'Ein Link ist auf dem Weg zu Ihnen ',
    follow: '. Follow the emailed instructions to reset your password.',
    emailSent: 'Email Sent',
    didNotGet: 'Nichts erhalten?',
    resendEmail: 'E-mail erneut versenden',
    backToSignIn: 'Zurück zum Login',
    submit: 'Reset-Link versenden',
    checkEmail: 'Befolgen SIe die Anleitung um Ihr Passwort zurückzusetzen',
    error: 'Etwas ist schiefgelaufen, bitte versuchen Sie es apäter noch einmal'
  },
  personalDetails: {
    buttonTitle: 'Sparen',
    privacyPolicyInfo:
      'Um zu erfahren, wie wir Ihre Daten nutzen, schauen SIe bitte in unsere',
    privacyPolicyLink: 'datenschutzerklärung.',
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'Email',
    birthday: 'Geburtstag',
    month: 'Monat',
    day: 'Tag',
    country: 'Land',
    birthdayToolTip:
      'Um Ihnen etwas Spezielles zu schicken. Um Ihr Geburtsdatum zu ändern,',
    contactUsLink: 'kontaktieren sie uns'
  },
  addressBookComponent: {
    btnDelete: 'Löschen',
    btnEdit: 'Bearbeiten',
    preferred: 'BEVORZUGT',
    addNewAddress: '+ Neue Adresse hinzufügen',
    title: 'ADRESSBUCH',
    errorDelete: 'Nachrichten'
  },
  accountDetails: {
    title: 'Kontodaten',
    personalDetails: 'Persönliche Daten',
    paymentOptions: 'Zachlungsoptionen',
    addressBook: 'Adressbuch',
    managePassword: 'Passwort verwalten',
    emailPreferences: 'E-Mail Einstellungen',
    needHelp: 'BENÖTIGEN SIE HILFE?',
    contactUs: 'Kontaktieren Sie uns',
    signOut: 'Ausloggen'
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
    title: 'Wählen sie Ihren Store',
    FYI: 'Übrigens: Wir bieten einen kontaktlosen Pick-Up-Service an!',
    warn: 'Alle Artikel für den Pick-Up-Service müssen im selben Geschäft abgeholt werden',
    field: 'Stadt, Bundesland, Postleitzahl',
    search: 'Suche',
    done: 'Vorgang abgeschlossen',
    preferred: 'Bevorzugt',
    away: 'Entfernung',
    use: 'verwenden ',
    currentLocation: 'Aktuellen Standort'
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
    body: 'Entschuldigung, wir können die gesuchte Seite leider nicht finden.'
  },
  account: {
    account: 'Konto',
    storeLocator: 'Eine Filiale finden',
    guestGreeting: 'Steben nach der Technologie von Morgen \n' +
      'um heute die beste Performance zu erzielen',
    ctaLogin: 'ANMELDEN',
    ctaCreateAccount: 'REGISTRIEREN',
    appSetting: 'App-Einstellungen',
    appSettingSubText: 'Bevorzugter Stil, Benachrichtigungen, Wunschliste',
    settings: {
      stylePreferences: 'Bevorzugter Stil',
      notificationPreferences: 'Benachrichtigungseinstellungen',
      wishlist: 'Wunschliste',
      customerService: 'Kundendienst',
      deleteAccount: 'Konto löschen'
    }
  },
  notificationPreferences: {
    allowText:
      'Lassen Sie in den Systemeinstellungen Benachrichtigungen zu,' +
      'um aktuelle Informationen über Angebote, Aktionen und Bestandsmeldungen zu erhalten. ' +
      'Diese Funktion kann jederzeit deaktiviert werden.',
    disableText:
      'Deaktivieren Sie in den Systemeinstellungen die aktuellen Informationen über Angebote, ' +
      'Aktionen und Bestandsmeldungen. Sie können diese Funktion jederzeit wieder aktivieren.'
  },
  accountDelete: {
    areYourSure: 'Sind Sie sicher, dass Sie Ihr Konto löschen möchten?',
    deleteDetails: 'Das Löschen Ihres Kontos wird bis zu 3 Tage in Anspruch nehmen. ' +
      'Sie erhalten eine Bestätigung per E-Mail, sobald Ihr Konto gelöscht wurde ' +
      ' und werden sofort abgemeldet',
    deleteCta: 'Ja, mein Konto löschen',
    keepCta: 'Nein, mein Konto soll aktiv bleiben'
  },
  onBoarding: {
    describe:
      'Bitte wählen Sie alle zutreffenden Punkte aus. ' +
      'Sie können Ihre Einstellungen jederzeit aktualisieren.',
    describePermissions:
      'Sie können Ihre Einstellungen jederzeit aktualisieren.',
    skipStep: 'Punkt überspringen',
    nextTypeOfRide: 'NÄCHSTER PUNKT: Art der fahrten',
    youShopMostlyFor: 'Sie interessieren sich hauptsächlich für',
    greeting:
      'wir haben ein paar kurze fragen, um ihr erlebnis zu optimieren.',
    youMostlyRideOn: 'Sie fahren meistens',
    nextTypeOfFit: 'NEXT: art der passform',
    theTypeOfFit: 'Bevorzugte Passform',
    finishQuiz: 'Beende das Quiz',
    getAlerts:
      'ERHALTEN SIE AKTUELLE INFORMATIONEN ÜBER NEUE PRODUKTE UND EXKLUSIVE VERANSTALTUNGEN.',
    continue: 'weiter',
    getLocate: 'Finden Sie Geschäfte in Ihrer Nähe und erhalten Sie wetterabhängige Empfehlungen',
    men: 'PROARTIKEL FÜR HERRENDUCTS',
    women: 'ARTIKEL FÜR DAMEN',
    racing: 'AERODYNAMISCH',
    comfort: 'NORMAL',
    road: 'AUF STRASSEN',
    mountain: 'IN DEN BERGEN',
    gravel: 'AUF SCHOTTERWEGEN',
    start: 'JETZT KAUFEN'
  },
  registerModal: {
    title: 'Registrieren',
    form: {
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail-Adresse',
      password: 'Passwort',
      faceId: 'Mit Face ID anmelden'
    },
    passwordValidation: {
      chars: 'Muss aus mindestens acht Zeichen bestehen',
      uppercase: 'Muss mindestens einen Großbuchstaben beinhalten',
      lowercase: 'Muss mindestens einen Kleinbuchstaben  beinhalten',
      digit: 'Muss mindestens eine Ziffer beinhalten',
      specialChar: 'Muss mindestens ein Sonderzeichen beinhalten'
    }
  },
  general: {
    cancel: 'Stornieren'
  },
  pip: {
    sortAndFilter: {
      sortBy: 'Sortieren:',
      filter: 'Filter',
      apply: 'ANWENDEN',
      sortTitle: 'SORTIEREN'
    },
    filter: {
      noResultsFound: 'Keine suchergenbnisse.',
      clearAllFilters: 'ALLE FILTER LÖSCHEN'
    },
    loadMore: 'Load More',
    backToTop: 'Back to Top'
  },
  technologyDetails: {
    header: 'THE FINER DETAILS',
    header__eyebrow: 'TECHNOLOGY OVERVIEW'
  }
};
