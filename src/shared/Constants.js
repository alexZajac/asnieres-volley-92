import React from 'react';
import {
  Home,
  Coffee,
  Hexagon,
  MapPin,
  Map,
  ShoppingCart,
  Camera,
  Clipboard,
} from 'react-feather';

export const sectionAccueil = {
  name: 'Accueil',
  to: '/',
  icon: props => <Home {...props} />,
};

export const sectionActualites = {
  name: 'Actualités',
  to: '/actualites/',
  icon: props => <Coffee {...props} />,
};

export const sectionClub = {
  name: 'Le Club',
  to: '/club/',
  icon: props => <Hexagon {...props} />,
};

export const sectionInfosPratiques = {
  name: 'Infos Pratiques',
  to: '/infos-pratiques/',
  icon: props => <MapPin {...props} />,
};

export const sectionEquipes = {
  name: 'Les Équipes',
  to: '/equipes/',
  icon: props => <Clipboard {...props} />,
};

export const sectionBoutique = {
  name: 'La Boutique',
  to: '/boutique/',
  icon: props => <ShoppingCart {...props} />,
};

export const sectionProgrammes = {
  name: 'Le Programme',
  to: '/programme/',
  icon: props => <Map {...props} />,
};

export const sectionMedias = {
  name: 'Médias',
  to: '/medias/',
  icon: props => <Camera {...props} />,
};

export const sections = [
  sectionAccueil,
  sectionActualites,
  sectionClub,
  sectionInfosPratiques,
  sectionEquipes,
  sectionBoutique,
  sectionProgrammes,
  sectionMedias,
];
