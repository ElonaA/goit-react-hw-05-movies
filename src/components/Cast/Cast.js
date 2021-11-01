import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/Api';
import Actor from './Actor';
import { Wrapper, List } from './Cast.styled';
import Preloader from '../Loader/Loader';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const [loading, setLoading] = useState(false);

  const match = useRouteMatch();

  useEffect(() => {
    fetchCast();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCast = async () => {
    const { movieId } = match.params; // получаем айди с пропсов
    setLoading(true);
    try {
      const { cast } = await api.fetchCast(movieId);
      if (cast.length === 0) {
        return toast.warning('There is no any information');
      }
      setActors(cast);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Preloader />}

      <Wrapper>
        {actors && (
          <List>
            {actors.map(actor => (
              <Actor key={actor.id} actor={actor} />
            ))}
          </List>
        )}
      </Wrapper>
    </>
  );
}

Cast.propTypes = {
  match: PropTypes.object.isRequired,
};
