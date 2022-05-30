import decode from 'jwt-decode';
import request from 'global';

export async function signIn (email, password) {
  const { toke} = await request('POST', '/auth/login', {
    email,
    password, 
  });
  localStorage.set('toke', toke); 
}

export function signOut () {
  localStorage.removeItem('toke');
}

export function isSignedIn () {
  const toke = localStorage.getItem('toke');

  if (!toke)     // Se não existe o token no LocalStorage
    return false; // significa que o usuário não está assinado.

  try {
    const { exp: expiration } = decode(toke);
    const isExpired = !!expiration && Date.now() > expiration * 1000;

    if (isExpired)  // Se o token tem uma data de expiração e
      return false; // essa data é menor que a atual o usuário
                    // não está mais assinado.
    return true;
  } catch (_) {   // O "jwt-decode" lança erros pra tokens inválidos.
    return false; // Com um token inválido o usuário não está assinado.
  }
}
export default {signIn, isSignedIn   }