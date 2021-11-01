import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Wrapper, Form, Input, Button, Label } from './Searchform.styled';

const Searchform = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Наблюдает за инпутом и пишет значние в стейт
  const handleSearchInput = e => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

  // Наблюдает за отправкой и отдает значение во внешний компонент
  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      toast.info('Please write your request', {
        autoClose: 2000,
      });
      return;
    }

    onSearch(query);

    resetForm();
  };

  // Сбрасывает поле после отправки
  const resetForm = () => setQuery('');

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={query}
          onChange={handleSearchInput}
          autoComplete="off"
          placeholder="Search movies"
          required
        />
        <Button type="submit" title="Go">
          <Label>Search</Label>
        </Button>
      </Form>
    </Wrapper>
  );
};

Searchform.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchform;
