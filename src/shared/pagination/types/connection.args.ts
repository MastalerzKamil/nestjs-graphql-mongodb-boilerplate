import { ConnectionArguments, ConnectionCursor } from 'graphql-relay';
import { Field, ArgsType } from '@nestjs/graphql';
import { PaginationService } from '../pagination.service';

@ArgsType()
export default class ConnectionArgs implements ConnectionArguments {
  @Field({ nullable: true, description: 'Paginate before opaque cursor' })
  public before?: ConnectionCursor;

  @Field({ nullable: true, description: 'Paginate after opaque cursor' })
  public after?: ConnectionCursor;

  @Field({ nullable: true, description: 'Paginate first' })
  public first?: number;

  @Field({ nullable: true, description: 'Paginate last' })
  public last?: number;

  pagingParams = () => {
    const paginationService = new PaginationService();
    return paginationService.getPagingParameters(this);
  };
}
