import 'animate.css';
import './js/API/notiflixAPI';
import renderPopularMovies from './js/render/renderPopularMovies';
import onSeachFormSubmit from './js/events/form';
import {
  onCloseModal,
  onCloseModalBackdrop,
  onCloseModalEsc,
} from './js/events/modal';
import onMovieClick from './js/events/movieCard';
import themeSwither from './js/events/theme-switcher';
import { trackScroll, сlickToUpBtn } from './js/events/btnUp';
import { signUpWithGoogle, signOutFromGoogle } from './js/API/firebaseAPI';
import './js/events/multi-language';
import {
  onCloseModalDev,
  onCloseModalDevBackdrop,
  onOpenModalDev,
  onCloseModaDevlEsc,
} from './js/events/modalDevs';
import moviesFilter from './js/events/moviesFilter';
