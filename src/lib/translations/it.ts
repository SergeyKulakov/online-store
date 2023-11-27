import { ProjectTranslationKeys } from './types';

export const it: ProjectTranslationKeys = {
  screenTitles: {
    discover: 'Esplora',
    shop: 'Shop',
    cart: 'Carrello',
    miniCart: {
      zero: 'Prodotti',
      one: 'Prodotti ({{count}})',
      other: 'Prodotti ({{count}})'
    },
    account: 'Account',
    search: 'Cerca',
    reviews: 'Recensioni',
    favorites: 'I miei favoriti',
    paymentOptions: 'Metodo di Pagamento',
    myOrders: 'I MIEI ORDINI',
    createAccount: 'CREA ACCOUNT',
    stylePreferences: 'PREFERENZE DI STILE',
    notificationPreferences: 'IMPOSTAZIONI NOTIFICHE'
  },
  weatherRecommendations: {
    contextualPrompt: {
      header: 'SEMPRE PRONTI, IN OGNI CONDIZIONE ATMOSFERICA.',
      prompt: 'Abilita la tua posizione per ricevere le raccomandazioni in tempo reale.',
      cta: 'RICEVI LE RACCOMANDAZIONI'
    },
    recommendations: {
      header: 'EQUIPAGGIAMENTO CONSIGLIATO PER OGGI',
      noRecommendations: 'NO RESULTS',
      tryDifferent: 'Try a different location.',
      noOutdoorRide: 'NO OUTDOOR RIDE RECOMMENDED TODAY',
      indoorTraining: "With these extreame weather conditions, we don't recommend an outdoor ride."
      + 'Consider an indoor training session with this equipment.'
    },
    changeLocation: {
      header: 'INDIRIZZO',
      inputPlaceHolder: 'CITTÀ, STATO O CAP'
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
    details: 'Particolarità',
    accordions: {
      warranty: 'Su tutti i prodotti',
      crash: 'Se cadi e rovini il prodotto',
      returns: 'Entro 30 giorni dalla consegna',
      payments: 'Elaborazione dei pagamenti in modo sicuro'
    }
  },
  joinNowForm: {
    inputTitles: {
      firstName: 'Nome',
      lastName: 'Cognome',
      phone: 'Telefono',
      email: 'Indirizzo email',
      password: 'Password',
      month: 'Mese',
      day: 'Giorno',
      faceId: 'Usa Face ID'
    },
    requirements: {
      lastName: 'Questo campo è obbligatorio',
      firstName: 'Questo campo è obbligatorio',
      email: 'Inserisci un indirizzo email valido'
    },
    createAccount: 'CREA ACCOUNT',
    show: 'Mostra',
    hide: 'Nascondi',
    passwordRequirements: {
      upper: 'Deve contenere alemeno una lettera maiuscola',
      lower: 'Deve contenere alemeno una lettera minuscola',
      number: 'Deve contenere alemeno un numero',
      length: 'Deve contenere alemeno otto caratteri',
      special: 'Deve conternere alenemo un carattere speciale'
    },
    gender: 'Genere',
    birthday: 'Compleanno',
    acceptPolicy: "Cliccando 'Iscrivititi' Accetto l ",
    privacy: 'Informativa sulla privacy',
    and: ' e ',
    terms: 'Termini e Condizioni',
    done: 'Fatto'
  },
  tabTitles: {
    discover: 'Esplora',
    shop: 'Shop',
    cart: 'Carrello',
    account: 'Account'
  },
  discover: {
    discoverComponent: 'Scoprire il componente'
  },
  shop: {
    categories: {
      men: 'UOMO',
      women: 'DONNA'
    },
    landing: {
      shop: {
        featured: 'In Primo Piano',
        clothing: 'Abbigliamento',
        accessories: 'Accessori',
        roadCollections: 'Collezione Strada',
        mountainCollections: 'Collezione Mountain Bike',
        gravelCollections: 'Collezione Gravel',
        triathlonCollections: 'Collezione Triathlon',
        seasons: 'Stagioni',
        extraCollections: 'Collezioni Extra',
        archive: 'Archivio'
      },
      featureEquipments: {
        title: 'Titolo',
        newArrivals: 'New Arrivals',
        equip: 'Equipe 1/3',
        mille: 'Mille 1/3',
        indoor: 'Indoor',
        rain: 'Rain',
        gifts: 'Regali',
        archive: 'Archive'
      }
    },
    header: 'Acquista per categoria',
    placeHolder: 'Cerca'
  },
  search: {
    trending: 'Trending',
    result: '{{count}} Risultati',
    noResult: '0 Risultati',
    returnedNoResult: 'La ricerca non ha prodotto risultati',
    didMean: 'Intendevi ',
    suggestWord: 'Green Shift?',
    popularSearchTerms: 'Ricerche consigliate',
    placeholder: 'CERCA...'
  },
  pdp: {
    size: 'Taglia: ',
    color: 'Colore: ',
    sizeChart: 'Guida alle taglie',
    whatsMySize: 'Trova la tua misura',
    seeAllCategories: 'Vedi Tutte le Categorie',
    addToWishlist: 'Aggiungi ai preferiti',
    addedToWishlist: 'Aggiunto ai Preferiti',
    completeTheLook: 'Completa il look',
    customerPhotos: 'Foto di Clienti',
    youMayAlsoLike: 'POTREBBE PIACERTI ANCHE',
    tittleCarouselButton: 'Guarda Tutto',
    outOfStock: 'Esaurito',
    getInStockAlert: 'Avvisami quando torna in stock',
    updateStockAlert: "Aggiorna i'avviso di back in stock",
    tryAgain: 'TRY AGAIN',
    removeAlert: 'Remove Alert',
    addToBag: 'AGGIUNGI AL CARRELLO',
    addedToBag: 'ADDED TO BAG',
    howWhenToUse: 'QUANDO/COME USAERE QUESTO PRODOTTO',
    composition: 'COMPOSIZIONE',
    warranty: '2 ANNI DI GARANZIA',
    crash: 'CRASH POLICY',
    returns: 'RESI GRATUITI',
    payments: 'PAGAMENTI SICURI',
    notifyButton: 'Notifica quando disponibile',
    notifyWhenAvailableTitle: 'Avvisami quando disponibile',
    pinchToZoom: 'Tocca per ingrandire',
    recentlyViewed: 'Visti di recente',
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
    header: 'Visti di recente'
  },
  accessibility: {
    searchBtn: 'Cerca'
  },
  cart: {
    moveToWishlist: 'Move to Wishlist',
    haveAPromo: 'Have a Promo?',
    subtotal: 'Subtotale',
    shipping: 'Spedizione',
    shippingTooltip:
      'Delivery fees will be calculated at checkout based on delivery address',
    tax: 'Tasse',
    taxTooltip: `The actual tax will be calculated \
in checkout based on the applicable state \
and local sales taxes.`,
    total: 'Estimated Totale',
    estimatedShipping: 'Est. Arrival Date',
    empty: 'Your Bag is Empty',
    shopNow: 'Shop Now',
    checkoutModalTitle: 'Checkout Options',
    miniCartCTA: 'Done',
    stockItems: 'Remove {{count}} unavailable items to continue.',
    textButton: 'Remove All',
    outOfStock: 'Non disponibile',
    newArrivals: 'New Arrivals',
    removeItem: 'Remove Item'
  },
  wishlist: {
    yourWishlist: 'Your Wishlist',
    moveToBag: '+ Move to Bag',
    viewAll: 'View All'
  },
  ymal: {
    header: 'Completa il look',
    addToBag: '+ Aggiungi al carrello'
  },
  checkoutBtns: {
    applePay: 'Apple Pay',
    payPal: 'PayPal',
    checkout: 'Checkout',
    choosePayment: 'Procedi a Checkout'
  },
  flagship: {
    search: {
      recentSearches: 'Recenti',
      actions: {
        clear: {
          actionBtn: 'Rimuovi tutto'
        }
      }
    },
    sort: {
      actions: {
        sort: {
          actionBtn: 'Ordina per'
        }
      }
    },
    filterListDefaults: {
      clearAll: 'RIMUOVI TUTTO',
      cancel: 'CANCELLA',
      apply: 'APPLICA'
    }
  },
  pagination: {
    loadMore: 'Show More',
    of: 'di',
    showing: 'Mostrando'
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
    required: 'Questo campo è obbligatorio',
    email: 'E-mail non valida',
    promoCode: 'Inserisci il codice sconto',
    reviewErrors: 'Per procedere, controlla gli errori riportati di sequito',
    deliveryAddressError: 'Aggiungi un indirizzo di consegna',
    pleaseEnterSecurCode: 'Inserisci il codice di sicurezza',
    unavailableCartItem:
      "L'articolo (gli articoli) nel tuo carrello non è (sono) più disponibili. " +
      'Abbiamo aggiornato il tuo carrello',
    unauthorised: 'Accedi prima',
    validationSpecialCharacters: "Questo campo non puo' contenere caratteri speciali",
    correctCurrentPassword:
      'Assicurati che la password inserita sia corretta',
    invalidCredentials: "Inserire un'email e una password valide"
  },
  inputTitles: {
    required: '*',
    email: 'Email',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    zip: 'Zip Code',
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
    country: 'Nazione',
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
    orderTotal: 'Total',
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
    title: 'GESTISCI PASSWORD',
    currentPassword: 'Password Attuale',
    newPassword: 'Nuova password',
    instruction: {
      uppercase: 'Deve contenere almeno una lettera maiuscola',
      lowercase: 'Deve contenere almeno una lettera minuscola',
      oneNumber: 'Deve contenere almeno un numero',
      characters: 'Deve contenere almeno 8 caratteri',
      special: 'Almeno un carattere speciale'
    },
    confirmNewPassword: 'Conferma nuova password',
    updatePassword: 'Aggiorna Password',
    confirmPasswordError: 'La Password non corrisponde',
    success: 'Modifiche Salvate'
  },
  button: {
    addToBag: 'Aggiungi al carrello',
    orderDetails: 'details'
  },
  promoForm: {
    applyPromoCode: 'Applica il codice sconto o il buono regalo',
    currency: '- $',
    inputTitle: 'Inserici il codice sconto',
    innerButtonText: 'Applica',
    errorMessage: 'Il codice sconto inserito non è valito o è scaduto'
  },
  orderReviewComponent: {
    btn: 'Pay Now',
    delivery: 'Delivery',
    payment: 'Payment',
    billing: 'Billing',
    contactInfo: 'Contact Information',
    deliveryAddress: 'Delivery Address',
    deliveryMethod: 'Delivery Method',
    paymentMethod: 'Metodi di pagamento',
    warningExpired: 'Your payment method is expired. Please edit to proceed.',
    billingAddress: 'Indirizzo di fatturazione',
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
    title: 'Modifica le Informazioni di Contatto',
    description: "La tua email sarà usata per inviarti la conferma d'ordine",
    emailLabel: '*Indirizzo email',
    emailError: 'Email non valida',
    emailPlaceholder: 'Jondoe@gmail.com',
    done: 'Fatto'
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
    deletePayment: 'Elimina'
  },
  deliveryOptionsComponent: {
    headerTitle: 'Edit Delivery Method'
  },
  creditCardPaymentComponent: {
    done: 'Done',
    billingAddress: 'Indirizzo di fatturazione',
    useAsDefault: 'Use as my default payment',
    sameAsShippingAddressShort: 'Same as Shipping Address',
    sameAsShippingAddressFull: 'Billing Address same as Shipping Address',
    acceptedCards: 'Accepted Cards:'
  },
  CTAButton: {
    submit: 'Invia',
    enable: 'ATTIVA',
    disable: 'DISATTIVA'
  },
  sortOptions: {
    relevance: 'Rilevanza',
    title: 'Ordina Per'
  },
  orderConfirmation: {
    arrivalDate: 'XX/XX/XXXX',
    orderNumber: '19349146197649',
    headerTitle: 'Thanks for your Order!',
    headerSubtitle: 'An order confirmation was sent to jondoe@gmail.com.',
    orderNumberTitle: 'Order Number:',
    arrivalDateTitle: 'Est. Arrival Date:',
    btnContinueShopping: 'Continua gli acquisti',
    signUpBlockTitle: 'Sign Up for Text Alerts',
    signUpBlockSubTitle:
      'We’ll let you know when your order has shipped!' +
      '(Data & messaging rates may apply.)',
    errorMessage: 'error',
    textInputTitle: 'Telefono',
    innerButtonText: 'Sign Up',
    continueShopping: 'Continua gli acquisti'
  },
  stepper: {
    qtyPrefix: 'Quantità: '
  },
  formDeliveryAddressComponent: {
    saveAddress: 'Save Address',
    done: 'DONE',
    save: 'SALVA',
    deleteAddress: 'DELETE ADDRESS',
    saveChanges: 'SAVE CHANGES',
    editAddress: 'EDIT ADDRESS',
    addNewAddress: 'ADD NEW ADDRESS'
  },
  addressForm: {
    useAsDefaultAddress: 'Use as my default address',
    saveToMyAccount: 'Salva sul mio Account',
    thisIsGift: 'È UN REGALO',
    giftMessage: 'SCRIVI IL TUO MESSAGGIO',
    giftDescription: 'Il messaggio non può superare i 160 caratteri (40 per riga). ' +
      'Il vostro regalo arriverà con questo messaggio e una recevuta di regalo'
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
    emailAddress: 'Indirizzo email',
    password: 'Password',
    passwordRequired: 'Inserisci una password valida',
    show: 'Mostra',
    hide: 'Nascondi',
    forgotPassword: 'Hai dimenticato la password?',
    submit: 'Accedi',
    createAccount: 'Crea Account',
    logIn: 'Accedi',
    addToWishlist: 'Per aggiungere questo articolo ai tuoi preferitit, ' +
      'hai bisogno di un account Lorna Jane, accedi o crea un account per continuare',
    googleBtnAlt: 'Accedi con il tuo account Google',
    or: 'OPPURE',
    signInError: 'Username o password non validi'
  },
  resetPasswordSection: {
    resetPassword: 'Reimpostare la password',
    enterYourEmail:
      'Inserisci la tua email per ricevere istruzioni per reimpostare la password',
    linkWay: 'Un link è in arrivo a ',
    follow: 'Segui le istruzioni inviate via email per reimpostare la password',
    emailSent: 'Email Inviata',
    didNotGet: 'Non l\'hai ricevuta?',
    resendEmail: 'Reinvia l\'email',
    backToSignIn: 'Torna ad accedi',
    submit: 'Invia il link per reimpostare la password',
    checkEmail: "Controlla l'indirizzo email per reimpostare la password",
    error: 'Qualcose è andata storto, riprova più tardi'
  },
  personalDetails: {
    buttonTitle: 'Salva',
    privacyPolicyInfo:
      'Per vedere come possiamo utilizzare le vostre informazioni, consulta la nostra',
    privacyPolicyLink: 'Informativa sulla privacy.',
    firstName: 'Nome',
    lastName: 'Cognome',
    email: 'Email',
    birthday: 'Compleanno',
    month: 'Mese',
    day: 'Giorno',
    country: 'Paese',
    birthdayToolTip:
      'Per inviarti qualcose di speciale. Per modificare la data di nascita, si prega di',
    contactUsLink: 'contattaci'
  },
  addressBookComponent: {
    btnDelete: 'Elimina',
    btnEdit: 'Modifica',
    preferred: 'PREFERITO',
    addNewAddress: '+ Aggiungi un nuovo isdirizzo',
    title: 'RUBRICA',
    errorDelete: 'Messaggistica Instantanea'
  },
  accountDetails: {
    title: 'Account',
    personalDetails: 'Informazioni personali',
    paymentOptions: 'Metodi di pagamento',
    addressBook: 'Address Book',
    managePassword: 'Manage Password',
    emailPreferences: 'Preferenze di posta elettronica',
    needHelp: 'POSSIAMO AIUTARTI?',
    contactUs: 'Contact Us',
    signOut: 'Disconnettersi'
  },
  myOrders: {
    numberTitle: 'purchase number:',
    locationTitle: 'purchase location:',
    statusTitle: 'Stato Ordine',
    trackingTitle: 'tracking #:',
    trackingButton: 'Track Order',
    emptyTitle: 'We have no order records for this account.',
    emptyButton: 'Start Shopping',
    order: 'Ordine # {{order}}'
  },
  myOrderDetails: {
    title: 'Ordine # {{id}}',
    paymentMethod: 'Metodi di pagamento',
    paymentCard: '{{card}} ending in {{lastDigits}}',
    billingAddress: 'Indirizzo di fatturazione',
    homeDelivery: 'Home Delivery:',
    shippingMethod: 'Metodo di spedizione:',
    deliveryOnOrBefore: 'Delivery On Or Before:',
    tracking: 'Tracking #:',
    subtotal: 'Subtotale',
    delivery: 'Delivery',
    salesTax: 'Tasse',
    orderTotal: 'Totale',
    itemPrice: 'Prezzo',
    itemNumber: 'Item #',
    color: 'Colore',
    size: 'Size'
  },
  chooseYourStore: {
    title: 'Scegli il tuo negozio',
    FYI: 'Per vostra informazione: offriamo il ritiro a domicilio senza contatto (!)',
    warn: 'Tutti gli articoli ritirati in negozio devono essere ritirati nello stesso luogo',
    field: 'Città, Stato, o CAP',
    search: 'Cerca',
    done: 'Done',
    preferred: 'Preferred',
    away: 'chilometri di distanza',
    use: 'Usa ',
    currentLocation: 'Posizione attuale'
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
    body: 'Ci dispiace, non è stato possibile trovare la pagina che stai cercando.'
  },
  account: {
    account: 'Account',
    storeLocator: 'Tova un negozio',
    guestGreeting: 'ALLA RICERCA DELLA TECNOLOGIA DI DOMANI \n' +
      'PER FORNIRTI LE PRESTAZIONI MIGLIORI',
    ctaLogin: 'ACCEDI',
    ctaCreateAccount: 'REGISTRATI',
    appSetting: 'Impostazioni dell\'app',
    appSettingSubText: 'Preferenze di Stile, Notifiche, Preferiti',
    settings: {
      stylePreferences: 'Preferenze di Stile',
      notificationPreferences: 'Notifiche',
      wishlist: 'Preferiti',
      customerService: 'Servizio Clienti',
      deleteAccount: 'Elimina Account'
    }
  },
  notificationPreferences: {
    allowText:
      'Attiva le notifiche nelle preferenze di sistema per ricevere aggiornamenti su offerte, ' +
      'promozioni e avvisi sulla disponibilità di prodotti. ' +
      'Le notifiche possono essere disattivate in qualsiasi momento.',
    disableText:
      'Disattiva gli aggiornatmenti su offerte, ' +
      'promozioni e avvisi sulla disponibilità dei prodotti nelle preferenze di sistema. ' +
      'È possibile riattivarli in qualsiasi momento.'
  },
  accountDelete: {
    areYourSure: 'Sei sicuro di voler elinimare il tuo account?',
    deleteDetails: "L'eliminazione di un account potrebbe richiedere fin a 3 giorni. " +
      "Riceverai un'email di conferma non appena il tuo account sarà stato cancellato " +
      "'e sarai immediatamente disconnesso",
    deleteCta: 'Si, elimina il mio account',
    keepCta: 'No, manteni il mio account attivo'
  },
  onBoarding: {
    describe: 'Puoi selezionare tutte le risposte pertinenti ' +
      'e modificarle in qualsiasi momento nelle impostazioni.',
    describePermissions:
      'Puoi modificare la tua selezione in qualsiasi momento nelle impostazioni.',
    skipStep: 'Salta questo passaggio',
    nextTypeOfRide: 'SUCCESSIVO: TIPO DI RIDE',
    youShopMostlyFor: 'Acquisti Principalmente',
    greeting:
      'Vorremmo farti qualche domando veroce per ottimizzare la tua esperienzea.',
    youMostlyRideOn: 'Ti Alleni Principalmente su',
    nextTypeOfFit: 'SUCCESSIVO: TIPO DI VESTIBILITA',
    theTypeOfFit: 'Il tipo di vestibilità che preferisci:',
    finishQuiz: 'Finisci il Quiz`',
    getAlerts: 'RICEVI AGGIORNAMENTI SU NUOVI PRODOTTI ED EVENTI ESCLUSIVI',
    continue: 'Continua',
    getLocate: 'Trova i negozi vicino a te e ricevi le raccomandzioni ' +
      'in base alle condizioni atmosferiche',
    men: 'ARTICOLI DA UOMO',
    women: 'ARTICOLI DA DONNA',
    racing: 'AERODINAMICA',
    comfort: 'REGOLARE',
    road: 'STRADA',
    mountain: 'MONTAGNA',
    gravel: 'GRAVEL',
    start: 'Inizia gli Acquisti'
  },
  registerModal: {
    title: 'Registrati',
    form: {
      firstName: 'Nome',
      lastName: 'Cognome',
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
    cancel: 'Cancella'
  },
  pip: {
    sortAndFilter: {
      sortBy: 'Ordina per',
      filter: 'Filtri',
      apply: 'APPLICA',
      sortTitle: 'SORT BY'
    },
    filter: {
      noResultsFound: 'Nessun risultato',
      clearAllFilters: 'Rimuovi tutti i filtri'
    },
    loadMore: 'Load More',
    backToTop: 'Back to Top'
  },
  technologyDetails: {
    header: 'THE FINER DETAILS',
    header__eyebrow: 'TECHNOLOGY OVERVIEW'
  }
};
