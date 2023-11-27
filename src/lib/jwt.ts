import jwt_decode, { JwtPayload } from 'jwt-decode';
/**
 * Determines if token is an active token i.e. not expired
 *
 * @param {string} token jwt as a string
 * @returns {boolean} is token active
 */
export const isActive = (token: string): boolean => {
  try {
    const { exp } = jwt_decode<JwtPayload>(token);

    if (exp) {
      return exp > (Date.now() / 1000);
    }

    return false;
  } catch {
    return false;
  }
};

export const isExpired = (token: string): boolean => {
  try {
    const { exp } = jwt_decode<JwtPayload>(token);

    if (exp) {
      return exp < (Date.now() / 1000);
    }

    return true;
  } catch {
    return true;
  }
};

export const isGuest = (token?: string) => {
  try {
    if (!token) {
      return true;
    }

    const { sub } = jwt_decode<JwtPayload>(token);

    return sub === 'guest';
  } catch {
    return true;
  }
};
