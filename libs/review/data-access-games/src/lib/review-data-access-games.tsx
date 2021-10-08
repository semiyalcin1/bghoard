import React, { useEffect, useState } from 'react';
import { Game } from '@bghoard/api-interfaces';

export const useGames = () => {
  const [games, setGame] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then((r) => r.json())
      .then(setGame);
  }, []);

  return games;
};
