import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Producto} from './producto.model';

@model(
  {
    settings: {
      foreignKeys: {
        fk_cat_prod_id_producto: {
          name: 'fk_cat_prod_id_producto',
          entity: 'Producto',
          entityKey: 'id',
          foreignKey: 'id_producto'
        }
      }
    }
  }
)
export class Imagenes extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => Producto, {name: 'producto'})
  id_producto: number;

  constructor(data?: Partial<Imagenes>) {
    super(data);
  }
}

export interface ImagenesRelations {
  // describe navigational properties here
}

export type ImagenesWithRelations = Imagenes & ImagenesRelations;
