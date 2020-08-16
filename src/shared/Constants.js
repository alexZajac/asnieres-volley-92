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
  subSections: [
    {
      name: null,
      pages: [
        {
          name: 'Dernières actualités',
          to: '/actualites/dernieres-actualites',
        },
        {
          name: 'Actus du club',
          to: '/actualites/actus-du-club',
        },
        {
          name: 'Évènements',
          to: '/actualites/evenements',
        },
      ],
    },
  ],
};

export const sectionClub = {
  name: 'Le Club',
  to: '/club/',
  icon: props => <Hexagon {...props} />,
  subSections: [
    {
      name: null,
      pages: [
        {
          name: 'Présentation du club',
          to: '/club/presentation-club',
        },
        {
          name: 'Les Entraîneurs',
          to: '/club/entraineurs',
        },
        {
          name: 'Les Bénévoles',
          to: '/club/benevoles',
        },
        {
          name: 'Devenir Partenaire',
          to: '/club/devenir-partenaires',
        },
        {
          name: 'Contact',
          to: '/club/contact',
        },
      ],
    },
  ],
};

export const sectionInfosPratiques = {
  name: 'Infos Pratiques',
  to: '/infos-pratiques/',
  icon: props => <MapPin {...props} />,
  subSections: [
    {
      name: null,
      pages: [
        {
          name: 'Tarifs & Inscription',
          to: '/infos-pratiques/tarifs-inscriptions',
        },
        {
          name: 'Planning des entraînements',
          to: '/infos-pratiques/planning-entrainements',
        },
        {
          name: 'Plan d’accès aux Gymnases',
          to: '/infos-pratiques/plan-acces-gymnase',
        },
        {
          name: 'Documents utiles',
          to: '/infos-pratiques/document-utiles',
        },
        {
          name: 'Score en direct',
          to: '/infos-pratiques/score-en-direct',
        },
      ],
    },
  ],
};

export const sectionEquipes = {
  name: 'Les Équipes',
  to: '/equipes/',
  icon: props => <Clipboard {...props} />,
  subSections: [
    {
      name: 'Seniors',
      pages: [
        {
          name: 'Nationale 2 Masculine',
          to: '/equipes/seniors/masc-1/',
        },
        {
          name: 'Pré Nationale Féminine',
          to: '/equipes/seniors/fem-1/',
        },
        {
          name: 'Régionale Masculine',
          to: '/equipes/seniors/masc-2/',
        },
      ],
    },
    {
      name: 'Jeunes',
      pages: [
        {
          name: 'M20',
          to: '/equipes/jeunes/m20/',
        },
        {
          name: 'M17',
          to: '/equipes/jeunes/m17/',
        },
        {
          name: 'M15',
          to: '/equipes/jeunes/m15/',
        },
        {
          name: 'M13',
          to: '/equipes/jeunes/m13/',
        },
      ],
    },
    {
      name: 'Baby Volley',
      to: '/equipes/baby-volley',
      pages: [],
    },
    {
      name: 'Loisirs',
      to: '/equipes/loisirs',
      pages: [],
    },
  ],
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
