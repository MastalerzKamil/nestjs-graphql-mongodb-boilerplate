import ConnectionArgs from './types/connection.args';
import { ConnectionCursor, fromGlobalId } from 'graphql-relay';
import { PagingMeta } from './types/paging-meta.type';
import { PagingParameter } from './types/paging-parameter.type';

export class PaginationService {
  getId = (cursor: ConnectionCursor) => parseInt(fromGlobalId(cursor).id, 10);
  nextId = (cursor: ConnectionCursor) => this.getId(cursor) + 1;

  checkPagingSanity = (args: ConnectionArgs): PagingMeta => {
    const { first = 0, last = 0, after, before } = args;

    const isForwardPaging = !!first || !!after;
    const isBackwardPaging = !!last || !!before;
    if (isForwardPaging && isBackwardPaging) {
      throw new Error('Relay pagination cannot be forwards AND backwards!');
    }
    if ((isForwardPaging && before) || (isBackwardPaging && after)) {
      throw new Error('Paging must use either first/after or last/before!');
    }
    if ((isForwardPaging && first < 0) || (isBackwardPaging && last < 0)) {
      throw new Error('Paging limit must be positive!');
    }
    if (last && !before) {
      throw new Error(
        "When paging backwards, a 'before' argument is required!",
      );
    }

    // eslint-disable-next-line no-nested-ternary
    return isForwardPaging
      ? { pagingType: 'forward', after, first }
      : isBackwardPaging
      ? { pagingType: 'backward', before, last }
      : { pagingType: 'none' };
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  getPagingParameters = (args: ConnectionArgs): PagingParameter => {
    const meta = this.checkPagingSanity(args);

    switch (meta.pagingType) {
      case 'forward': {
        return {
          limit: meta.first,
          offset: meta.after ? this.nextId(meta.after) : 0,
        };
      }
      case 'backward': {
        const { last, before } = meta;
        let limit = last;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        let offset = this.getId(before!) - last;

        if (offset < 0) {
          limit = Math.max(last + offset, 0);
          offset = 0;
        }

        return { offset, limit };
      }
      default:
        return {};
    }
  };
}
