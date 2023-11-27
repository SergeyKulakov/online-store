import { ProjectTranslationKeys } from './types';

export const fr: ProjectTranslationKeys = {
  screenTitles: {
    discover: 'Découvrir',
    shop: 'Shop',
    cart: 'Panier',
    miniCart: {
      zero: 'Articles',
      one: 'Articles ({{count}})',
      other: 'Articles ({{count}})'
    },
    account: 'Compte',
    search: 'Rechercher',
    reviews: 'Avis',
    favorites: 'Liste de souhaits',
    paymentOptions: 'Modes de Paiement',
    myOrders: 'MES COMMANDES',
    createAccount: 'CRÉER UN COMPTE',
    stylePreferences: 'PRÉFÉRENCES DE STYLE',
    notificationPreferences: 'PRÉFÉRENCES DE NOTIFICATION'
  },
  weatherRecommendations: {
    contextualPrompt: {
      header: 'TOUJOURS PRÊT·E·S QUELLES QUE SOIENT LES SAISONS',
      prompt: 'Activez votre localisation pour recevoir des recommandations en temps réel.',
      cta: 'OBTENIR DES RECOMMANDATIONS'
    },
    recommendations: {
      header: "ÉQUIPEMENT RECOMMANDÉ POUR AUJOURD'HUI",
      noRecommendations: 'NO RESULTS',
      tryDifferent: 'Try a different location.',
      noOutdoorRide: 'NO OUTDOOR RIDE RECOMMENDED TODAY',
      indoorTraining: "With these extreame weather conditions, we don't recommend an outdoor ride."
      + 'Consider an indoor training session with this equipment.'
    },
    changeLocation: {
      header: 'LOCALISATION',
      inputPlaceHolder: 'VILLE, DÉPARTEMENT OU CODE POSTAL'
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
    details: 'Détails',
    accordions: {
      warranty: 'Sur tous les produits',
      crash: 'Aide en cas de chute',
      returns: 'Sous 30 jours après réception.',
      payments: 'Paiment traité en toute sécurité'
    }
  },
  joinNowForm: {
    inputTitles: {
      firstName: 'Prénom',
      lastName: 'Nom',
      phone: 'Numéro de portable',
      email: 'Adresse email',
      password: 'Mot de passe',
      month: 'Mois',
      day: 'Journée',
      faceId: 'Se connecter avec Face ID'
    },
    requirements: {
      lastName: 'Votre nom de famille est requis',
      firstName: 'Votre prénom est requis',
      email: 'Veuillez saisir une adresse électronique valide'
    },
    createAccount: 'CRÉER UN COMPTE',
    show: 'Afficher',
    hide: 'Masquer',
    passwordRequirements: {
      upper: 'Doit contenir au moins une majuscule',
      lower: 'Doit contenir au moins une minuscule',
      number: 'Doit contenir au moins un chiffre',
      length: 'Doit contenir au moins huit caractères',
      special: 'Doit contenir au moins un caractère spécial'
    },
    gender: 'Sexe',
    birthday: "Date d'a'anniversaire",
    acceptPolicy: 'En cliquant sur "Rejoindre", j\'accepte les ',
    privacy: 'Politique de confidentialité',
    and: ' et ',
    terms: 'Conditions générales',
    done: 'complété'
  },
  tabTitles: {
    discover: 'Découvrir',
    shop: 'Panier',
    cart: 'Bag',
    account: 'Compte'
  },
  discover: {
    discoverComponent: 'Découvrir les composants'
  },
  shop: {
    categories: {
      men: 'HOMME',
      women: 'FEMME'
    },
    landing: {
      shop: {
        featured: 'En Vedette',
        clothing: 'Vêtements',
        accessories: 'Accessoires',
        roadCollections: 'Collections Route',
        mountainCollections: 'Collections Mountain Bike',
        gravelCollections: 'Collections Gravel',
        triathlonCollections: 'Collections Triathlon',
        seasons: 'Saison',
        extraCollections: 'Extra Collections',
        archive: 'Archive'
      },
      featureEquipments: {
        title: 'Titre',
        newArrivals: 'New Arrivals',
        equip: 'Equipe 1/3',
        mille: 'Mille 1/3',
        indoor: 'Indoor',
        rain: 'Pluie',
        gifts: 'Cadeaux',
        archive: 'Archive'
      }
    },
    header: 'Acheter par catégorie',
    placeHolder: 'Rechercher'
  },
  search: {
    trending: 'Tendances',
    result: '{{count}} Résultats',
    noResult: 'Aucun Résultat',
    returnedNoResult: 'Votre recherche n\'a donné aucun résultat.',
    didMean: 'Que vouliez-vous dire?',
    suggestWord: 'Vers un monde plus vert?',
    popularSearchTerms: 'Recherches populaires',
    placeholder: 'RECHERCHER...'
  },
  pdp: {
    size: 'Taille: ',
    color: 'Couleur ',
    sizeChart: 'Guide des tailles',
    whatsMySize: 'Quelle est ma taille?',
    seeAllCategories: 'Voir toutes les catégories',
    addToWishlist: 'Ajouter à la liste de souhaits',
    addedToWishlist: 'Ajouté à la liste de souhaits',
    completeTheLook: 'Complétez la tenue',
    customerPhotos: 'Photos des clients',
    youMayAlsoLike: 'Vous Aimerez Aussi',
    tittleCarouselButton: 'Voir Vout Voir en entier',
    outOfStock: 'Rupture de stock',
    getInStockAlert: 'Faites-moi savoir quand il est en stock',
    updateStockAlert: 'Mise à jour de l\'alerte sur les stocks',
    tryAgain: 'TRY AGAIN',
    removeAlert: 'Remove Alert',
    addToBag: 'AJOUTER AU PANIER',
    addedToBag: 'ADDED TO BAG',
    howWhenToUse: 'INSTRUCTIONS D\'UTILISATION',
    composition: 'COMPOSITION',
    warranty: '2 ANS DE GARANTIE',
    crash: 'POLITIQUE EN CAS DE CHUTE',
    returns: 'RETOURS GRATUITS',
    payments: 'ACHATS SECURISÉS',
    notifyButton: 'Notifier la disponibilité',
    notifyWhenAvailableTitle: 'Prévenez-moi lorsqu\'il est en stock ',
    pinchToZoom: 'Toucher pour zoomer',
    recentlyViewed: 'Récemment Consultés',
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
      ageHasAnImpact: 'Age has an ipact on how your weight is distributed.Knowing your age helps us recommend the right size.',
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
    sortBy: 'Trier',
    title: 'Trier',
    apply: 'Appliquer'
  },
  recentlyViewed: {
    header: 'Récemment Consultés'
  },
  accessibility: {
    searchBtn: 'Rechercher'
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
    miniCartCTA: 'Complété',
    stockItems: 'Remove {{count}} unavailable items to continue.',
    textButton: 'Remove All',
    outOfStock: 'Rupture de stock',
    newArrivals: 'New Arrivals',
    removeItem: 'Remove Item'
  },
  wishlist: {
    yourWishlist: 'Your Wishlist',
    moveToBag: '+ Move to Bag',
    viewAll: 'Voir Vout Voir en entier'
  },
  ymal: {
    header: 'Complétez la tenue',
    addToBag: '+ Ajouter au panier'
  },
  checkoutBtns: {
    applePay: 'Apple Pay',
    payPal: 'PayPal',
    checkout: 'Réglement',
    choosePayment: 'Passez à la caisse'
  },
  flagship: {
    search: {
      recentSearches: 'Récent',
      actions: {
        clear: {
          actionBtn: 'Effacer tout'
        }
      }
    },
    sort: {
      actions: {
        sort: {
          actionBtn: 'Trier'
        }
      }
    },
    filterListDefaults: {
      clearAll: 'Effacer tout',
      cancel: 'SUPPRIMER',
      apply: 'APPLIQUER'
    }
  },
  pagination: {
    loadMore: 'Charger plus',
    of: 'de',
    showing: 'Voir'
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
    required: 'ce champ est requis',
    email: 'Please enter valid email',
    promoCode: 'Entrez le code de réduction',
    reviewErrors: 'Veuillez vérifier les erreurs ci-dessous pour continuer',
    deliveryAddressError: 'Veuillez ajouter une adresse de livraison.',
    pleaseEnterSecurCode: 'Veuillez entrer le code de sécurité ',
    unavailableCartItem:
      'Le(s) article(s) de votre panier n\'est (ne sont) plus disponible(s).' +
      'Nous avons mis à jour votre panier d\'achat.',
    unauthorised: 'Veuillez d\'abord vous identifier',
    validationSpecialCharacters:
      'Ce champ ne peut pas contenir de caractères spéciaux.',
    correctCurrentPassword:
      'Veuillez vous assurer que le mot de passe actuel que vous avez saisi est correct.',
    invalidCredentials: 'Veuillez entrer une adresse électronique et un mot de passe valide.'
  },
  inputTitles: {
    required: '*',
    email: 'Email',
    emailAddress: 'Adresse email',
    phoneNumber: 'Phone Number',
    zip: 'ZIP Code',
    state: 'State',
    city: 'City',
    address2: 'Address 2',
    address2Plus: '+ Address 2 (Optional)',
    street: 'Address 1',
    lastName: 'Nom',
    firstName: 'Prénom',
    cardNumber: 'Card Number',
    cardName: 'Name on Card',
    expDate: 'Expiration Date',
    securityCode: 'Security Code',
    cardExpDate: 'MM/YY',
    country: 'Pays',
    addressName: 'Address name',
    company: 'Company/Care',
    companyPlus: '+ Company/Care Of (Optional)',
    aptPlus: '+ Apt, Suite or P.O. Box',
    apt: 'Apt, Suite or P.O. Box'
  },
  orderTotal: {
    items: 'Articles',
    unavailableWarning: 'Remove {{count}} unavailable items to continue',
    subtotal: 'Subtotal',
    delivery: 'Delivery',
    salesTax: 'Sales Tax',
    orderTotal: 'Order Total',
    defaultValue: '$00.00'
  },
  checkout: {
    signIn: 'S\'inscrire',
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
    done: 'Complété'
  },
  managePassword: {
    title: 'GÉRER LE MOT DE PASSE',
    currentPassword: 'GérerMot de passe actuel ',
    newPassword: 'Nouveau mot de passe',
    instruction: {
      uppercase: 'Doit contenir au moins une lettre majuscule',
      lowercase: 'Doit contenir au moins une lettre minuscule',
      oneNumber: 'Doit contenir au moins un numéro',
      characters: 'Doit contenir au moins 8 caractères',
      special: 'Au moins un caractère spécial'
    },
    confirmNewPassword: 'Confirmer le nouveau mot de passe',
    updatePassword: 'Mettre à jour le mot de passe',
    confirmPasswordError: 'Le mot de passe ne correspond pas',
    success: 'Changements sauvegardés'
  },
  button: {
    addToBag: 'Ajouter au panier',
    orderDetails: 'détails'
  },
  promoForm: {
    applyPromoCode: 'Appliquer un code de réduction ou une carte cadeau',
    currency: '',
    inputTitle: 'Entrez le code',
    innerButtonText: 'Appliquer',
    errorMessage: 'Le code n\'est pas valide ou est expiré'
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
    edit: 'Éditer',
    add: 'Add',
    textInputTitle: '*Security code',
    textInputError: 'Veuillez entrer le code de sécurité .',
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
    title: 'Modifier les coordonnées',
    description:
      'Votre adresse électronique sera utilisée pour vous envoyer la confirmation de votre' +
      'commande.',
    emailLabel: '*Adresse électronique',
    emailError: 'Email Invalide',
    emailPlaceholder: 'Jondoe@gmail.com',
    done: 'Complété'
  },
  deliveryAddressComponent: {
    title: 'Edit Delivery Address',
    done: 'Complété',
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
    deletePayment: 'Effacer'
  },
  deliveryOptionsComponent: {
    headerTitle: 'Edit Delivery Method'
  },
  creditCardPaymentComponent: {
    done: 'Complété',
    billingAddress: 'Billing Address',
    useAsDefault: 'Use as my default payment',
    sameAsShippingAddressShort: 'Same as Shipping Address',
    sameAsShippingAddressFull: 'Billing Address same as Shipping Address',
    acceptedCards: 'Accepted Cards:'
  },
  CTAButton: {
    submit: 'Envoyer',
    enable: 'ACTIVER',
    disable: 'DÉSACTIVER'
  },
  sortOptions: {
    relevance: 'Pertinence',
    title: 'Trier'
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
    qtyPrefix: 'Quantité: '
  },
  formDeliveryAddressComponent: {
    saveAddress: 'Save Address',
    done: 'COMPLÉTÉ',
    save: 'ENREGISTRER',
    deleteAddress: 'DELETE ADDRESS',
    saveChanges: 'SAVE CHANGES',
    editAddress: 'EDIT ADDRESS',
    addNewAddress: 'AJOUTER UNE NOUVELLE ADRESSE'
  },
  addressForm: {
    useAsDefaultAddress: 'Use as my default address',
    saveToMyAccount: 'Enregistrer sur mon compte ',
    thisIsGift: 'C\'EST UN CADEAU',
    giftMessage: 'RÉDIGEZ VOTRE MESSAGE',
    giftDescription: 'Le message ne peut dépasser 160 caractéres (40 per ligne). ' +
      'Votre cadeau sera accompagné de ce message et d\'un reçu'
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
    signIn: 'S\'inscrire',
    emailAddress: 'Adresse électronique',
    password: 'Mot de passe',
    passwordRequired: 'Veuillez saisir une adresse électronique valide.',
    show: 'Monterer',
    hide: 'Masquer',
    forgotPassword: 'Mot de passe oublié?',
    submit: 'S\'inscrire',
    createAccount: 'Créer un Compte',
    logIn: 'Se connecter',
    addToWishlist:
      'Afin d\'ajouter cet article à votre liste de souhaits,' +
      ' vous devez avoir un compte Lorna Jane, veuillez ' +
      'vous connecter ou créer un compte pour continuer.',
    googleBtnAlt: 'S\'inscrire avec Google',
    or: 'OU',
    signInError: 'The account sign-in was incorrect' +
      ' or your account is disabled temporarily.' +
      ' Please wait and try again later.'
  },
  resetPasswordSection: {
    resetPassword: 'Réinitialiser le mot de passe ',
    enterYourEmail:
      'Saisissez votre adresse électronique pour recevoir des instructions sur la façon de' +
      'réinitialiser votre mot de passe.',
    linkWay: 'Un lien est en cours d\'acheminement vers ',
    follow: '. Suivez les instructions envoyées par e-mail pour réinitialiser votre mot de passe.',
    emailSent: 'Email envoyé',
    didNotGet: 'Vous ne l\'avez pas reçu?',
    resendEmail: 'Renvoyer l\'email',
    backToSignIn: 'Retour à la page d\'accueil ',
    submit: 'Envoyer le lien pour réinitialiser le mot de passe',
    checkEmail: 'Vérifiez votre adresse e-mail pour réinitialiser votre mot de passe',
    error: 'Quelque chose s\'est mal passé, réessayez plus tard'
  },
  personalDetails: {
    buttonTitle: 'Enregistrer',
    privacyPolicyInfo:
      'Pour savoir comment nous pouvons utiliser vos informations, consultez notre',
    privacyPolicyLink: 'politique de confidentialité.',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    birthday: "Date d'a'anniversaire",
    month: 'Mois',
    day: 'Journée',
    country: 'Pays',
    birthdayToolTip:
      'Utilisé pour vous envoyer quelque chose de spécial.' +
      'Pour modifier votre date de naissance, veuillez',
    contactUsLink: 'nous contacter'
  },
  addressBookComponent: {
    btnDelete: 'Effacer',
    btnEdit: 'Éditer',
    preferred: 'PRÉFÉRENCE',
    addNewAddress: '+ Add New Address',
    title: 'CARNET D\'ADRESSES',
    errorDelete: 'Messagerie'
  },
  accountDetails: {
    title: 'Détails du compte',
    personalDetails: 'Coordonnées  personnelles',
    paymentOptions: 'Mode de paiement',
    addressBook: 'Carnet d\'adresses',
    managePassword: 'Gérer le mot de passe',
    emailPreferences: 'Préférences de courrier électronique',
    needHelp: 'BESOIN D\'AIDE??',
    contactUs: 'Nous contacter',
    signOut: 'Se déconnecter'
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
    title: 'Choisissez votre magasin',
    FYI: 'Pour votre information : nous proposons un service en points relais (!).',
    warn: 'Tous les articles retirés dans le magasin doivent être collectés au même endroit.',
    field: 'Ville, departement ou code postal',
    search: 'Rechercher',
    done: 'Complété',
    preferred: 'Préférence',
    away: 'kilomètres',
    use: 'Utilisez ',
    currentLocation: 'Localisation actuelle'
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
    body: "Désolé, nous n'avons pas pu trouver la page que vous recherchez.."
  },
  account: {
    account: 'Compte',
    storeLocator: 'Boutiques',
    guestGreeting: 'CHASSER LA TECHNOLOGIE DE DEMAIN \N POUR LES PERFORMANCES D\'AUJOURD\'HUI.',
    ctaLogin: 'SE CONNECTER',
    ctaCreateAccount: 'S\'INSCRIRE',
    appSetting: 'Paramètres de l\'application',
    appSettingSubText: 'Préférences de style, notifications, liste de souhaits',
    settings: {
      stylePreferences: 'Préférences de style',
      notificationPreferences: 'Préférences de notification',
      wishlist: 'Liste de souhaits',
      customerService: 'Service client',
      deleteAccount: 'Supprimer le compte'
    }
  },
  notificationPreferences: {
    allowText:
      'Autoriser les notifications dans les préférences du système afin de recevoir des mises à' +
      'jour sur les offres, les promotions et les alertes de stock. ' +
      'Elles peuvent être désactivées à tout moment.',
    disableText:
      'Désactiver les mises à jour sur les offres, ' +
      'les promotions et les alertes de stock dans les préférences du système. ' +
      'Elles peuvent être activées à tout moment.'
  },
  accountDelete: {
    areYourSure: 'Êtes-vous sûr de vouloir supprimer votre compte?',
    deleteDetails:
      'La suppression d\'un compte peut prendre jusqu\'à 3 jours. ' +
      'Vous recevrez un courriel de confirmation dès que votre compte aura été supprimé ' +
      'et vous serez immédiatement déconnecté',
    deleteCta: 'Oui, supprimer mon compte',
    keepCta: 'Non, je garde mon compte actif'
  },
  onBoarding: {
    describe:
      'Sélectionnez toutes les réponses correspondantes. ' +
      'Modifiable à tout moment dans vos paramètres.',
    describePermissions:
      'Vous pouvez modifier votre sélection à tout moment dans les paramètres.',
    skipStep: 'passez cette étape',
    nextTypeOfRide: 'SUIVANT: Type de pratique',
    youShopMostlyFor: 'Vous Achetez principalement',
    greeting:
      'Nous avons quelques questions à vous poser pour optimiser votre expérience.',
    youMostlyRideOn: 'Vous pratiquez principalement le cyclisme',
    nextTypeOfFit: 'SUIVANT: Type de coupe',
    theTypeOfFit: 'Le type de coupe que vous préférez',
    finishQuiz: 'Finir le Quiz',
    getAlerts: 'RECEVEZ DES INFORMATIONS SUR LES NOUVEAUX PRODUITS ET LES ÉVÉNEMENTS EXCLUSIFS.',
    continue: 'Continuer',
    getLocate: 'Trouvez les magasins près de chez vous et obtenez des recommandations ' +
      'basées sur la météo.',
    men: 'DES PRODUITS POUR HOMME',
    women: 'DES PRODUITS POUR FEMME',
    racing: 'AÉRODYNAMIQUE',
    comfort: 'STANDARD',
    road: 'SUR LA ROUTE',
    mountain: 'EN MONTAGNE',
    gravel: 'SUR LE GRAVIER',
    start: 'COMMENCER LES ACHATS'
  },
  registerModal: {
    title: 'S\'inscrire',
    form: {
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Adresse email',
      password: 'Mot de passe',
      faceId: 'Se connecter avec Face ID'
    },
    passwordValidation: {
      chars: 'Doit contenir au moins huit caractères',
      uppercase: 'Doit contenir au moins une majuscule',
      lowercase: 'Doit contenir au moins une minuscule',
      digit: 'Must contain at least one digit',
      specialChar: 'Doit contenir au moins un caractère spécial'
    }
  },
  general: {
    cancel: 'Supprimer'
  },
  pip: {
    sortAndFilter: {
      sortBy: 'Trier:',
      filter: 'Filter',
      apply: 'Appliquer',
      sortTitle: 'TRIER'
    },
    filter: {
      noResultsFound: 'Aucun résultat trouvé.',
      clearAllFilters: 'EFFACER TOUS LES FILTRES'
    },
    loadMore: 'Charger plus',
    backToTop: 'Back to Top'
  },
  technologyDetails: {
    header: 'THE FINER DETAILS',
    header__eyebrow: 'TECHNOLOGY OVERVIEW'
  }
};
