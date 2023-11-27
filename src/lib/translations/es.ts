import { ProjectTranslationKeys } from './types';

export const es: ProjectTranslationKeys = {
  screenTitles: {
    discover: 'Descubrir',
    shop: 'Shop',
    cart: 'Cesta',
    miniCart: {
      zero: 'Artículos',
      one: 'Artículos ({{count}})',
      other: 'Artículos ({{count}})'
    },
    account: 'Cuenta',
    search: 'Buscar',
    reviews: 'Reseñas',
    favorites: 'Mis Favoritos',
    paymentOptions: 'Métodos de Pago',
    myOrders: 'MIS PEDIDOS',
    createAccount: 'CREA UNA CUENTA',
    stylePreferences: 'PREFERENCIAS DE ESTILO',
    notificationPreferences: 'PREFERENCIAS DE NOTIFICACIONES'
  },
  weatherRecommendations: {
    contextualPrompt: {
      header: 'TODO TIPO DE CONDICIONES. SIEMPRE A PUNTO',
      prompt:
        'Habilita tu ubicación para recibir recomendaciones en tiempo real.',
      cta: 'OBTENER RECOMENDACIONES'
    },
    recommendations: {
      header: 'EQUIPAMIENTO RECOMENDADO PARA HOY',
      noRecommendations: 'NO RESULTS',
      tryDifferent: 'Try using a different location.',
      noOutdoorRide: 'NO OUTDOOR RIDE RECOMMENDED TODAY',
      indoorTraining: "With these extreame weather conditions, we don't recommend an outdoor ride."
      + 'Consider an indoor training session with this equipment.'
    },
    changeLocation: {
      header: 'LOCATION',
      inputPlaceHolder: '"CIUDAD, ESTADO O CÓDIGO POSTAL"'
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
    details: 'Detalles',
    accordions: {
      warranty: 'En todos los productos',
      crash: 'Protección en caso de golpes y accidentes',
      returns: 'Devoluciones en un plazo de 30 días desde la compra.',
      payments: 'Pagos procesados en un entorno seguro'
    }
  },
  joinNowForm: {
    inputTitles: {
      firstName: 'Nombre',
      lastName: 'Apellido(s)',
      phone: 'Número de teléfono móvil',
      email: 'Correo electrónico',
      password: 'Contraseña',
      month: 'Mes',
      day: 'Dia',
      faceId: 'Iniciar sesión con Face ID'
    },
    requirements: {
      lastName: 'Este campo es requerido',
      firstName: 'Este campo es requerido',
      email: 'Introduce una dirección de correo electrónico válida.'
    },
    createAccount: 'CREA UNA CUENTA',
    show: 'Mostrar',
    hide: 'Ocultar',
    passwordRequirements: {
      upper: 'Debe contener al menos una letra mayúscula',
      lower: 'Debe contener al menos una letra minúscula',
      number: 'Debe contener al menos un número',
      length: 'Debe contener al menos ocho caracteres',
      special: 'Debe contener al menos un carácter especial'
    },
    gender: 'Sexo',
    birthday: 'Cumpleaños',
    acceptPolicy: 'Al hacer clic en "Únete" acepto la ',
    privacy: 'Política de privacidad',
    and: ' y ',
    terms: 'Condiciones',
    done: 'terminado'
  },
  tabTitles: {
    discover: 'Descubrir',
    shop: 'Shop',
    cart: 'Cesta',
    account: 'Cuenta'
  },
  discover: {
    discoverComponent: 'Descubrir el componente'
  },
  shop: {
    categories: {
      men: 'HOMBRE',
      women: 'MUJER'
    },
    landing: {
      shop: {
        featured: 'Destacado',
        clothing: 'Ropa',
        accessories: 'Complementos',
        roadCollections: 'Colección Carretera',
        mountainCollections: 'Colección Mountain Bike',
        gravelCollections: 'Colección Gravel',
        triathlonCollections: 'Colección Triathlon',
        seasons: 'Temporada',
        extraCollections: 'Extra Colección',
        archive: 'Archive'
      },
      featureEquipments: {
        title: 'Título',
        newArrivals: 'New Arrivals',
        equip: 'Equipe 1/3',
        mille: 'Mille 1/3',
        indoor: 'Indoor',
        rain: 'Rain',
        gifts: 'Regalos',
        archive: 'Archive'
      }
    },
    header: 'Compra por categoría',
    placeHolder: 'Buscar'
  },
  search: {
    trending: 'Trending',
    result: '{{count}} Resultados',
    noResult: '0 Resultados',
    returnedNoResult: 'Su búsqueda no produjo resultados.',
    didMean: '¿Quiere decir que  ',
    suggestWord: 'Green Shift?',
    popularSearchTerms: 'Términos de búsqueda populares',
    placeholder: 'BUSCAR...'
  },
  pdp: {
    size: 'Talla: ',
    color: 'Color: ',
    sizeChart: 'Guía de tallas',
    whatsMySize: '¿Cuál es mi talla?',
    seeAllCategories: 'See all "Category"',
    addToWishlist: 'Añadir a la lista de deseos',
    addedToWishlist: 'Añadido a la lista de deseos',
    completeTheLook: 'Completa el look',
    customerPhotos: 'Customer Photos',
    youMayAlsoLike: 'Podria Gustarle También',
    tittleCarouselButton: 'Ver Todo',
    outOfStock: 'Agotado',
    getInStockAlert: 'Avísame cuando esté en stock',
    updateStockAlert: 'Actualizar Alerta de Stock',
    tryAgain: 'TRY AGAIN',
    removeAlert: 'Remove Alert',
    addToBag: 'AÑADIR AL CARRITO',
    addedToBag: 'ADDED TO BAG',
    howWhenToUse: 'CUÁNDO Y CÓMO UTILIZAR EL PRODUCTO',
    composition: 'COMPOSICIÓN',
    warranty: '2 AÑOS DE GARANTÍA',
    crash: 'CRASH POLICY',
    returns: 'DEVOLUCION GRATUITOS',
    payments: 'COMPRA SEGURA',
    notifyButton: 'Notificar cuando esté disponible ',
    notifyWhenAvailableTitle: 'Notifíqueme cuando haya existencias ',
    pinchToZoom: 'Clica para acercar',
    recentlyViewed: 'Vistos Recientemente',
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
        'Age has an ipact on how your weight is distributed.Knowing your age helps us recommend the right size.',
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
    sortBy: 'Ordenar por',
    title: 'Ordenar por',
    apply: 'Aplicar'
  },
  recentlyViewed: {
    header: 'Vistos Recientemente'
  },
  accessibility: {
    searchBtn: 'Buscar'
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
    miniCartCTA: 'Terminado',
    stockItems: 'Remove {{count}} unavailable items to continue.',
    textButton: 'Remove All',
    outOfStock: 'Agotado',
    newArrivals: 'New Arrivals',
    removeItem: 'Remove Item'
  },
  wishlist: {
    yourWishlist: 'Your Wishlist',
    moveToBag: '+ Move to Bag',
    viewAll: 'Ver Todo'
  },
  ymal: {
    header: 'Completa el look',
    addToBag: '+ Añadir al carrito'
  },
  checkoutBtns: {
    applePay: 'Apple Pay',
    payPal: 'PayPal',
    checkout: 'Compra',
    choosePayment: 'Proceda a la compra'
  },
  flagship: {
    search: {
      recentSearches: 'Reciente',
      actions: {
        clear: {
          actionBtn: 'Borrar todo'
        }
      }
    },
    sort: {
      actions: {
        sort: {
          actionBtn: 'Ordenar por'
        }
      }
    },
    filterListDefaults: {
      clearAll: 'Borrar todo',
      cancel: 'CANCELAR',
      apply: 'APLICAR'
    }
  },
  pagination: {
    loadMore: 'Load More',
    of: 'de',
    showing: 'mostrando'
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
    required: 'este campo es requerido',
    email: 'Please enter valid email',
    promoCode: 'Introduce el código de promoción',
    reviewErrors:
      'Por favor, revise los errores que aparecen a continuación para proceder',
    deliveryAddressError: 'Por favor, añada una dirección de entrega.',
    pleaseEnterSecurCode: 'Por favor, introduzca el código de seguridad ',
    unavailableCartItem: 'Por favor, introduzca el código de seguridad ',
    unauthorised: 'Por favor, inicie sesión primero ',
    validationSpecialCharacters:
      'Este campo no puede contener caracteres especiales.',
    correctCurrentPassword:
      'Por favor, asegúrese de que la contraseña actual que ha introducido es correcta',
    invalidCredentials:
      'Por favor, introduzca un correo electrónico y una contraseña válidos'
  },
  inputTitles: {
    required: '*',
    email: 'Email',
    emailAddress: 'Correo electrónico',
    phoneNumber: 'Phone Number',
    zip: 'ZIP Code',
    state: 'State',
    city: 'City',
    address2: 'Address 2',
    address2Plus: '+ Address 2 (Optional)',
    street: 'Address 1',
    lastName: 'Apellido(s)',
    firstName: 'Nombre',
    cardNumber: 'Card Number',
    cardName: 'Name on Card',
    expDate: 'Expiration Date',
    securityCode: 'Security Code',
    cardExpDate: 'MM/YY',
    country: 'País',
    addressName: 'Address name',
    company: 'Company/Care',
    companyPlus: '+ Company/Care Of (Optional)',
    aptPlus: '+ Apt, Suite or P.O. Box',
    apt: 'Apt, Suite or P.O. Box'
  },
  orderTotal: {
    items: 'Artículos',
    unavailableWarning: 'Remove {{count}} unavailable items to continue',
    subtotal: 'Subtotal',
    delivery: 'Delivery',
    salesTax: 'Sales Tax',
    orderTotal: 'Order Total',
    defaultValue: '$00.00'
  },
  checkout: {
    signIn: 'Registrarse',
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
    done: 'Terminado'
  },
  managePassword: {
    title: 'GESTIONAR CONTRASEÑA',
    currentPassword: 'Contraseña actual',
    newPassword: 'Nueva contraseña',
    instruction: {
      uppercase: 'Debe contener al menos una letra mayúscula',
      lowercase: 'Debe contener al menos una letra minúscula',
      oneNumber: 'Debe contener al menos un número',
      characters: 'Debe contener al menos 8 carácteres',
      special: 'Al menos 1 carácter especial'
    },
    confirmNewPassword: 'Confirmar Nueva Contraseña',
    updatePassword: 'Actualizar Contraseña',
    confirmPasswordError: 'Actualizar Contraseña',
    success: 'Cambio guardado'
  },
  button: {
    addToBag: 'Añadir al carrito',
    orderDetails: 'detalles'
  },
  promoForm: {
    applyPromoCode: 'Aplica el código descuento o la targeta regalo',
    currency: '',
    inputTitle: 'Entrar código',
    innerButtonText: 'Aplicar',
    errorMessage: 'El código aplicado no es válido o está caducado'
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
    edit: 'Borrar',
    add: 'Add',
    textInputTitle: '*Security code',
    textInputError: 'Por favor, introduzca el código de seguridad .',
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
    title: 'Editar información de contacto',
    description:
      'Su correo electrónico se utilizará para enviarle la confirmación del pedido.',
    emailLabel: '*Correo electrónico',
    emailError: 'Introduce una dirección de correo electrónico válida.',
    emailPlaceholder: 'Jondoe@gmail.com',
    done: 'Terminado'
  },
  deliveryAddressComponent: {
    title: 'Edit Delivery Address',
    done: 'Terminado',
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
    deletePayment: 'Borrar'
  },
  deliveryOptionsComponent: {
    headerTitle: 'Edit Delivery Method'
  },
  creditCardPaymentComponent: {
    done: 'Terminado',
    billingAddress: 'Billing Address',
    useAsDefault: 'Use as my default payment',
    sameAsShippingAddressShort: 'Same as Shipping Address',
    sameAsShippingAddressFull: 'Billing Address same as Shipping Address',
    acceptedCards: 'Accepted Cards:'
  },
  CTAButton: {
    submit: 'Enviar',
    enable: 'ACTIVAR',
    disable: 'DESACTIVAR'
  },
  sortOptions: {
    relevance: 'Relevancia',
    title: 'Ordenar por'
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
    qtyPrefix: 'Cantidad: '
  },
  formDeliveryAddressComponent: {
    saveAddress: 'Save Address',
    done: 'TERMINADO',
    save: 'GUARDAR',
    deleteAddress: 'DELETE ADDRESS',
    saveChanges: 'SAVE CHANGES',
    editAddress: 'EDIT ADDRESS',
    addNewAddress: 'AGREGAR NUEVA DIRECCIÓN'
  },
  addressForm: {
    useAsDefaultAddress: 'Use as my default address',
    saveToMyAccount: 'Guardar en mi cuenta',
    thisIsGift: 'ES UN REGALO',
    giftMessage: 'ESCRIBA SU MENSAJE',
    giftDescription:
      'El mensaje no puede exceder más de 160 carácteres (40 por línea). ' +
      'Su regalo llegará con este mensaje junto con un ticket regalo.'
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
    signIn: 'Registrarse',
    emailAddress: 'Correo electrónico',
    password: 'Contraseña',
    passwordRequired: 'Introduce una dirección de correo electrónico válida.',
    show: 'Muestra',
    hide: 'Ocultar',
    forgotPassword: '¿Has olvidado tu contraseña?',
    submit: 'Registrarse',
    createAccount: 'Crea una Cuenta',
    logIn: 'Iniciar Sesión',
    addToWishlist:
      'Para añadir este artículo a su lista de favoritos, ' +
      'necesita una cuenta a nombre de Lorna Jane, ' +
      'Por favor inicie sesión o crea una cuenta para continuar.',
    googleBtnAlt: 'Registrarse con Google',
    or: 'O',
    signInError:
      'The account sign-in was incorrect' +
      ' or your account is disabled temporarily.' +
      ' Please wait and try again later.'
  },
  resetPasswordSection: {
    resetPassword: 'Restablecer contraseña',
    enterYourEmail:
      'Añadir su correo eléctronico para recibir instrucciones para resetar su contraseña.',
    linkWay: 'El enlace está a ',
    follow:
      ' Siga las instrucciones enviadas a su correo eléctronico para resetear su contraseña.',
    emailSent: 'Email enviado',
    didNotGet: '¿No lo has recibido',
    resendEmail: 'Volver a enviar Email',
    backToSignIn: 'Volver a iniciar sesión',
    submit: 'Enviar link para resetear',
    checkEmail:
      'Compruebe su dirección de corre eléctronico para resetear su contraseña',
    error: 'Algo ha ocurrido, por favor vuelva a intentarlo'
  },
  personalDetails: {
    buttonTitle: 'Guardar',
    privacyPolicyInfo:
      'Para ver como gestionamos su información, echa un vistazo a nuestra',
    privacyPolicyLink: 'política de privacidad.',
    firstName: 'Nombre',
    lastName: 'Apellido(s)',
    email: 'Email',
    birthday: 'Cumpleaños',
    month: 'Mes',
    day: 'Dia',
    country: 'País',
    birthdayToolTip:
      'Sirve para enviarte algo especial. Para cambiar su cumpleaños, por favor',
    contactUsLink: 'contacto'
  },
  addressBookComponent: {
    btnDelete: 'Borrar',
    btnEdit: 'Borrar',
    preferred: 'PREFERIDO',
    addNewAddress: '+ Add New Address',
    title: 'LIBRETA DE DIRECCIONES',
    errorDelete: 'Mensajería'
  },
  accountDetails: {
    title: 'Detalles de la cuenta',
    personalDetails: 'Datos personales',
    paymentOptions: 'Forma de pago',
    addressBook: 'Libreta de Direcciones',
    managePassword: 'Gestionar contraseña',
    emailPreferences: 'Preferencias de correo electrónico ',
    needHelp: '¿NECESITAS AYUDA?',
    contactUs: 'Contacto',
    signOut: 'Cerrar sesión'
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
    title: 'Elija su tienda',
    FYI: 'Para su información: ofrecemos recogida en la acera sin contacto (!).',
    warn: 'Todos los artículos recogidos en la tienda deben recogerse en el mismo lugar.',
    field: 'Ciudad, Estado o Código Postal',
    search: 'Buscar',
    done: 'Terminado',
    preferred: 'Preferido',
    away: 'kilómetros de distancia',
    use: 'Utiliza ',
    currentLocation: 'Ubicación actual'
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
    account: 'Cuenta',
    storeLocator: 'Buscador de tiendas',
    guestGreeting:
      'PERSIGUIENDO LA TECNOLOGIA DEL MAÑANA PARA OBTENER EL RENDIMIENTO DE HOY.',
    ctaLogin: 'INICIAR SESIÓN',
    ctaCreateAccount: 'REGISTRARSE',
    appSetting: 'Ajustes de la app',
    appSettingSubText:
      'Preferencias de estilo, notificaciones, lista de deseos',
    settings: {
      stylePreferences: 'Preferencias de estilo',
      notificationPreferences: 'Preferencias de notificaciones',
      wishlist: 'Lista de deseos',
      customerService: 'Servicio de atención al cliente',
      deleteAccount: 'Borrar la cuenta'
    }
  },
  notificationPreferences: {
    allowText:
      'Activa las notificaciones en las preferencias del sistema para recibir noticias sobre ' +
      'ofertas y promociones, además de alertas sobre nuevas existencias. ' +
      'Puedes desactivarlas en cualquier momento.',
    disableText:
      'Desactiva las noticias sobre ofertas y promociones, ' +
      'y las alertas sobre nuevas existencias en las preferencias del sistema. ' +
      'Puedes activarlas en cualquier momento.'
  },
  accountDelete: {
    areYourSure: '¿Estás seguro de que quieres borrar tu cuenta?',
    deleteDetails:
      'La eliminación de una cuenta puede tardar hasta 3 días. ' +
      'Recibirás un correo electrónico de confirmación en cuanto se haya eliminado tu cuenta ' +
      ' y se cerrará tu sesión inmediatamente',
    deleteCta: 'Yes, delete my account',
    keepCta: 'No, mantener mi cuenta activa'
  },
  onBoarding: {
    describe:
      'Selecciona todo lo que corresponda. ' +
      'Actualiza tu selección en cualquier momento en los ajustes.',
    describePermissions:
      'Actualiza tu selección en cualquier momento en los ajustes.',
    skipStep: 'omitir este paso',
    nextTypeOfRide: 'SIGUIENTE: tipo de ruta',
    youShopMostlyFor: 'Tus compras incluyen sobre todo',
    greeting: 'responde a estas breves preguntas para mejorar tu experiencia.',
    youMostlyRideOn:
      'Responde a estas breves preguntas para mejorar tu experiencia.',
    nextTypeOfFit: 'SIGUIENTE: tipo de corte',
    theTypeOfFit: 'El tipo de corte que prefiere',
    finishQuiz: 'terminar el cuestionario',
    getAlerts:
      'Reciba actualizaciones sobre nuevos productos y eventos exclusivos.',
    continue: 'continuar',
    getLocate:
      'Encuentra tiendas cerca de ti y obtén recomendaciones basadas en el tiempo.',
    men: 'PRODUCTOS DE HOMBRE',
    women: 'PRODUCTOS DE MUJER',
    racing: 'AERODINÁMICO',
    comfort: 'REGULAR',
    road: 'POR CARRETERA',
    mountain: 'DE MONTAÑA',
    gravel: 'DE MONTAÑA',
    start: 'EMPIEZA A COMPRAR'
  },
  registerModal: {
    title: 'Registrarse',
    form: {
      firstName: 'Nombre',
      lastName: 'Apellido(s)',
      email: 'Correo electrónico',
      password: 'Contraseña',
      faceId: 'Iniciar sesión con Face ID'
    },
    passwordValidation: {
      chars: 'Debe contener al menos ocho caracteres',
      uppercase: 'Debe contener al menos una letra mayúscula',
      lowercase: 'Debe contener al menos una letra minúscula',
      digit: 'Must contain at least one digit',
      specialChar: 'Debe contener al menos un carácter especial'
    }
  },
  general: {
    cancel: 'Cancelar'
  },
  pip: {
    sortAndFilter: {
      sortBy: 'Ordenar por:',
      filter: 'Filtro',
      apply: 'APLICAR',
      sortTitle: 'ORDENAR POR'
    },
    filter: {
      noResultsFound: 'Sin resultados de búsqueda.',
      clearAllFilters: 'BORRAR TODOS LOS FILTROS'
    },
    loadMore: 'Load More',
    backToTop: 'Back to Top'
  },
  technologyDetails: {
    header: 'THE FINER DETAILS',
    header__eyebrow: 'TECHNOLOGY OVERVIEW'
  }
};
