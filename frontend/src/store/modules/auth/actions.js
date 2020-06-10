export function signInRequest(email, password) {
  return {
    type: '@auth/SIGIN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGIN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGIN_FAILURE',
  };
}
