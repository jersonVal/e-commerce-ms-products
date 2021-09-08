import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Marca} from './marca.model';
import {Categoria} from './categoria.model';
import {CategoriaProducto} from './categoria-producto.model';
import {Imagenes} from './imagenes.model';

@model({
  settings: {
    foreignKeys: {
      fk_producto_id_marca: {
        name: 'fk_producto_id_marca',
        entity: 'Marca',
        entityKey: 'id',
        foreignKey: 'id_marca'
      }
    }
  }
})
export class Producto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'number',
    default: 0,
  })
  existencia?: number;

  @property({
    type: 'number',
    default: 0,
  })
  calificacion?: number;

  @property({
    type: 'number',
    default: 0,
  })
  descuento?: number;

  @belongsTo(() => Marca, {name: 'marca'})
  id_marca: number;

  @hasMany(() => Categoria, {through: {model: () => CategoriaProducto, keyFrom: 'id_producto', keyTo: 'id_categoria'}})
  categorias: Categoria[];

  @hasMany(() => Imagenes, {keyTo: 'id_producto'})
  imagenes: Imagenes[];

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
