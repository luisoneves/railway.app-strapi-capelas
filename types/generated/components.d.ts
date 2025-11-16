import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    icon: 'cast';
  };
  attributes: {
    Banner: Schema.Attribute.Media<'images' | 'files'>;
    botaoLabel: Schema.Attribute.String;
    botaoUrl: Schema.Attribute.String;
    H1Titulo: Schema.Attribute.String;
    H2Subtitulo: Schema.Attribute.String;
  };
}

export interface LayoutItemDeMenu extends Struct.ComponentSchema {
  collectionName: 'components_layout_item_de_menus';
  info: {
    displayName: 'Item de Menu';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutItemDoRodape extends Struct.ComponentSchema {
  collectionName: 'components_layout_item_do_rodapes';
  info: {
    displayName: 'Item do Rodape';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.hero': LayoutHero;
      'layout.item-de-menu': LayoutItemDeMenu;
      'layout.item-do-rodape': LayoutItemDoRodape;
    }
  }
}
