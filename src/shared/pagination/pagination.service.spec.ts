import { PaginationService } from './pagination.service';
import ConnectionArgs from './types/connection.args';
import { BadRequestException } from '@nestjs/common';

describe('PaginationService', () => {
  const service: PaginationService = new PaginationService();

  afterEach(() => jest.clearAllMocks());

  describe('check paging correctness', () => {
    it('should throw error when user wants to forward and backward pagination', () => {
      const input: ConnectionArgs = {
        pagingParams: jest.fn(),
        first: 2,
        after: 'xyz',
        before: 'test',
        last: 1,
      };

      try {
        service.checkPagingSanity(input);
        fail('should throw BadRequest error');
      } catch (err) {
        expect(err).toEqual(
          new BadRequestException(
            new Error('Relay pagination cannot be forwards AND backwards!'),
          ),
        );
      }
    });

    it('should throw error when user wants use negative first or last', () => {
      const input: ConnectionArgs = {
        pagingParams: jest.fn(),
        first: -1,
        after: undefined,
        before: undefined,
        last: 0,
      };

      try {
        service.checkPagingSanity(input);
        fail('should throw BadRequest error');
      } catch (err) {
        expect(err).toEqual(
          new BadRequestException(new Error('Paging limit must be positive!')),
        );
      }
    });

    it('should throw error when user does not uses before for backward paging', () => {
      const input: ConnectionArgs = {
        pagingParams: jest.fn(),
        first: 0,
        after: undefined,
        before: undefined,
        last: 2,
      };

      try {
        service.checkPagingSanity(input);
        fail('should throw BadRequest error');
      } catch (err) {
        expect(err).toEqual(
          new BadRequestException(
            new Error(
              "When paging backwards, a 'before' argument is required!",
            ),
          ),
        );
      }
    });

    it('should use forward paging correctly', () => {
      const input: ConnectionArgs = {
        pagingParams: jest.fn(),
        first: 2,
      };

      const result = service.checkPagingSanity(input);

      expect(result).toEqual({
        pagingType: 'forward',
        first: 2,
        after: undefined,
      });
    });

    it('should use backward paging correctly', () => {
      const input: ConnectionArgs = {
        pagingParams: jest.fn(),
        last: 2,
        before: 'xyz',
      };

      const result = service.checkPagingSanity(input);

      expect(result).toEqual({
        pagingType: 'backward',
        last: 2,
        before: 'xyz',
      });
    });
  });
});
