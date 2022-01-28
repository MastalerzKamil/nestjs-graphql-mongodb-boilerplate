import { ObjectType } from '@nestjs/graphql';
import relayTypes from '../../shared/pagination/types/rely-types';
import { Movie } from '../models/movie.model';

@ObjectType()
export default class AllMoviesResponse extends relayTypes<Movie>(Movie) {}
