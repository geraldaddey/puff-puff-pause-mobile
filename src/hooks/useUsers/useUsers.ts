import { useInfiniteQuery } from 'hooks/useInifiniteQuery/useInfiniteQuery';

export const useUsers = () =>
  useInfiniteQuery(
    'getUsersInfinite',
    {},
    {
      getNextPageParam: ({ nextPage }) => {
        return nextPage;
      },
    },
  );
