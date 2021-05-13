/* eslint-disable no-console */
import axios from 'axios';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { LOAD_USER_PROFILE, saveUserProfile, ADD_NEW_USER, LOAD_USERS_CARDS, saveUsersCards } from 'src/actions/user';
import { LOG_IN, saveConnectedUserData, LOG_OUT } from 'src/actions/log';

const api = axios.create({
  baseURL: 'http://ec2-34-239-254-34.compute-1.amazonaws.com/api/v1/',
});

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      // connexion de l'utilisateur
      // on extrait l'email et le password du state
      const state = store.getState();
      const { email: username, password } = state.user;

      api
        .post(
          '/login',
          {
            username: 'leon@leon.com',
            password: 'leonleon',
          },
        )
        .then((response) => {
          // on récupère le token et on paramètre axios pour le faire apparaitre dans notre header
          const userToken = (response.data.token);

          // on stocke le token dans le localStorage
          localStorage.setItem('token', (userToken));

          console.log(userToken);
          // api.defaults.headers.common.Authorization = `Bearer ${userToken}`;

          // on décode notre token pour récupérer les données de l'utilisateur connecté
          // et on les sauvegardes dans le state
          const decodedToken = jwt_decode(userToken);
          console.log(decodedToken);
          // const connectedUserData = decodedToken.username;
          // console.log(connectedUserData);
          store.dispatch(saveConnectedUserData(decodedToken));
        }).catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOAD_USER_PROFILE: {
      // CETTE REQUETE N'EST ACCESSIBLE QUE POUR UN UTILISATEUR CONNECTE
      
      // Récupération des infos d'un utilisateur (page mon-profil ou notre-reseau/utilisateur/id)
      const idParam = (action.userId);
      console.log(idParam);

      // on récupère le token stocké dans le localStorage
      const userToken = localStorage.getItem('token');
      console.log(userToken);

      api
        .get(`/user/${idParam}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          // l'API nous retourne les infos de l'utilisateur
          console.log(response.data);
          const userInfos = response.data;

          // on sauvegarde ces infos
          store.dispatch(saveUserProfile(userInfos));
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });

      // puis on décide si on la laisse filer ou si on la bloque
      next(action);
      break;
    }
    case ADD_NEW_USER:
      // Création d'un nouvel utilisateur (inscription)

      api
        .post(
          '/user',
          {
            // firstName,
            // lastName,
            // email,
            // password,
          },
        )
        .then((response) => {
          console.log(response);
          console.log('Vous êtes inscrit');
        }).catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case LOAD_USERS_CARDS:
      // affichage de tous les profils sous forme de cards

      api
        .get('user')
        .then((response) => {
          console.log(response);
          const usersList = response.data;
          store.dispatch(saveUsersCards(usersList));
        }).catch((error) => {
        // eslint-disable-next-line no-console
          console.log(error);
        });

      // puis on décide si on la laisse filer ou si on la bloque
      next(action);
      break;

    case LOG_OUT:
      delete api.defaults.headers.common.Authorization;
      localStorage.removeItem('token');
      console.log('je me déconnecte');
      next(action);
      break;
    default:
      next(action);
  }
};
