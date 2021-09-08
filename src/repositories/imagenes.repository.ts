import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Imagenes, ImagenesRelations} from '../models';

export class ImagenesRepository extends DefaultCrudRepository<
  Imagenes,
  typeof Imagenes.prototype.id,
  ImagenesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Imagenes, dataSource);
  }
}
