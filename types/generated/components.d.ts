import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    description: "Coordonn\u00E9es pour contacter l'\u00E9tablissement";
    displayName: 'Contact';
    icon: 'phone';
    name: 'Contact';
  };
  attributes: {
    email: Schema.Attribute.String;
    site_web: Schema.Attribute.Text;
    telephone: Schema.Attribute.String;
  };
}

export interface SharedLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    description: "Regroupe les informations d'adresse et localisation";
    displayName: 'Location';
    icon: 'map-marker-alt';
    name: 'Location';
  };
  attributes: {
    adresse: Schema.Attribute.Text;
    code_postal: Schema.Attribute.String;
    departement: Schema.Attribute.String;
    geoloc_json: Schema.Attribute.JSON;
    pays: Schema.Attribute.String;
    region: Schema.Attribute.String;
    ville: Schema.Attribute.String;
  };
}

export interface SharedOffre extends Struct.ComponentSchema {
  collectionName: 'components_shared_offres';
  info: {
    description: "Regroupe les informations sur l'offre et les prix";
    displayName: 'Offre';
    icon: 'tags';
    name: 'Offre';
  };
  attributes: {
    offre_detail: Schema.Attribute.Text;
    prix_max: Schema.Attribute.Decimal;
    prix_min: Schema.Attribute.Decimal;
    type_doffre: Schema.Attribute.String;
  };
}

export interface SharedOuverture extends Struct.ComponentSchema {
  collectionName: 'components_shared_ouvertures';
  info: {
    description: "Informations d'ouverture / horaires";
    displayName: 'Ouverture';
    icon: 'clock';
    name: 'Ouverture';
  };
  attributes: {
    explication_ouverture: Schema.Attribute.Text;
    ouverture: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contact': SharedContact;
      'shared.location': SharedLocation;
      'shared.offre': SharedOffre;
      'shared.ouverture': SharedOuverture;
    }
  }
}
